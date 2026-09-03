import { useEffect, useState } from "react";

export interface Sensor {
  id: string;
  name: string;
  type: string;
  status: "Online" | "Warning" | "Offline";
  value: string;
}

const initialSensors: Sensor[] = [
  {
    id: "camera",
    name: "Vision Camera",
    type: "AI Vision",
    status: "Online",
    value: "Active",
  },
  {
    id: "ultrasonic",
    name: "Ultrasonic Sensor",
    type: "Fill Detection",
    status: "Online",
    value: "62%",
  },
  {
    id: "loadcell",
    name: "Load Cell",
    type: "Weight Sensor",
    status: "Online",
    value: "14.8 kg",
  },
  {
    id: "esp32",
    name: "ESP32 Controller",
    type: "Edge Control",
    status: "Online",
    value: "Connected",
  },
  {
    id: "ai",
    name: "AI Vision Engine",
    type: "Inference",
    status: "Online",
    value: "96.4%",
  },
  {
    id: "gateway",
    name: "IoT Gateway",
    type: "Communication",
    status: "Online",
    value: "Connected",
  },
];

export default function useLiveSensors() {
  const [sensors, setSensors] =
    useState<Sensor[]>(initialSensors);

  const updateSensors = () => {
    setSensors((currentSensors) =>
      currentSensors.map((sensor) => {
        const random = Math.random();

        if (
          sensor.id === "camera"
        ) {
          return {
            ...sensor,
            status:
              random > 0.97
                ? "Warning"
                : "Online",
            value:
              random > 0.97
                ? "Checking"
                : "Active",
          };
        }

        if (
          sensor.id === "ultrasonic"
        ) {
          const fill =
            Math.floor(
              Math.random() * 15
            ) + 55;

          return {
            ...sensor,
            status:
              fill >= 75
                ? "Warning"
                : "Online",
            value: `${fill}%`,
          };
        }

        if (
          sensor.id === "loadcell"
        ) {
          const weight =
            (
              13 +
              Math.random() * 9
            ).toFixed(1);

          return {
            ...sensor,
            status: "Online",
            value: `${weight} kg`,
          };
        }

        if (
          sensor.id === "esp32"
        ) {
          return {
            ...sensor,
            status:
              random > 0.98
                ? "Warning"
                : "Online",
            value:
              random > 0.98
                ? "Checking"
                : "Connected",
          };
        }

        if (
          sensor.id === "ai"
        ) {
          const confidence =
            (
              91 +
              Math.random() * 8
            ).toFixed(1);

          return {
            ...sensor,
            status: "Online",
            value: `${confidence}%`,
          };
        }

        return {
          ...sensor,
          status:
            random > 0.98
              ? "Warning"
              : "Online",
          value:
            random > 0.98
              ? "Reconnecting"
              : "Connected",
        };
      })
    );
  };

  useEffect(() => {
    const interval =
      setInterval(
        updateSensors,
        5000
      );

    return () =>
      clearInterval(interval);
  }, []);

  return {
    sensors,
  };
}