import { withRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
// import moment from 'moment'

// import Comp from '../components/comp'

const Comp = dynamic(import('../components/comp'))

const COLOR = '#113366'

const Title = styled.h1`
  color: ${COLOR};
  font-size: 20px;
`

const A = ({ router, name, time }) => (
  <>
    <Title>This is Title {time}</Title>
    <Comp />
    <Link href="#aaa">
      <a className="link">
        A--{router.query.id}--{name}
      </a>
    </Link>
    <style jsx>{`
      a {
        color: red;
      }
      .link {
        color: ${COLOR};
      }
    `}</style>
  </>
)

A.getInitialProps = async ctx => {

  const moment = await import('moment')

  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'thomas',
        time: moment.default(Date.now() - 60 * 1000).fromNow()
      })
    }, 1000);
  })

  return await promise
}

// A.getInitialProps = (ctx) => {
//   return {
//     name: 'thomas',
//     time: moment(Date.now() - 60 * 1000).fromNow()
//   }
// }

export default withRouter(A)