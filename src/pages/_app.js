import CustomCursor from '@/components/modules/CustomCursor/index'
import MouseContextProvider from '@/components/context/mouseContext'
import '../styles/main.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MouseContextProvider>
        <CustomCursor />
        <Component {...pageProps} />
      </MouseContextProvider>
    </>
  )
}

export default MyApp
