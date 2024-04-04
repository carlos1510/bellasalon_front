import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./routes/Login/Login";

export const router = createBrowserRouter([
    {
        id: "app",
        path: "/home?",
        element: <App />,
        
    },
    {
        path: "/login",
        element: <Login />
    }
])