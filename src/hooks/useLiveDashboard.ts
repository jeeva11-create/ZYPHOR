import { useEffect, useState } from "react";

interface LiveBin {
  id: string;
  name: string;
  fillLevel: number;
  weight: number;
  status: string;
}

const initialBins: LiveBin[] = [
  {
    id: "1",
    name: "Organic",
    fillLevel: 62,
    weight: 14.8,
    status: "Attention",
  },
  {
    id: "2",
    name: "Recyclable",
    fillLevel: 78,
    weight: 21.4,
    status: "Attention",
  },
  {
    id: "3",
    name: "Other",
    fillLevel: 34,
    weight: 7.2,
    status: "Normal",
  },
];

function getStatus(fillLevel: number) {
  if (fillLevel >= 80) {
    return "Critical";
  }

  if (fillLevel >= 60) {
    return "Attention";
  }

  return "Normal";
}

function generateUpdatedBins(currentBins: LiveBin[]) {
  return currentBins.map((bin) => {
    const fillChange =
      Math.random() > 0.5 ? 1 : -1;

    const weightChange =
      Math.random() * 0.3;

    const newFill = Math.min(
      100,
      Math.max(
        0,
        bin.fillLevel + fillChange
      )
    );

    const newWeight =
      bin.weight + weightChange;

    return {
      ...bin,
      fillLevel: newFill,
      weight: Number(
        newWeight.toFixed(1)
      ),
      status: getStatus(newFill),
    };
  });
}

export default function useLiveDashboard() {
  const [bins, setBins] =
    useState<LiveBin[]>(initialBins);

  const [lastUpdated, setLastUpdated] =
    useState(new Date());

  const [isRefreshing, setIsRefreshing] =
    useState(false);

  const [updateCount, setUpdateCount] =
    useState(0);

  const [emptyingBinId, setEmptyingBinId] =
    useState<string | null>(null);

  const refreshDashboard = () => {
    setIsRefreshing(true);

    setBins((currentBins) =>
      generateUpdatedBins(currentBins)
    );

    setLastUpdated(new Date());

    setUpdateCount(
      (count) => count + 1
    );

    setTimeout(() => {
      setIsRefreshing(false);
    }, 700);
  };
const processDetection = (
  _category: string,
  binName: string,
  confidence: number
) => {
  if (confidence < 80 || binName === "-") {
    return;
  }

  setBins((currentBins) =>
    currentBins.map((bin) => {
      if (bin.name !== binName) {
        return bin;
      }

      const fillIncrease = 2;
      const weightIncrease = 0.4;

      const newFill = Math.min(
        100,
        bin.fillLevel + fillIncrease
      );

      const newWeight =
        bin.weight + weightIncrease;

      return {
        ...bin,
        fillLevel: newFill,
        weight: Number(
          newWeight.toFixed(1)
        ),
        status: getStatus(newFill),
      };
    })
  );

  setLastUpdated(new Date());

  setUpdateCount(
    (count) => count + 1
  );
};
  const emptyBin = (binId: string) => {
    setEmptyingBinId(binId);

    setBins((currentBins) =>
      currentBins.map((bin) => {
        if (bin.id !== binId) {
          return bin;
        }

        return {
          ...bin,
          fillLevel: 0,
          weight: 0.5,
          status: "Normal",
        };
      })
    );

    setLastUpdated(new Date());

    setUpdateCount(
      (count) => count + 1
    );

    setTimeout(() => {
      setEmptyingBinId(null);
    }, 800);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBins((currentBins) =>
        generateUpdatedBins(currentBins)
      );

      setLastUpdated(new Date());

      setUpdateCount(
        (count) => count + 1
      );
    }, 5000);

    return () =>
      clearInterval(interval);
  }, []);

  return {
    bins,
    lastUpdated,
    isRefreshing,
    refreshDashboard,
    updateCount,
    emptyBin,
    emptyingBinId,
     processDetection,
  };
}