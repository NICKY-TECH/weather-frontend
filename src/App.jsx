import Auth from "./Authentication/Auth";
import  { DashboardLoader } from "./pages/Dashboard";
import { useSelector } from "react-redux";
import "./styles/destination.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Test from "./pages/Test";
import { lazy, Suspense } from "react";
const LazyDashboard = lazy(()=>import('./pages/Dashboard'));
const LazyMain = lazy(()=>import('./pages/Main'));
const LazyLogin = lazy(()=>import('./pages/Login'));
const LazyRegistration = lazy(()=>import('./pages/Registration'));


function App() {
  console.log('APP')
  const authValue = useSelector((state) => state.auth.value);
  console.log(authValue)
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Suspense><LazyMain/></Suspense>}>
          <Route path="registration" element={<Suspense><LazyRegistration/></Suspense>} />
          <Route path="login" element={<Suspense><LazyLogin/></Suspense>} />
        </Route>
        <Route
          path="dashboard"
          element=
        
           {<Auth auth={authValue}>
         <Suspense fallback="Loading">
         <LazyDashboard />
         </Suspense>
           </Auth>} 
                loader={DashboardLoader}

        />
        <Route path="test" element={<Auth auth={authValue}><Test/></Auth>}/>
 
    
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
