import Hero from '@/UI/organisms/Hero'

const Home = ({ data }) => {
  const {
    hero: { hero_title, background_vertex, background_shape },
    // skills: { title, list },
    // projects,
  } = data

  return (
    <>
      <Hero title={hero_title} images={[background_vertex, background_shape]} />
    </>
  )
}

export default Home
