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
      // Target the center of the left page, but set Z deep enough to pass *through* the book.
      const targetPos = [-0.64, 0, -0.5];
      
      // Slower damping (1.2 instead of 0.5) for a longer, cinematic zoom
      easing.damp3(state.camera.position, targetPos, 1.2, delta);
      easing.dampE(state.camera.rotation, [0, 0, 0], 1.2, delta);
      
      // When close enough to physically touch the page (z < 0.3), trigger black transition
      if (transitionState === 'zooming' && state.camera.position.z < 0.3) {
         setTransitionState('black');
      }
    }
  });
  return null;
};

export const Experience = () => {
  const [transitionState] = useAtom(transitionStateAtom);

  return (
    <>
      <CameraController />
      <Float
        rotation-x={-Math.PI / 8}
        floatIntensity={0.4}
        speed={1.5}
        rotationIntensity={0.15}
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
