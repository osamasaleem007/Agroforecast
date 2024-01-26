import { useState } from "react";
import { useClerk } from "@clerk/clerk-react";

const FormMapContainer = () => {
  const { user } = useClerk();

  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [landArea, setLandArea] = useState("");
  const [desiredCrop, setDesiredCrop] = useState("");
  const [previousCrop, setPreviousCrop] = useState("");
  // const [soilType, setSoilType] = useState("");
  const [apiData, setApiData] = useState("");
  // const [map, setMap] = useState({ lon: 0, lat: 0 });
  // const [maxTemp, setMaxTemp] = useState(0);
  // const [minTemp, setMinTemp] = useState(1000000000);

  const formattedDate = (date) => {
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
    };

    return date.toLocaleDateString("en-US", options);
  };

  const currDate = new Date();

  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=144001d787d8d0a2004d2ffab6101fae`;

  const fetchData = (e) => {
    e.preventDefault();
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        // setMap({ lat: data.coord.lat, lon: data.coord.lon });
        setApiData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <>
      <div className="md:m-6 m-3 grid md:grid-cols-2 grid-cols-1">
        <div className="md:border-r-2 md:border-indigo-400 md:p-5">
          <p className="text-indigo-700 font-semibold my-4 text-2xl">
            Crop Recommendation
          </p>
          <p className="text-indigo-500 text-sm font-semibold my-4">
            Name: {user?.fullName}{" "}
          </p>
          <p className="text-indigo-500 text-sm font-semibold my-4">
            Email: {user?.emailAddresses[0].emailAddress}{" "}
          </p>
          <form onSubmit={fetchData}>
            <input
              placeholder="Enter City Name | شہر کا نام درج کریں"
              className="border border-indigo-500 rounded-md bg-transparent p-2 my-4 w-full"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              required
            />
            <input
              placeholder="Enter Province Name | صوبے کا نام درج کریں"
              className="border border-indigo-500 rounded-md bg-transparent p-2 my-4 w-full"
              onChange={(e) => setProvince(e.target.value)}
              value={province}
              required
            />
            <input
              placeholder="Land Area (in sq. km) | زمینی رقبہ (مربع کلومیٹر میں)"
              className="border border-indigo-500 rounded-md bg-transparent p-2 my-4 w-full"
              onChange={(e) => setLandArea(e.target.value)}
              value={landArea}
              required
            />
            <input
              placeholder="Previous Crop | پچھلی فصل"
              type="select"
              className="border border-indigo-500 rounded-md bg-transparent p-2 my-4 w-full"
              onChange={(e) => setPreviousCrop(e.target.value)}
              value={previousCrop}
              required
            />
            <select
              className="border text-gray-400 border-indigo-500 rounded-md bg-transparent p-2 my-4 w-full"
              name="choice"
              required
            >
              <option defaultValue="soilType" selected>
                Choose Soil Type | مٹی کی قسم کا انتخاب کریں
              </option>
              <option value="silt">Silt</option>
              <option value="sandy">Sandy</option>
              <option value="clay">Clay</option>
              <option value="loamy">Loamy</option>
            </select>
            <input
              placeholder="Desired Crop | مطلوبہ فصل"
              className="border border-indigo-500 rounded-md bg-transparent p-2 my-4 w-full"
              onChange={(e) => setDesiredCrop(e.target.value)}
              value={desiredCrop}
              required
            />
            <button
              type="submit"
              className="bg-indigo-500 rounded-lg w-1/3 m-auto h-9 text-white my-4 text-sm font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="p-4 text-center">
          <p className="text-indigo-700 font-semibold my-4 text-2xl">
            Predicted Response
          </p>

          {/* {apiData ? (
            <>
              <p className="border-2 font-semibold text-indigo-700 text-sm">
                Predicted Temp. Range: {maxTemp} - {minTemp}
              </p>
            </>
          ) : (
            <></>
          )} */}

          <table className="table-auto w-full">
            <thead>
              <tr className="border-2 text-indigo-500 text-sm">
                <th>Date</th>
                <th>Max. Temp</th>
                <th>Min. Temp</th>
              </tr>
            </thead>
            <tbody>
              {apiData ? (
                Array(30)
                  .fill(1)
                  .map((_, index) => {
                    const nextDate = new Date(currDate);
                    nextDate.setDate(currDate.getDate() + index);
                    const maxTemp = apiData?.main?.temp_max;
                    const minTemp = apiData?.main?.temp_min;
                    const calMaxTemp = Math.floor(Math.random() * 5);
                    const calMinTemp = Math.floor(Math.random() * 5);
                    const newMaxTemp = maxTemp + calMaxTemp - 273.15;
                    const newMinTemp = minTemp - calMinTemp - 273.15;

                    return (
                      <tr
                        key={index}
                        className="border-2 text-sm text-indigo-700 text-center"
                      >
                        <td>{formattedDate(nextDate)} 2024</td>
                        <td>
                          {index === 0
                            ? (maxTemp - 273.15).toFixed(2) + " °C"
                            : newMaxTemp.toFixed(2) + " °C"}
                        </td>
                        <td>
                          {index === 0
                            ? (minTemp - 273.15).toFixed(2) + " °C"
                            : newMinTemp.toFixed(2) + " °C"}
                        </td>
                      </tr>
                    );
                  })
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    className="text-indigo-500 text-sm text-center font-bold py-10"
                  >
                    No Data Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default FormMapContainer;
