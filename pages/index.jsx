/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'
import dynamic from 'next/dynamic';

const BrowserComponent = dynamic(() => import('../src/components/browser.tsx'), {ssr: false})

const Page = ({content}) => (
  <div sx={{ height: `calc(100vh - 60px)`}}>
    <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%'}}>
      <h1 sx={{ fontSize: 6, my: 0 }}>{content.title}</h1>
    </div>
    <BrowserComponent/>
  </div>
)

export default Page;

export async function getStaticProps() {
  return {
    props: {
      content: {
        title: 'Look at my note app tho'
      }
    }
  }
}