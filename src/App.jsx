import Auth from "./Authentication/Auth";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Main from "./pages/Main";
import { useSelector } from "react-redux";
import Registration from "./pages/Registration";
import "./styles/destination.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Test from "./pages/Test";


function App() {
  console.log('APP')
  const authValue = useSelector((state) => state.auth.value);
  console.log(authValue)
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Main />}>
          <Route path="registration" element={<Registration />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route
          path="dashboard"
   
          element=
        
           {<Auth auth={authValue}>
            <Dashboard />
           </Auth>} 

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
