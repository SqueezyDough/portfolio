import React, { useMemo, useRef } from 'react'
import { extend, useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import BasicMaterial from './material'

extend({ BasicMaterial })

const ImageMaterial = ({ source }) => {
  const ref = useRef()
  const texture = useLoader(THREE.TextureLoader, source.url)

  const resolution = useMemo(() => {
    return new THREE.Vector2(window.innerWidth, window.innerHeight)
  }, [])

  useFrame(({ mouse }, delta) => {
    ref.current.material.uMouse = mouse
    ref.current.material.uTime += delta
  })

  return (
    <mesh ref={ref}>
      <planeBufferGeometry attach="geometry" args={[4, 10, 128, 128]}></planeBufferGeometry>
      <basicMaterial
        uTexture={texture}
        uResolution={resolution}
        attach="material"
        side={THREE.DoubleSide}
        transparent
      ></basicMaterial>
    </mesh>
  )
}

export default ImageMaterial
