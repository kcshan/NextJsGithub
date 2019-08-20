import WithRepoBasic from '../../components/WithRepoBasic'

const Detail = ({ text }) => {
  return <span>detail {text}</span>
}

Detail.getInitialProps = async () => {

  return {
    text: 123
  }
}

export default WithRepoBasic(Detail)