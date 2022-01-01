import gql from 'graphql-tag'
import client from '@/api/prismic-api'
import Layout from '@/components/templates/Layout'
import styles from './Index.module.scss'

const Index = ({ data }) => {
  const seo = {
    seo_title: 'Leroyvanbiljouw - Portfolio',
    seo_description: 'Homepage',
  }

  const {
    homepage: { title },
  } = data

  return (
    <Layout seo={seo} title={title}>
      <main className={styles.main}>Main content</main>
    </Layout>
  )
}

export default Index

export async function getStaticProps() {
  const req = await client.query({
    query: gql`
      {
        homepage(uid: "homepage", lang: "en-gb") {
          title
        }
      }
    `,
  })
  const { data } = await req

  return {
    props: { data },
  }
}
