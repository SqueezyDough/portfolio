import gql from 'graphql-tag'
import client from '@/api/prismic-api'
import Layout from '@/components/templates/Layout'
import Home from '@/components/templates/Home'

const Index = ({ data }) => {
  const logo = 'leroyvanbiljouw'
  const seo = {
    seo_title: 'Leroyvanbiljouw - Portfolio',
    seo_description: 'Homepage',
  }

  console.log(data)

  return (
    <Layout title={logo} seo={seo}>
      <Home data={data} />
    </Layout>
  )
}

export default Index

export async function getStaticProps() {
  const req = await client.query({
    query: gql`
      {
        navigation(uid: "navigation", lang: "en-gb") {
          logo_title
        }
        hero(uid: "hero", lang: "en-gb") {
          hero_title
          background_vertex
          background_shape
        }
        intro(uid: "intro", lang: "en-gb") {
          intro_text
        }
        skills(uid: "skills", lang: "en-gb") {
          title
          list {
            skill
          }
        }
        projects(uid: "projects", lang: "en-gb") {
          projects_title
          background_image
        }
      }
    `,
  })
  const { data } = await req

  return {
    props: { data },
  }
}
