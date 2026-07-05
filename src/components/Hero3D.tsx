import { Suspense, useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import type { Mesh, Group } from "three";
import { useIsMobile } from "@/hooks/use-mobile";

const SIGNAL = "#1f9d5c";

const Orb = () => {
  const meshRef = useRef<Mesh>(null);
  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.15;
    meshRef.current.rotation.y = t * 0.2;
  });
  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.6, 1]} />
      <meshStandardMaterial
        color={SIGNAL}
        roughness={0.35}
        metalness={0.4}
        emissive={SIGNAL}
        emissiveIntensity={0.15}
        flatShading
      />
    </mesh>
  );
};

const Ring = ({ radius = 2.6, tilt = 0.4, speed = 0.2 }: { radius?: number; tilt?: number; speed?: number }) => {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.getElapsedTime() * speed;
  });
  return (
    <mesh ref={ref} rotation={[tilt, 0.2, 0]}>
      <torusGeometry args={[radius, 0.012, 12, 128]} />
      <meshStandardMaterial color={SIGNAL} transparent opacity={0.35} />
    </mesh>
  );
};

const Shards = () => {
  const group = useRef<Group>(null);
  const shards = useMemo(
    () =>
      Array.from({ length: 8 }).map((_, i) => ({
        pos: [
          Math.cos((i / 8) * Math.PI * 2) * 3.2,
          Math.sin((i / 8) * Math.PI * 2) * 1.8,
          Math.sin(i) * 0.6,
        ] as [number, number, number],
        scale: 0.12 + (i % 3) * 0.05,
      })),
    []
  );
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.getElapsedTime() * 0.08;
  });
  return (
    <group ref={group}>
      {shards.map((s, i) => (
        <Float key={i} speed={1.2} rotationIntensity={0.6} floatIntensity={0.8}>
          <mesh position={s.pos} scale={s.scale}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial color="#0a0a0a" roughness={0.4} metalness={0.6} />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

const Scene = ({ pointer }: { pointer: { x: number; y: number } }) => {
  const group = useRef<Group>(null);
  useFrame(() => {
    if (!group.current) return;
    // subtle parallax toward pointer
    group.current.rotation.y += (pointer.x * 0.25 - group.current.rotation.y) * 0.04;
    group.current.rotation.x += (-pointer.y * 0.15 - group.current.rotation.x) * 0.04;
  });
  return (
    <group ref={group}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 5]} intensity={1.1} />
      <directionalLight position={[-4, -2, -3]} intensity={0.4} color={SIGNAL} />
      <Float speed={0.9} rotationIntensity={0.3} floatIntensity={0.6}>
        <Orb />
      </Float>
      <Ring radius={2.4} tilt={0.5} speed={0.18} />
      <Ring radius={2.9} tilt={-0.3} speed={-0.12} />
      <Shards />
    </group>
  );
};

const Hero3D = ({ className = "" }: { className?: string }) => {
  const isMobile = useIsMobile();
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
    if (isMobile) return;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setPointer({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [isMobile]);

  // Static fallback: soft radial gradient with subtle animated glow
  if (isMobile || !ready) {
    return (
      <div
        className={`pointer-events-none absolute inset-0 ${className}`}
        aria-hidden
        style={{
          background:
            "radial-gradient(60% 60% at 70% 30%, rgba(31,157,92,0.10) 0%, rgba(31,157,92,0) 60%), radial-gradient(50% 50% at 20% 80%, rgba(31,157,92,0.06) 0%, rgba(31,157,92,0) 70%)",
        }}
      />
    );
  }

  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        frameloop="always"
      >
        <Suspense fallback={null}>
          <Scene pointer={pointer} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Hero3D;
