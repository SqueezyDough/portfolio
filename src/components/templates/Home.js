import Hero from '@/UI/organisms/Hero'
import Introduction from '@/UI/organisms/Introduction'

const Home = ({ data }) => {
  const {
    hero: { hero_title, background_vertex, background_shape },
    // skills: { title, list },
    // projects,
  } = data

  return (
    <>
      <Hero heading={hero_title} images={[background_vertex, background_shape]} />
      <Introduction />
    </>
  )
}

export default Home
