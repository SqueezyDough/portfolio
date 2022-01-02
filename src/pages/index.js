import gql from 'graphql-tag'
import client from '@/api/prismic-api'
import Layout from '@/components/templates/Layout'
import Home from '@/components/templates/Home'

const Index = ({ data }) => {
  const seo = {
    seo_title: 'Leroyvanbiljouw - Portfolio',
    seo_description: 'Homepage',
  }

  const {
    homepage: { logo_title, title, intro, background },
  } = data

  const page_title = title[0].text
  const page_intro = intro[0].text

  return (
    <Layout seo={seo} title={logo_title}>
      <Home data={{ page_title, background, page_intro }} />
    </Layout>
  )
}

export default Index

export async function getStaticProps() {
  const req = await client.query({
    query: gql`
      {
        homepage(uid: "homepage", lang: "en-gb") {
          logo_title
          title
          background
          intro
        }
      }
    `,
  })
  const { data } = await req

  return {
    props: { data },
  }
}
