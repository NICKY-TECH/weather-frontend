import Auth from "./Authentication/Auth";
import { useSelector } from "react-redux";
import "./styles/destination.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import Test from "./pages/Test";
import { lazy, Suspense, useEffect } from "react";
import Dashboard, { DashboardLoader } from "./pages/Dashboard";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Main from "./pages/Main";
const LazyDashboard = lazy(()=>import('./pages/Dashboard'));
const LazyMain = lazy(()=>import('./pages/Main'));
const LazyLogin = lazy(()=>import('./pages/Login'));
const LazyRegistration = lazy(()=>import('./pages/Registration'));
import ErrorHandler from './pages/Error';


function App() {
  console.log('APP')
  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Main/>} errorElement={<ErrorHandler/>}>
        {/* <Route index element={<Navigate to="/login"/>} replace/> */}
          <Route path="registration" element={<Registration/>} />
          <Route path="login" element={<Login/>} />
        <Route
          path="dashboard"
          loader={DashboardLoader}
          element={<Dashboard/>}
               />
                {/* <Route path="test" element={<Auth auth={ useSelector((state) => state.auth.value)}><Test/></Auth>}/> */}
                </Route>

 
    

    )
  );
  return (
    <div className="app-wrapper">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
