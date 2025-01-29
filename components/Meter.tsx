"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const GaugeComponent = dynamic(() => import("react-gauge-component"), {
  ssr: false,
});

interface IValue {
  value: number;
  display: number | string;
  audioHook?: any;
}

interface IMeterProps {
  values: IValue[];
}

export const Meter = ({ values }: IMeterProps) => {
  // TO-DO: ADD GIF OPTION FOR VALUES
  // TO-DO: ADD MOBILE WARNING/STOPPER

  const [buttonsShowing, setButtonsShowing] = useState(true);
  const [meterValue, setMeterValue] = useState(0);

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown, true);

    return document.removeEventListener("keydown", onKeyDown);
  });

  const onKeyDown = (e: KeyboardEvent) => {
    const key = e.key;

    if (key.toUpperCase() === "R") setMeterValue(0);
    else if (key.toUpperCase() === "H") setButtonsShowing(!buttonsShowing);
    else {
      const displayKeyValue = values.filter(
        (val) => val.display.toString() === key || val.value.toString() === key
      );

      if (displayKeyValue.length > 0) handleButtonClick(displayKeyValue[0]);
    }
  };

  const handleButtonClick = (val: IValue) => {
    setMeterValue(val.value);
    if (val.audioHook) val.audioHook();
  };

  return (
    <>
      <GaugeComponent
        type="semicircle"
        labels={{
          valueLabel: {
            hide: true,
          },
          tickLabels: {
            type: "inner",
            ticks: values.map((val) => {
              return { value: val.value };
            }),
            defaultTickValueConfig: {
              formatTextValue: (value: number) => {
                if (value === 0 || value === 100) return "";
                return Math.round(value / 20).toString();
              },
              style: { fontSize: "28", color: "black", fill: "black" },
            },
          },
        }}
        style={{
          width: "1500px",
          height: "-webkit-fill-available",
          overflow: "visible",
          minHeight: "700px",
        }}
        arc={{
          width: 0.2,
          subArcs: [
            {
              limit: 20,
              color: "#EA4228",
              showTick: false,
            },
            {
              limit: 40,
              color: "#F58B19",
              showTick: false,
            },
            {
              limit: 60,
              color: "#F5CD19",
              showTick: false,
            },
            {
              limit: 80,
              color: "#a5e12c",
              showTick: false,
            },
            {
              limit: 100,
              color: "#5BE12C",
              showTick: false,
            },
          ],
        }}
        pointer={{ width: 10, length: 0.55 }}
        value={meterValue}
      />

      {buttonsShowing && (
        <div className="flex justify-center gap-4 mt-8">
          {values.map((val) => (
            <button
              className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
              onClick={() => handleButtonClick(val)}
              key={val.display}
            >
              {val.display}
            </button>
          ))}
          <button
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
            onClick={() => setButtonsShowing(false)}
          >
            Hide
          </button>
        </div>
      )}
    </>
  );
};
