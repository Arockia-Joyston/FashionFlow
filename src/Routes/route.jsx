import { createBrowserRouter } from "react-router-dom";
import Header from "../Components/Header";

var Pages = createBrowserRouter([
    {
        path: "/",
        element: <Header/>,
        
        
    }
]);

export default Pages; 