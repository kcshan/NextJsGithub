import WithRepoBasic from '../../components/WithRepoBasic'

const Issues = ({ text }) => {
  return <span>Issues {text}</span>
}

Issues.getInitialProps = async () => {

  return {
    text: 123
  }
}

export default WithRepoBasic(Issues, 'issues')