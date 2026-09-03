import { useState } from "react";

export interface Detection {
  category: string;
  confidence: number;
  bin: string;
  decision: string;
}

const initialDetection: Detection = {
  category: "No Detection",
  confidence: 0,
  bin: "-",
  decision: "Waiting",
};

export default function useLiveDetection() {
  const [detection, setDetection] =
    useState<Detection>(initialDetection);

  const [isScanning, setIsScanning] =
    useState(false);

  const [detectionCount, setDetectionCount] =
    useState(0);

  /*
   * This function is kept for compatibility
   * with the existing AIDetection component.
   *
   * Real AI detection is now handled by Flask + YOLO
   * through WasteUpload.tsx.
   */
  const runDetection = () => {
    setIsScanning(true);

    setTimeout(() => {
      setIsScanning(false);
    }, 1200);
  };

  /*
   * Used when a real Flask/YOLO result is received.
   */
  const setLiveDetection = (result: Detection) => {
    setDetection(result);
    setDetectionCount(
      (count) => count + 1
    );
  };

  return {
    detection,
    isScanning,
    detectionCount,
    runDetection,
    setLiveDetection,
  };
}