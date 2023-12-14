import Input from "../components/Input";
import "../styles/destination.css";

function Dashboard() {
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
  const successCallback =async (position) => {
    console.log(position);
    const points = {
      lat: position.coords.latitude,
      long:position.coords.longitude,
    };
    console.log('coors')
    console.log(position.coords)
    const response = await fetch("http://localhost:4000/weather", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(points),
    });
    console.log( await response.json())
  };

  const errorCallback = (error) => {
    console.log(error);
  };
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
};

export default Dashboard;
