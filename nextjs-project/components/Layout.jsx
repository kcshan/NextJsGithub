import Link from 'next/link'
import { Button } from 'antd'

export default ({ children }) => (
  <>
    <header>
      <Link href="/">
        <Button>to Index</Button>
      </Link>  
      <Link href="/a?id=1" as="/a/1">
        <Button>to A</Button>
      </Link>  
      <Link href="/test/b">
        <Button>to B</Button>
      </Link>  
    </header>
    {children}
  </>
)