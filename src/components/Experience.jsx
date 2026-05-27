import { Environment, Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useAtom } from "jotai";
import { easing } from "maath";
import { transitionStateAtom } from "./UI";
import { Book } from "./Book";

const CameraController = () => {
  const [transitionState, setTransitionState] = useAtom(transitionStateAtom);
  
  useFrame((state, delta) => {
    if (transitionState === 'zooming' || transitionState === 'black') {
      const isMobile = window.innerWidth < 768;
      // Target the center of the left page
      const targetPos = [-0.64, 0, isMobile ? 1.8 : 1.2];
      
      easing.damp3(state.camera.position, targetPos, 0.5, delta);
      easing.dampE(state.camera.rotation, [0, 0, 0], 0.5, delta);
      
      // When close enough, trigger black transition
      if (transitionState === 'zooming' && Math.abs(state.camera.position.z - targetPos[2]) < 0.5) {
         setTransitionState('black');
      }
    }
  });
  return null;
};

export const Experience = () => {
  const [transitionState] = useAtom(transitionStateAtom);
  const active = transitionState === 'idle';

  return (
    <>
      <CameraController />
      <Float
        rotation-x={active ? -Math.PI / 8 : 0}
        floatIntensity={active ? 0.4 : 0}
        speed={active ? 1.5 : 0}
        rotationIntensity={active ? 0.15 : 0}
      >
        <Book />
      </Float>

      <Environment preset="studio"></Environment>
      <directionalLight
        position={[2, 5, 2]}
        intensity={2.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
};
