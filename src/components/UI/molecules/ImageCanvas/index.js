import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Media from 'react-media'
import ImageMaterial from '@/UI/atoms/ImageMaterial'

export const ImageCanvas = ({ source }) => {
  const { background_mobile, background_desktop } = source

  return (
    <Canvas
      onCreated={({ gl }) => {
        gl.setClearColor('#202023')
      }}
    >
      <ambientLight castShadow></ambientLight>
      <spotLight intensity={1} position={[10, 1, 10]} castShadow></spotLight>
      <Suspense fallback={null}>
        <Media queries={{ small: { maxWidth: 768 } }}>
          {(matches) =>
            matches.small ? (
              <ImageMaterial source={background_mobile} />
            ) : (
              <ImageMaterial source={background_desktop} />
            )
          }
        </Media>
      </Suspense>
    </Canvas>
  )
}

export default ImageCanvas
