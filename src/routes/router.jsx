import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>
    },
    {
        path: '/details/:id',
        element: <Details></Details>,
        loader: async ({ params }) => {
            const response = await fetch('/projects.json');
            const projects = await response.json();
            return projects.find(project => project.id === parseInt(params.id));
        }
    }
]);


export default router;