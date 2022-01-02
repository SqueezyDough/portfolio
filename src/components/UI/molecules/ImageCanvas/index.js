import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import ImageMaterial from '@/UI/atoms/ImageMaterial'

export const ImageCanvas = ({ source }) => {
  return (
    <Canvas
      onCreated={({ gl }) => {
        gl.setClearColor('#202023')
      }}
    >
      <ambientLight castShadow></ambientLight>
      <spotLight intensity={1} position={[10, 1, 10]} castShadow></spotLight>
      <Suspense fallback={null}>
        <ImageMaterial source={source} />
      </Suspense>
    </Canvas>
  )
}

export default ImageCanvas
