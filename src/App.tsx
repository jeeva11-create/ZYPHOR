import Background from "./components/layout/Background";
import Navbar from "./components/layout/Navbar";
import { useState } from "react";
import Hero from "./sections/Hero/Hero";
import Problem from "./sections/Problem/Problem";
import HowItWorks from "./sections/HowItWorks/HowItWorks";
import AIDetection from "./sections/AIDetection/AIDetection";
import Dashboard from "./sections/Dashboard/Dashboard";
import WasteQuality from "./sections/WasteQuality/WasteQuality";
import Technology from "./sections/Technology/Technology";
import AdaptiveAI from "./sections/AdaptiveAI/AdaptiveAI";
import Impact from "./sections/Impact/Impact";
import Deployment from "./sections/Deployment/Deployment";
import Footer from "./components/layout/Footer";

function App() {
  const [latestDetection, setLatestDetection] =
  useState<{
    category: string;
    confidence: number;
    bin: string;
    decision: string;
  } | null>(null);
  return (
    <>
      <Background />
      <Navbar />

      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <AIDetection onDetection={setLatestDetection} />
        <Dashboard latestDetection={latestDetection} />
  <WasteQuality />
  <AdaptiveAI />
  <Technology />
  <Impact />
  <Deployment />
  <Footer />
</main>
    </>
  );
}

export default App;