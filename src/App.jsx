import Dashboard, { DashboardLoader } from "./pages/Dashboard";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Registration from "./pages/Registration";
import "./styles/destination.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Main />}>
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} loader={ DashboardLoader }/>
      </Route>
    )
  );
  return (
    <div className="app-wrapper">
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
