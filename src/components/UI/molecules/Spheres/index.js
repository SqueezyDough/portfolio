import * as THREE from 'three'
import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing'
import { Icosahedron, useTexture, useCubeTexture, MeshDistortMaterial } from '@react-three/drei'
import { useViewportScroll, useTransform } from 'framer-motion'

function MainSphere({ material }) {
  const main = useRef()

  const { scrollY } = useViewportScroll()
  const y = useTransform(scrollY, [0, 2400], [0, 3200])

  // main sphere rotates following the mouse position
  useFrame(({ clock, mouse }) => {
    main.current.position.z = (y.current / 1000) * -0.75
    main.current.position.y = (y.current / 1000) * -1

    main.current.rotation.z = clock.getElapsedTime() / 2
    main.current.rotation.y = THREE.MathUtils.lerp(main.current.rotation.y, mouse.x * Math.PI, 0.05)
    main.current.rotation.x = THREE.MathUtils.lerp(main.current.rotation.x, mouse.y * Math.PI, 0.05)
  })
  return <Icosahedron args={[1, 4]} ref={main} material={material} position={[0, 0, 0]} />
}

function Instances({ material }) {
  const [sphereRefs] = useState(() => [])
  const initialPositions = [
    [-4, 20, -12],
    [-10, 12, -4],
    [-11, -12, -23],
    [-16, -6, -10],
    [12, -2, -3],
    [13, 4, -12],
    [14, -2, -23],
    [8, 10, -20],
  ]

  useFrame(() => {
    sphereRefs.forEach((el) => {
      el.position.y += 0.02
      if (el.position.y > 19) el.position.y = -18
      el.rotation.x += 0.06
      el.rotation.y += 0.06
      el.rotation.z += 0.02
    })
  })

  return (
    <>
      <MainSphere material={material} />
      {initialPositions.map((pos, i) => (
        <Icosahedron
          args={[1, 4]}
          position={[pos[0], pos[1], pos[2]]}
          material={material}
          key={i}
          ref={(ref) => (sphereRefs[i] = ref)}
        />
      ))}
    </>
  )
}

function Scene({ texture }) {
  const bumpMap = useTexture(texture.url)
  const envMap = useCubeTexture(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'], {
    path: '/cube/',
  })
  const [material, set] = useState()

  return (
    <>
      <MeshDistortMaterial
        ref={set}
        envMap={envMap}
        bumpMap={bumpMap}
        color={'#010101'}
        roughness={0.12}
        metalness={3}
        bumpScale={0.005}
        clearcoat={1}
        clearcoatRoughness={1}
        radius={1.25}
        distort={0.25}
      />
      {material && <Instances material={material} />}
    </>
  )
}

export default function Spheres({ className, texture }) {
  return (
    <Canvas
      className={className}
      colorManagement
      camera={{ position: [0, 0, 3] }}
      gl={{
        powerPreference: 'high-performance',
        alpha: false,
        antialias: false,
        stencil: false,
        depth: false,
      }}
    >
      <color attach="background" args={['#030303']} />
      <fog color="#161616" attach="fog" near={8} far={60} />
      <Suspense fallback={null}>
        <Scene texture={texture} />
      </Suspense>
      <EffectComposer multisampling={0} disableNormalPass={true}>
        <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} />
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} opacity={3} />
        <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.1} darkness={1} />
      </EffectComposer>
    </Canvas>
  )
}
