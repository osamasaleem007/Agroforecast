import { SignInButton } from "@clerk/clerk-react";
import Img from "../assets/SliderImg1.jpg"

const WelcomePage = () => {
  return (
    <>
      <div className="flex justify-center items-center text-center my-11">
        <div className="container-fluid">
          <div className="my-6">
            <img
              className="mx-auto my-6 w-[50rem]"
              src={Img}
              alt="Image"
            />
            <p className="font-bold text-4xl my-8">AGROFORECAST</p>
          </div>
          <div>
            <SignInButton className="bg-indigo-500 hover:bg-indigo-500 text-white font-semibold py-2 px-10 rounded" />
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
