import { createHashRouter } from 'react-router-dom'
import App from "../../App";
import {MainPage} from "../../components/mainPage/MainPage";
import {Basket} from "../../components/basket/Basket";

export const PATH = {
    basket: '/basket',
    mainPage: '/mainPage',
}

const router = createHashRouter([
    {
        path: '/',
        element: <MainPage />,
        children: [
            {
                        path: PATH.basket,
                        element: <Basket />,
                    },

                ],
            },

])

export default router