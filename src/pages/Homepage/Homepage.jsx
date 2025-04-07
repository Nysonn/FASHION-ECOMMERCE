import React from "react";
import HeroSection from "../../components/Homepage/HeroSection";
import LatestTrends from "../../components/Homepage/LatestTrends";
import SpotlightSection from "../../components/Homepage/SpotlightSection";
import ExploreCollective from "../../components/Homepage/ExploreCollective";

function Homepage() {
  return (
    <>
      <HeroSection />
      <LatestTrends />
      <SpotlightSection />
      <ExploreCollective />
    </>
  );
}

export default Homepage;
