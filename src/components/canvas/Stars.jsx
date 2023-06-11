import { PointMaterial, Points, Preload } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { random } from "maath";
import React, { Suspense, useRef } from "react";

const Stars = (props) => {
  const ref = useRef();

  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 }); // Creates 5000 random numbers inside a sphere

  useFrame((state)=>{
    ref.current.rotation.x += 0.002
    ref.current.rotation.y -= 0.002
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>

      {/* Create a sphere of the points as mentioned from the sphere variable */}
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute z-[-1] inset-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
