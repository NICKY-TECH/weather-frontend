import { useLoaderData } from "react-router-dom";
import Input from "../components/Input";
import "../styles/destination.css";

function Dashboard() {
  const data = useLoaderData();
  console.log(data);
  return (
    <section>
      <article>
        <div>
          <Input />
        </div>
      </article>
    </section>
  );
}

export const DashboardLoader = async () => {
  const successCallback = async (position) => {
    console.log(position);
    const points = {
      lat: `${position.coords.latitude}`,
      long:`${ position.coords.longitude}`,
    };
    console.log("coors");
    console.log(position.coords);
    const token = localStorage.getItem('data')
    try {
      const response = await fetch(
        "https://new-weather-app-ehzj.onrender.com/weather",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
            body: JSON.stringify(points),
        }
      );
      console.log("jons");
      const value = await response.json();
      console.log("value outside");
      console.log(value)
      if (value.success == true) {
        console.log("value");
        console.log(token)
        console.log(value)
      } else if (value.success == false) {
        console.log(value)
      }
    } catch (e) {
      console.log(e);
    }
  };

  const errorCallback = (error) => {
    return {
      success: false,
      message: "Ensure your device location is turned on",
      data: error,
    };
  };
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
};

export default Dashboard;
