"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingGeometry({
    position,
    geometry,
    color,
    speed = 1,
}: {
    position: [number, number, number];
    geometry: "torus" | "icosahedron" | "octahedron" | "dodecahedron";
    color: string;
    speed?: number;
}) {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.15 * speed;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.2 * speed;
        }
    });

    const geo = useMemo(() => {
        switch (geometry) {
            case "torus":
                return <torusGeometry args={[1, 0.4, 16, 32]} />;
            case "icosahedron":
                return <icosahedronGeometry args={[1.2, 0]} />;
            case "octahedron":
                return <octahedronGeometry args={[1, 0]} />;
            case "dodecahedron":
                return <dodecahedronGeometry args={[1, 0]} />;
        }
    }, [geometry]);

    return (
        <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.5}>
            <mesh ref={meshRef} position={position} scale={0.6}>
                {geo}
                <MeshDistortMaterial
                    color={color}
                    wireframe
                    transparent
                    opacity={0.3}
                    distort={0.2}
                    speed={2}
                />
            </mesh>
        </Float>
    );
}

function ParticleField() {
    const count = 200;
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count * 3; i++) {
            pos[i] = (Math.random() - 0.5) * 20;
        }
        return pos;
    }, []);

    const ref = useRef<THREE.Points>(null!);
    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y = state.clock.elapsedTime * 0.02;
            ref.current.rotation.x = state.clock.elapsedTime * 0.01;
        }
    });

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.02}
                color="#8b5cf6"
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    );
}

export default function Scene3D() {
    return (
        <div className="absolute inset-0 -z-10">
            <Canvas
                camera={{ position: [0, 0, 6], fov: 60 }}
                gl={{ antialias: true, alpha: true }}
                style={{ background: "transparent" }}
            >
                <ambientLight intensity={0.3} />
                <pointLight position={[5, 5, 5]} intensity={0.5} color="#8b5cf6" />
                <pointLight position={[-5, -5, 5]} intensity={0.3} color="#06b6d4" />

                <FloatingGeometry position={[-3, 1.5, -2]} geometry="torus" color="#8b5cf6" speed={0.8} />
                <FloatingGeometry position={[3, -1, -1]} geometry="icosahedron" color="#06b6d4" speed={1.2} />
                <FloatingGeometry position={[-1.5, -2, -3]} geometry="octahedron" color="#f472b6" speed={0.6} />
                <FloatingGeometry position={[2, 2.5, -2.5]} geometry="dodecahedron" color="#8b5cf6" speed={1} />
                <FloatingGeometry position={[0, 0, -4]} geometry="torus" color="#06b6d4" speed={0.4} />

                <ParticleField />
                <Stars radius={50} depth={50} count={1500} factor={3} saturation={0} fade speed={1} />
            </Canvas>
        </div>
    );
}
