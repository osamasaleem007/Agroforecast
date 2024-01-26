import Slider from "react-slick";
import SliderImg1 from "../assets/SliderImg1.jpg";
import SliderImg2 from "../assets/SliderImg2.jpg";
import SliderImg3 from "../assets/SliderImg3.jpg";

const HomeCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <></>,
    prevArrow: <></>,
    responsive: [
      {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <></>,
        prevArrow: <></>,
      },
    ],
  };
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center">
      <div className="md:p-12 p-8">
        <p className="text-indigo-700 text-3xl font-bold py-3">OUR VISION</p>
        <p className="text-indigo-500 text-justify md:leading-7 md:text-md text-sm">
          AgroForecast is an innovative web resource for all those looking to
          use technology to maximize their agricultural production and yields.
          Our model uses Machine Learning algorithms on historical climatic and
          agricultural data, and through weather prediction, suggests the ideal
          crop to the field owner/user to grow. This suggested crop will be the
          optimum choice according to the user&apos;s field location and the
          growth period of their crop. <br/> AgroForecast also provides interactive
          tools and climate information to improve resource use efficiency and
          to reduce crop production risk associated with climate variability and
          change. Messages in the form of alerts will be sent to the users every
          14 days, informing them of future climatic predictions and possible
          natural occurrences, such as heavy rainfall, dry spells, heatwaves,
          etc. Our current project scope covers 5 cities in the Sindh province:
          namely Hyderabad, Nawabshah, Sukkur, Tando Adama, & Thatta. <br/> However,
          Agroforecast&apos;s modular platform allows for an easy replication in
          other geographies and for content expansion in the future for other
          cities within Pakistan.
        </p>
      </div>
      <div className="md:p-10 p-2 md:order-last order-first">
        <div className="mx-auto w-full">
          <Slider {...settings}>
            <div>
              <img className="cover" src={SliderImg1} alt="Slider Image" />
              <p className="text-center font-bold md:text-xl text-md text-indigo-700">
                Transforming your Farming Experience in an Uncertain, Changing
                World
              </p>
            </div>
            <div>
              <img src={SliderImg2} alt="Slider Image" />
              <p className="text-center font-bold md:text-xl text-md text-indigo-700">
                AgroForecast is an innovative web resource for all those looking
                to use technology to maximize their agricultural production and
                yields.
              </p>
            </div>
            <div>
              <img
                className="h-full w-full my-10"
                src={SliderImg3}
                alt="Slider Image"
              />
              <p className="text-center font-bold md:text-xl text-md text-indigo-700">
                Using Machine-Learning Algorithms & Weather Prediction to
                Prevent Weather-Induced Crop Destructions
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;
