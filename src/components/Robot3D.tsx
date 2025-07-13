"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

function RobotModel({ mouse, onRobotClick }: { mouse: { x: number; y: number }; onRobotClick: () => void }) {
  const gltf = useGLTF('/models/robot_head.glb');
  const logoTexture = useTexture('/robotics_logo.png');
  const head = useRef<THREE.Group>(null);
  const headPivot = useRef<THREE.Group>(null);
  const body = useRef<THREE.Group>(null);
  const leftArm = useRef<THREE.Group>(null);
  const rightArm = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Head follows mouse with enhanced movement
    if (head.current) {
      head.current.rotation.y = THREE.MathUtils.lerp(
        head.current.rotation.y,
        (mouse.x - 0.5) * 1.5,
        0.08
      );
      head.current.rotation.x = THREE.MathUtils.lerp(
        head.current.rotation.x,
        (mouse.y - 0.5) * 0.8,
        0.08
      );
    }
    
    // Body subtle sway
    if (body.current) {
      body.current.rotation.y = Math.sin(t * 0.5) * 0.05;
    }

    // Arms subtle movement with smooth cursor interaction
    if (leftArm.current && rightArm.current) {
      const cursorX = mouse.x - 0.5; // -0.5 to 0.5 range
      
      // Base subtle movement
      const baseLeftZ = Math.sin(t * 0.8) * 0.1 - 0.2;
      const baseRightZ = -Math.sin(t * 0.8) * 0.1 + 0.2;
      
      // Calculate target positions for smooth movement towards cursor
      const leftTargetZ = cursorX < -0.15 ? baseLeftZ + (cursorX + 0.15) * 0.8 : baseLeftZ;
      const rightTargetZ = cursorX > 0.15 ? baseRightZ + (cursorX - 0.15) * 0.8 : baseRightZ;
      
      // Smooth interpolation towards target positions
      leftArm.current.rotation.z = THREE.MathUtils.lerp(
        leftArm.current.rotation.z,
        leftTargetZ,
        0.03
      );
      rightArm.current.rotation.z = THREE.MathUtils.lerp(
        rightArm.current.rotation.z,
        rightTargetZ,
        0.03
      );
    }
  });

  // Adjust head model materials and scale on load
  useEffect(() => {
    if (gltf && gltf.scene) {
      gltf.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          const name = child.name.toLowerCase();
          // Set eyes to cyan/blue
          if (name.includes('eye')) {
            child.material.color = new THREE.Color('#00FFFF');
            child.material.emissive = new THREE.Color('#00FFFF');
            child.material.emissiveIntensity = 1.5;
          } else {
            // Set head and all other parts to dark metallic
            child.material.color = new THREE.Color('#18191a');
            child.material.metalness = 1;
            child.material.roughness = 0.15;
            child.material.clearcoat = 1;
            child.material.clearcoatRoughness = 0.05;
          }
        }
      });
    }
  }, [gltf]);

  useEffect(() => {
    if (headPivot.current && mouse) {
      headPivot.current.rotation.y = mouse.x * 0.5;
      headPivot.current.rotation.x = mouse.y * 0.3;
    }
  }, [mouse]);

  return (
    <group position={[0, -0.7, 0]}>
      {/* Main Body */}
      <group ref={body} onClick={onRobotClick}>
        {/* Chest - oval/ellipsoid */}
        <mesh castShadow receiveShadow position={[0, 0.3, 0]} scale={[0.6, 1.1, 0.4]}>
          <sphereGeometry args={[0.45, 32, 32]} />
          <meshPhysicalMaterial 
            color="#18191a" 
            metalness={1} 
            roughness={0.15} 
            clearcoat={1} 
            clearcoatRoughness={0.05}
            reflectivity={0.98}
          />
        </mesh>
        {/* Robotics Logo on chest */}
        <mesh position={[0, 0.38, 0.18]} scale={[0.28, 0.28, 0.01]}>
          <planeGeometry args={[1, 1]} />
          <meshStandardMaterial 
            map={logoTexture}
            transparent
            opacity={0.9}
          />
        </mesh>
        {/* Futuristic chest panel */}
        <mesh position={[0, 0.32, 0.22]} scale={[0.5, 0.18, 0.05]}>
          <boxGeometry args={[0.32, 0.5, 0.02]} />
          <meshPhysicalMaterial color="#232323" metalness={0.8} roughness={0.13} />
        </mesh>
        {/* Shoulder armor - more angular */}
        <mesh position={[-0.32, 0.6, 0.05]} scale={[1.1, 0.7, 1.2]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshPhysicalMaterial color="#18191a" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[0.32, 0.6, 0.05]} scale={[1.1, 0.7, 1.2]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshPhysicalMaterial color="#18191a" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Neck - glowing ring */}
        <group position={[0, 0.8, 0]}>
          <mesh>
            <cylinderGeometry args={[0.08, 0.1, 0.08, 12]} />
            <meshPhysicalMaterial color="#232323" metalness={0.8} roughness={0.2} />
          </mesh>
          {/* Golden ring mesh removed */}
        </group>
        {/* Custom Head Model with pivot for correct rotation */}
        <group position={[-0.22, 0.88, 0]}>
          <group position={[0, 0, 0]}>
            <primitive object={gltf.scene} scale={[0.005, 0.005, 0.005]} position={[0.05, -0.2, 0]} />
          </group>
        </group>
        {/* Left Arm - more advanced, glowing accent */}
        <group ref={leftArm} position={[-0.32, 0.55, 0.05]} rotation={[0, 0, 0.15]}>
          <mesh position={[0, 0.08, 0]}>
            <sphereGeometry args={[0.08, 12, 12]} />
            <meshPhysicalMaterial color="#232323" metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh position={[0, -0.15, 0]} rotation={[0.2, 0, 0]}>
            <cylinderGeometry args={[0.06, 0.07, 0.3, 8]} />
            <meshPhysicalMaterial color="#18191a" metalness={0.9} roughness={0.1} />
          </mesh>
          <mesh position={[0, -0.15, 0.08]} scale={[0.8, 1, 0.3]}>
            <boxGeometry args={[0.05, 0.25, 0.02]} />
            <meshPhysicalMaterial color="#232323" metalness={0.8} roughness={0.15} />
          </mesh>
          <mesh position={[0, -0.35, 0]}>
            <sphereGeometry args={[0.05, 12, 12]} />
            <meshPhysicalMaterial color="#232323" metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh position={[0, -0.55, 0]} rotation={[0.2, 0, 0]}>
            <cylinderGeometry args={[0.05, 0.06, 0.25, 8]} />
            <meshPhysicalMaterial color="#18191a" metalness={0.9} roughness={0.1} />
          </mesh>
          <mesh position={[0, -0.75, 0]}>
            <sphereGeometry args={[0.06, 12, 12]} />
            <meshPhysicalMaterial color="#18191a" metalness={0.9} roughness={0.1} />
          </mesh>
          {/* Glowing hand accent (yellow) */}
          <mesh position={[0, -0.75, 0.05]}>
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshStandardMaterial 
              color="#FFD600" 
              emissive="#FFD600" 
              emissiveIntensity={1}
            />
          </mesh>
        </group>
        {/* Right Arm - more advanced, glowing accent */}
        <group ref={rightArm} position={[0.32, 0.55, 0.05]} rotation={[0, 0, -0.15]}>
          <mesh position={[0, 0.08, 0]}>
            <sphereGeometry args={[0.08, 12, 12]} />
            <meshPhysicalMaterial color="#232323" metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh position={[0, -0.15, 0]} rotation={[0.2, 0, 0]}>
            <cylinderGeometry args={[0.06, 0.07, 0.3, 8]} />
            <meshPhysicalMaterial color="#18191a" metalness={0.9} roughness={0.1} />
          </mesh>
          <mesh position={[0, -0.15, 0.08]} scale={[0.8, 1, 0.3]}>
            <boxGeometry args={[0.05, 0.25, 0.02]} />
            <meshPhysicalMaterial color="#232323" metalness={0.8} roughness={0.15} />
          </mesh>
          <mesh position={[0, -0.35, 0]}>
            <sphereGeometry args={[0.05, 12, 12]} />
            <meshPhysicalMaterial color="#232323" metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh position={[0, -0.55, 0]} rotation={[0.2, 0, 0]}>
            <cylinderGeometry args={[0.05, 0.06, 0.25, 8]} />
            <meshPhysicalMaterial color="#18191a" metalness={0.9} roughness={0.1} />
          </mesh>
          <mesh position={[0, -0.75, 0]}>
            <sphereGeometry args={[0.06, 12, 12]} />
            <meshPhysicalMaterial color="#18191a" metalness={0.9} roughness={0.1} />
          </mesh>
          {/* Glowing hand accent (yellow) */}
          <mesh position={[0, -0.75, 0.05]}>
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshStandardMaterial 
              color="#FFD600" 
              emissive="#FFD600" 
              emissiveIntensity={1}
            />
          </mesh>
        </group>
      </group>
    </group>
  );
}

export default function Robot3D() {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [glitchActive, setGlitchActive] = useState(false);
  
  const handleRobotClick = () => {
    setGlitchActive(true);
    setTimeout(() => {
      setGlitchActive(false);
    }, 2000);
  };
  
  return (
    <div
      className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-background to-muted relative"
      onMouseMove={e => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMouse({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }}
    >
      {/* Glitch Effect Overlay */}
      {glitchActive && (
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 animate-pulse"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-32 h-32 mx-auto bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                <img 
                  src="/robotics_logo.png" 
                  alt="Robotics Logo" 
                  className="w-24 h-24 object-contain rounded-lg"
                />
              </div>
              <div className="text-white font-orbitron text-lg animate-pulse">
                SYSTEM GLITCH
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-ping"></div>
          <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-ping delay-500"></div>
        </div>
      )}
      
      <Canvas shadows camera={{ position: [0, 0.2, 3.2], fov: 28 }} style={{ width: '100%', height: '100%', background: 'none' }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 10, 7]} intensity={1.5} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
        <pointLight position={[0, 2, 2]} intensity={0.8} color="#FFD600" />
        <RobotModel mouse={mouse} onRobotClick={handleRobotClick} />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
} 