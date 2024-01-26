import NavBar from "../components/NavBar";
import HomeCarousel from "../components/HomeCarousel";

const Home = () => {
  return (
    <>
      <div className="max-w-[1440px] mx-auto">
        <NavBar />
        <HomeCarousel />
      </div>
    </>
  );
};

export default Home;
