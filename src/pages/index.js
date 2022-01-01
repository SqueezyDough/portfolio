import Layout from '@/components/templates/Layout'

import styles from './Index.module.scss'

const Index = () => {
  const seo = {
    seo_title: 'LeroyvanBiljouw - Portfolio',
    seo_description: 'Homepage',
  }

  return (
    <Layout seo={seo}>
      <main className={styles.main}>Hello World</main>
    </Layout>
  )
}

export default Index
