import SEO from '@/components/seo'
import Header from '@/UI/organisms/Header'
// import Footer from '@/UI/organisms/Footer'

const Layout = ({ children, seo, text, ...props }) => {
  const { seo_title, seo_description } = seo

  return (
    <>
      <SEO seo_title={seo_title} seo_description={seo_description} />
      <Header text={text} />
      <main {...props}>{children}</main>
      {/* <Footer /> */}
    </>
  )
}

export default Layout
