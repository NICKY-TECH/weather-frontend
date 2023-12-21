import { useLoaderData } from "react-router-dom";
import "../styles/destination.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState } from "react";
import Logout from "../components/Logout";

function Dashboard() {
  function getCurrentDayAndTime() {
    // Create a new Date object
    const now = new Date();

    // Get the day in full (e.g., "Monday", "Tuesday", etc.)
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayInFull = daysOfWeek[now.getDay()];

    // Get the current time in HH:mm format
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");

    // Determine if it's AM or PM
    const amOrPm = hours >= 12 ? "PM" : "AM";

    // Convert 24-hour format to 12-hour format
    const formattedHours = hours % 12 || 12;

    const time = `${formattedHours}:${minutes} ${amOrPm}`;

    return {
      day: dayInFull,
      time: time,
    };
  }
  const currentTime = getCurrentDayAndTime();
  const outcome = null;
  const [data, setData] = useState(outcome);
  console.log("data");
  console.log(outcome);
  async function getInfo() {
    const cityValue = document.getElementById("city").value;
    const token = localStorage.getItem("data");
    const response = await fetch(
      "https://new-weather-app-ehzj.onrender.com/weather",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          city: cityValue,
        }),
      }
    );
    console.log("city");
    const newData = await response.json();
    setData(newData);
  }
  const iconUrl = `http://openweathermap.org/img/w/${ data? data.data.weather[0].icon :''}.png`;
  {
    console.log("weather");
  }
  {
    console.log();
  }
  return (
    <section>
      <header>
        <GiHamburgerMenu className="ham" />
      {data?  <h1>WELCOME BACK,{localStorage.getItem("user").toUpperCase()}</h1>:''}

        <Logout />
      </header>
      <article>
    {
      data?<>
      <div className="search">
          <div className="search-box">
            <input
              type="text"
              id="city"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter the name of a City"
              required
            />
          </div>
          <div className="magnifying-glass" onClick={getInfo}>
            <FaMagnifyingGlass />
          </div>
        </div>
        <div className="top-info">
          <div className="city-icon">
            <h3 className="city-name">{data.data.name}</h3>
            <div className="city-icon-d ">
              <img src={iconUrl} />
              <p>{data.data.weather[0].main}</p>
            </div>
            <p className="temp">
              {data.data.main.temp}{" "}
              <sup>
                <sup>&deg;</sup>C|<sup>&deg;</sup>F
              </sup>
            </p>
          </div>
          <p>
            {" "}
            {currentTime.day},{currentTime.time}
          </p>
          <p className="humidity">
            Humidity:<span>{data.data.main.humidity}%</span>
          </p>
          {console.log(data.main)}
        </div>
      </>:''
    }
      </article>
    </section>
  );
}



export default Dashboard;
