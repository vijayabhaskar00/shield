import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Plane } from '@react-three/drei';
import * as THREE from 'three';

interface IridescenceProps {
  color?: [number, number, number];
  mouseReact?: boolean;
  amplitude?: number;
  speed?: number;
}

const IridescenceMaterial = ({ color = [0, 1, 1], amplitude = 0.1, speed = 1.0 }) => {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const timeRef = useRef(0);

  useFrame((state, delta) => {
    if (materialRef.current) {
      timeRef.current += delta * speed;
      materialRef.current.uniforms.uTime.value = timeRef.current;
    }
  });

  return (
    <shaderMaterial
      ref={materialRef}
      transparent
      uniforms={{
        uTime: { value: 0 },
        uColor: { value: new THREE.Vector3(...color) },
        uAmplitude: { value: amplitude },
      }}
      vertexShader={`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `}
      fragmentShader={`
        uniform float uTime;
        uniform vec3 uColor;
        uniform float uAmplitude;
        varying vec2 vUv;

        void main() {
          vec2 uv = vUv;
          float wave = sin(uv.x * 10.0 + uTime) * cos(uv.y * 10.0 + uTime) * uAmplitude;
          vec3 color = uColor * (0.5 + 0.5 * sin(wave * 10.0));
          gl_FragColor = vec4(color, 0.5);
        }
      `}
    />
  );
};

const Iridescence: React.FC<IridescenceProps> = ({
  color = [0, 1, 1],
  mouseReact = false,
  amplitude = 0.1,
  speed = 1.0,
}) => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>
        <Plane args={[2, 2]}>
          <IridescenceMaterial color={color} amplitude={amplitude} speed={speed} />
        </Plane>
      </Canvas>
    </div>
  );
};

export default Iridescence;