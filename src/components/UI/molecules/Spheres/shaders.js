const shaders = {
  vertexShader: `
    varying vec2 vUv;
    varying vec3 vPosition;

    void main() {
      vUv = uv;

      vPosition = position;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    float map(float value, float min1, float max1, float min2, float max2) {
      return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
    }

    varying vec2 vUv;
    uniform sampler2D texture;
    uniform vec3 mouse;
    varying vec3 vPosition;

    void main()	{
        vec2 uv = vUv;

        vec2 direction = normalize(vPosition.xy - mouse.xy);

        float dist = distance(vPosition, mouse);

        float proximity = 1. - map(dist, 0., 5., 0., 1.);

        vec2 effectUV = vUv + direction * proximity * 0.05;
        vec2 effectUV2 = mix(vUv, mouse.xy + vec2(.6), proximity);

        vec4 color = texture2D(texture, effectUV2);


        gl_FragColor = vec4(proximity,proximity,proximity, 1.);
        gl_FragColor = vec4(direction,0., 1.);
        gl_FragColor = color;

    }
  `,
  uniforms: {
    texture: {
      type: 't',
      value: '',
    },
    mouse: {
      type: 'v3',
      value: [0, 0, 0],
    },
  },
}

export default shaders
