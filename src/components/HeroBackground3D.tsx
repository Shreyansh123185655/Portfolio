import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Floating particles
function Particles({ count = 800 }) {
  const mesh = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      // Blue-cyan-white palette
      const t = Math.random();
      colors[i * 3] = 0.3 + t * 0.7;
      colors[i * 3 + 1] = 0.6 + t * 0.4;
      colors[i * 3 + 2] = 1.0;
    }
    return [positions, colors];
  }, [count]);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = clock.getElapsedTime() * 0.04;
    mesh.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.02) * 0.1;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} vertexColors transparent opacity={0.85} sizeAttenuation />
    </points>
  );
}

// Floating wireframe torus
function TorusRing() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = clock.getElapsedTime() * 0.3;
    mesh.current.rotation.z = clock.getElapsedTime() * 0.2;
  });
  return (
    <mesh ref={mesh} position={[3.5, -1, -4]}>
      <torusGeometry args={[1.5, 0.04, 16, 80]} />
      <meshBasicMaterial color="#00bfff" transparent opacity={0.2} wireframe />
    </mesh>
  );
}

// Floating icosahedron
function Icosahedron() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = clock.getElapsedTime() * 0.5;
    mesh.current.rotation.x = clock.getElapsedTime() * 0.25;
    mesh.current.position.y = Math.sin(clock.getElapsedTime() * 0.6) * 0.4 - 1.5;
  });
  return (
    <mesh ref={mesh} position={[-4, -1.5, -5]}>
      <icosahedronGeometry args={[1.1, 0]} />
      <meshBasicMaterial color="#7b61ff" transparent opacity={0.15} wireframe />
    </mesh>
  );
}

// Floating grid lines (connection feel)
function GridLines() {
  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = -5; i <= 5; i++) {
      pts.push(new THREE.Vector3(i, -4, -6));
      pts.push(new THREE.Vector3(i, 4, -6));
    }
    for (let j = -4; j <= 4; j++) {
      pts.push(new THREE.Vector3(-5, j, -6));
      pts.push(new THREE.Vector3(5, j, -6));
    }
    return pts;
  }, []);

  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry().setFromPoints(points);
    return g;
  }, [points]);

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color="#00bfff" transparent opacity={0.07} />
    </lineSegments>
  );
}

const HeroBackground3D = () => {
  return (
    <div className="absolute inset-0 z-0" style={{ pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <Particles count={900} />
        <TorusRing />
        <Icosahedron />
        <GridLines />
      </Canvas>
    </div>
  );
};

export default HeroBackground3D;
