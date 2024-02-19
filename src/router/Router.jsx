import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Homepage from "../pages/Homepage";
import Catalog from "../pages/Catalog";
import Productpage from "../pages/Productpage";
import Salespage from "../pages/Salespage";
import Contactspage from "../pages/Contactspage";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Homepage />
            },
            {
                path: "/catalog",
                element: <Catalog />
            },
            {
                path: "/product/:id",
                element: <Productpage />
            },
            {
                path: "/sales",
                element: <Salespage />
            },
            {
                path: "/contacts",
                element: <Contactspage />
            }
        ]
    }
])

export default router