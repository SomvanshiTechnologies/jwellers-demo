import Hero from "../components/Hero";
import BestSelling from "../components/BestSelling";

function Home() {
  return (
    <div className="home-page bg-baige">
      {/* navbar */}

      <Hero />
      <BestSelling />
    </div>
  );
}

export default Home;
