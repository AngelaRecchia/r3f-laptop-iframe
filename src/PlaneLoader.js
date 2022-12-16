import * as THREE from "three";

const vertexShader /*glsl*/ = `
void main() {
  gl_Position = vec4(position, 1.0);
}
`;

const fragmentShader /*glsl*/ = `
uniform vec3 uColor;
void main() {
  gl_FragColor = vec4(uColor, 1.0);
}
`;
const PlaneLoader = () => {
  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uColor: { value: new THREE.Color("#333") },
        }}
      />
    </mesh>
  );
};

export default PlaneLoader;
