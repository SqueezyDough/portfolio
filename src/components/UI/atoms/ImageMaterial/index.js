import React, { useMemo, useRef } from 'react'
import { extend, useFrame, useLoader, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import BasicMaterial from './material'

extend({ BasicMaterial })

const ImageMaterial = ({ source }) => {
  const ref = useRef()
  const texture = useLoader(THREE.TextureLoader, source.url)
  const { viewport } = useThree()

  const resolution = useMemo(() => {
    return new THREE.Vector2(source.dimensions.width, source.dimensions.height)
  }, [source])

  useFrame(({ mouse }, delta) => {
    ref.current.material.uMouse = mouse
    ref.current.material.uTime += delta
  })

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <planeBufferGeometry
        attach="geometry"
        // add .5 to make image border not visible
        args={[viewport.width + 0.5, viewport.height + 0.5, 128, 128]}
      ></planeBufferGeometry>
      <basicMaterial
        uTexture={texture}
        uResolution={resolution}
        attach="material"
        transparent
      ></basicMaterial>
    </mesh>
  )
}

export default ImageMaterial
