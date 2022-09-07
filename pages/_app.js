import GlobalStyle from "../components/GlobalStyle"
import Layout from "../components/Layout"
GlobalStyle





function MyApp ({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps}/>
    </Layout> )
}

export default MyApp
