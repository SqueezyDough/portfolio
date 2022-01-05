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
    homepage: {
      logo_title,
      title,
      intro,
      background_mobile,
      background_desktop,
      background_planetary_1,
      background_planetary_2,
    },
  } = data

  const page_title = title[0].text
  const page_intro = intro[0].text
  const images = {
    background_mobile,
    background_desktop,
    background_planetary_1,
    background_planetary_2,
  }

  return (
    <Layout seo={seo} title={logo_title}>
      {/* TODO: make page transition using (currently active?) affinity graphic */}
      <Home data={{ page_title, images, page_intro }} />
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
          background_mobile
          background_desktop
          intro
          background_planetary_1
          background_planetary_2
        }
      }
    `,
  })
  const { data } = await req

  return {
    props: { data },
  }
}
