"use client";

import dynamic from "next/dynamic";
const GaugeComponent = dynamic(() => import("react-gauge-component"), {
  ssr: false,
});

interface IMeterProps {
  meterValue: number;
}

export const Meter = ({ meterValue }: IMeterProps) => {
  return (
    <GaugeComponent
      type="semicircle"
      labels={{
        valueLabel: {
          hide: true,
        },
        tickLabels: {
          type: "inner",
          ticks: [
            { value: 10 },
            { value: 30 },
            { value: 50 },
            { value: 70 },
            { value: 90 },
          ],
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
  );
};
