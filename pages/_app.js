import '../styles/globals.css'
import GlobalStyle from './components/GlobalStlyle'
import Layout from './components/layout'


function MyApp({ Component, pageProps }) {
  return 
  <Layout>
    <GlobalStyle/>
 <Component {...pageProps} />
 </Layout>
}

export default MyApp
