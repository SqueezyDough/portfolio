import SEO from '@/components/seo'
import Header from '@/UI/organisms/Header'
import Footer from '@/UI/organisms/Footer'

const Layout = ({ children, seo, ...props }) => {
  const { seo_title, seo_description } = seo
  const { title } = props

  return (
    <>
      <SEO seo_title={seo_title} seo_description={seo_description} />
      <Header title={title} />
      <main {...props}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
