const Detail = () => {
  return <span>detail</span>
}

Detail.getInitialProps = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({})
    }, 500);
  })
}
export default Detail