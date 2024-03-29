import Hero from "@/components/Hero";
import HomeProperty from "@/components/HomeProperty";
import InfoBoxes from "@/components/InfoBoxes";
import connectDB from "@/config/db";

const Homepage = () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperty />
    </>
  );
};

export default Homepage;
