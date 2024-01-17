import { useRouteError } from "react-router-dom";

export default function ErrorHandler(){
    let error = useRouteError();
    return <h1>{error}</h1>
}