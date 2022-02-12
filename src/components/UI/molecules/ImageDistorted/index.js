import { useRef, Suspense } from 'react'
import * as THREE from 'three'
import { Canvas, extend, useFrame, useLoader, useThree } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import glsl from 'babel-plugin-glsl/macro'

const WaveShaderMaterial = shaderMaterial(
  // Uniform - pass data from JS to shader
  { uTime: 0, uColor: new THREE.Color(1.0, 0.0, 0.0), uTexture: new THREE.Texture() },
  // Vertex shader - receives attributes to manipulate position of each vertex
  glsl`
    precision mediump float;

    varying vec2 vUv;
    varying float vWave;

    uniform float uTime;

    #pragma glslify: snoise3 = require(glsl-noise/simplex/3d);

	  void main() {
      vUv = uv;

      vec3 pos = position;
      float noiseFreq = 2.5;
      float noiseAmp = 0.25;
      vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
      pos.z += snoise3(noisePos) * noiseAmp;
      vWave = pos.z;

      // enable this to enable wave on Vertex
	    // gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
	  }`,
  // Fragment - sets color/pixel of each fragment
  glsl`
    precision mediump float;

    uniform vec3 uColor;
    uniform float uTime;
    uniform sampler2D uTexture;

    varying vec2 vUv;
    varying float vWave;

		void main() {
      float wave = vWave * 0.05;
      vec3 texture = texture2D(uTexture, vUv + wave).rgb;
	    gl_FragColor = vec4(texture, 1.0);
	  }`
)

extend({ WaveShaderMaterial })

const Wave = ({ texture }) => {
  const ref = useRef()
  const { viewport } = useThree()
  const [image] = useLoader(THREE.TextureLoader, [texture.url])

  useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()))

  return (
    <mesh>
      <planeBufferGeometry args={[viewport.width, viewport.height, 16, 16]}></planeBufferGeometry>
      <waveShaderMaterial ref={ref} uTexture={image} />
    </mesh>
  )
}

const Scene = ({ image }) => {
  return (
    <Canvas camera={{ fov: 10, position: [0, 0, 5] }}>
      <Suspense fallback={null}>
        <Wave texture={image} />
      </Suspense>
    </Canvas>
  )
}

const ImageDistorted = ({ image }) => {
  return <Scene image={image} />
}

export default ImageDistorted
