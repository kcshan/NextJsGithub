
import { useEffect } from 'react'
import getConfig from 'next/config'
import { Button, Icon, Tabs } from 'antd'
import { connect } from 'react-redux'
import Router, { withRouter } from 'next/router'
import LRU from 'lru-cache'

import Repo from '../components/Repo'
import { cacheArray } from '../lib/repo-basic-cache'

const api = require('../lib/api')

const { publicRuntimeConfig } = getConfig()

const cache = new LRU({
  maxAge: 1000 * 60 * 10
})

let cachedUserRepos, cachedUserStarRepos

const isServer = typeof window === 'undefined'

const Index = ({ userRepos, userStarRepos, user, router }) => {

  const tabKey = router.query.key || '1'

  const handleTabChange = (activeKey) => {
    Router.push(`/?key=${activeKey}`)
  }

  useEffect(() => {
    if (!isServer) {
      // 第一种方式
      // cachedUserRepos = userRepos
      // cachedUserStarRepos = userStarRepos
      // const timeout = setTimeout(() => {
      //   cachedUserRepos = null
      //   cachedUserStarRepos = null
      // }, 1000 * 60 * 10);
      // 第二种方式
      if (userRepos) {
        cache.set('userRepos', userRepos)
      }
      if (userStarRepos) {
        cache.set('userStarRepos', userStarRepos)
      }
    }
  }, [userRepos, userStarRepos])

  useEffect(() => {
    if (!isServer) {
      cacheArray(userRepos)
      cacheArray(userStarRepos)
    }
  })

  if (!user || !user.id) {
    return <div className="root">
      <p>亲， 您还没有登录哦~</p>
      <Button type="primary" href={publicRuntimeConfig.OAUTH_URL} >点击登录</Button>  
      <style jsx>{`
        .root{
          height: 400px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  }

  return (
    <div className="root">
      <div className="user-info">
        <img src={user.avatar_url} alt="user avatar" className="avatar" />
        <span className="login">{user.login}></span> 
        <span className="name">{user.name}</span>
        <span className="bio">{user.bio}</span>
        <p className="email">
          <Icon type="mail" style={{ marginRight: 10 }}></Icon>
          <a href={`mailto:${user.email}`}>{user.email}</a>
        </p>
      </div>
      <div className="user-repos">
        <div className="user-repo">
          {/* {
            userRepos.map(repo => (
              <Repo repo={repo} />
            ))
          } */}
          <Tabs activeKey={tabKey} onChange={handleTabChange} animated={false}>
            <Tabs.TabPane tab="你的仓库" key="1">
              {
                userRepos.map(repo => (
                  <Repo key={repo.id} repo={repo} />
                ))
              }
            </Tabs.TabPane>
            <Tabs.TabPane tab="你关注的仓库" key="2">
              {
                userStarRepos.map(repo => (
                  <Repo key={repo.id} repo={repo} />
                ))
              }
            </Tabs.TabPane>
          </Tabs>
        </div>
      </div>
      <style jsx>{`
        .root{
          display: flex;
          align-items: flex-start;
          padding: 20px 0;
        }
        .user-info {
          width: 200px;
          margin-right: 40px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
        }
        .login{
          font-weight: 800;
          font-size: 20px;
          margin-top: 20px;
        }
        .name{
          font-size: 16px;
          color: #777;
        }
        .bio {
          margin-top: 20px;
          color: #333;
        }
        .avatar{
          width: 100%;
          border-radius: 5px;
        }
      `}</style>
    </div>
  )
}


Index.getInitialProps = async ({ ctx, reduxStore }) => {

  const user = reduxStore.getState().user
  if (!user || !user.id) {
    return {
      isLogin: false
    }
  } 

  if (!isServer) {
    // 第一种方式
    // if (cachedUserRepos && cachedUserStarRepos) {
    //   return {
    //     userRepos: cachedUserRepos,
    //     userStarRepos: cachedUserStarRepos
    //   }
    // }
    // 第二种方式
    if (cache.get('userRepos') && cache.get('userStarRepos')) {
      return {
        userRepos: cache.get('userRepos'),
        userStarRepos: cache.get('userStarRepos')
      }
    }
  }
  

  const userRepos = await api.request(
    {
      url: '/user/repos'
    }, 
    ctx.req, 
    ctx.res
  )

  const userStarRepos = await api.request(
    {
      url: '/user/starred'
    }, 
    ctx.req, 
    ctx.res
  )
  
  return {
    userRepos: userRepos.data,
    userStarRepos: userStarRepos.data,
    isLogin: true
  }
}

export default withRouter(connect(function mapState (state) {
  return {
    user: state.user
  }
})(Index))

