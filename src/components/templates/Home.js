import Hero from '@/UI/organisms/Hero'
import Intro from '@/UI/organisms/Intro'

const Home = ({ data }) => {
  const { page_title, background, page_intro } = data
  return (
    <div className="content">
      <Hero title={page_title} background={background} />
      <Intro text={page_intro} />
    </div>
  )
}

export default Home
