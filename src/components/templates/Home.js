import Hero from '@/UI/organisms/Hero'

const Home = ({ data }) => {
  const { page_title, background } = data
  return (
    <div className="content">
      <Hero title={page_title} background={background} />
    </div>
  )
}

export default Home
