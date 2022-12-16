import {
  Environment,
  Float,
  PresentationControls,
  ContactShadows,
  Sparkles,
  Text,
} from "@react-three/drei";
import { Suspense } from "react";
import { Model } from "./Model";

export default function Experience() {
  return (
    <>
      <Suspense>
        {/* <PlaneLoader /> */}
        <color args={["#777"]} attach={"background"} />
        <Environment preset="city" />

        <Suspense>
          <Sparkles count={300} scale={10} size={1} />
        </Suspense>

        <PresentationControls
          global
          rotation={[0.13, 0.1, 0]}
          polar={[-0.4, 0.2]}
          azimuth={[-1, 0.75]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 2, tension: 400 }}
        >
          <Float rotationIntensity={0.4}>
            <Suspense>
              <Model />
            </Suspense>

            <Text
              fontSize={0.8}
              maxWidth={3}
              position={[2, 0.75, 0.75]}
              rotation-y={-1.25}
            >
              Explore, now.
            </Text>
          </Float>
        </PresentationControls>

        <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
      </Suspense>
    </>
  );
}
