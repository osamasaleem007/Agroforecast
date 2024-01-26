import FormMapContainer from "../components/FormMapContainer";
import NavBar from "../components/NavBar";

const Weather = () => {
  return (
    <>
      <div className="max-w-[1440px] mx-auto">
        <NavBar />
        <div className="my-10">
          <FormMapContainer />
        </div>
      </div>
    </>
  );
};

export default Weather;
