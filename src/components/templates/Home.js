import Hero from '@/UI/organisms/Hero'
import Intro from '@/UI/organisms/Intro'
import Skills from '@/UI/organisms/Skills'

const Home = ({ data }) => {
  const { page_title, images, page_intro } = data
  const { background_mobile, background_desktop, background_planetary_1 } = images

  return (
    <>
      <div className="content">
        <Hero title={page_title} images={{ background_mobile, background_desktop }} />
        <Intro text={page_intro} />
      </div>
      <Skills image={background_planetary_1} />
    </>
  )
}

export default Home
