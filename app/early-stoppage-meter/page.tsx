"use client";

import { Meter } from "@/components/Meter";
import { useState } from "react";

const EarlyStoppageMeter = () => {
  const [meterValue, setMeterValue] = useState(0);

  const earlyStoppageValues = [
    { setValue: 6, display: 1 },
    { setValue: 27, display: 2 },
    { setValue: 50, display: 3 },
    { setValue: 73, display: 4 },
    { setValue: 94, display: 5 },
    { setValue: -30, display: "Reset" },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Meter meterValue={meterValue} />

      <div className="flex justify-center gap-4 mt-8">
        {earlyStoppageValues.map((val) => (
          <button
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
            onClick={() => setMeterValue(val.setValue)}
            key={val.display}
          >
            {val.display}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EarlyStoppageMeter;
