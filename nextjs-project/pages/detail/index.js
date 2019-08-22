import WithRepoBasic from '../../components/with-repo-basic'
import dynamic from 'next/dynamic'
const api = require('../../lib/api')

const MDrenderer = dynamic(
  () => import('../../components/MarkdownRenderer'),
  {
    loading: () => <p>Loading</p>
  }
)

const Detail = ({ readme }) => {
  return <MDrenderer content={readme.content} isBase64={true} />
}

Detail.getInitialProps = async ({ ctx: { query: { owner, name }, req, res } }) => {

  const readmeResp = await api.request(
    {
      url: `/repos/${owner}/${name}/readme`
    },
    req,
    res
  )

  return {
    readme: readmeResp.data
  }
}

export default WithRepoBasic(Detail, 'index')