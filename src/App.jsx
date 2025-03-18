import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import LatestTrends from "./components/LatestTrends";
import SpotlightSection from "./components/SpotlightSection";
import ExploreCollective from "./components/ExploreCollective";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-roboto text-gray-900 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <LatestTrends />
        <SpotlightSection />
        <ExploreCollective />
      </main>
      <Footer />
    </div>
  );
}

export default App;