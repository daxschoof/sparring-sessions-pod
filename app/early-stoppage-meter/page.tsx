"use client";

import { Meter } from "@/components/Meter";
import useSound from "use-sound";

const EarlyStoppageMeter = () => {
  const [iAmNotImpSound] = useSound("/audio/I_Am_Not_Impressed.mp3");
  const [andTwistItSound] = useSound("/audio/AND_TWIST_IT.mp3");
  const [cantLetYouSound] = useSound("/audio/I_Can't_Let_You_Get_Close.mp3");
  const [masvidalKOSound] = useSound("/audio/Masvidal_KO.mp3");
  const [herbDeanFaultSound] = useSound("/audio/Herb_Dean_Fault.mp3");

  const earlyStoppageValues = [
    { value: 10, display: 1, audioHook: iAmNotImpSound },
    { value: 30, display: 2, audioHook: andTwistItSound },
    { value: 50, display: 3, audioHook: cantLetYouSound },
    { value: 70, display: 4, audioHook: masvidalKOSound },
    { value: 90, display: 5, audioHook: herbDeanFaultSound },
    { value: 0, display: "Reset" },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full mt-24">
      <h1
        className="text-6xl font-extrabold text-[#d22f36] capitalize"
        style={{ fontFamily: "'Comic Sans', cursive" }}
      >
        YE&apos; OLDE EARLY STOPPAGE METER
      </h1>
      <Meter values={earlyStoppageValues} />
    </div>
  );
};

export default EarlyStoppageMeter;
