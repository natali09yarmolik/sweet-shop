import React from 'react';
import s from './App.module.scss'
import {MainPage} from "./components/mainPage/MainPage";
import {Basket} from "./components/basket/Basket";
import {useSelector} from "react-redux";
import {selectVisible} from "src/items.selectors";
import {Header} from "src/components/header/Header";
import {Particle} from "src/components/particles/Particle";

function App() {

    const visible = useSelector(selectVisible)

    const basketClass = visible ? s.basketBlock : s.basketBlockFalse
    return (
        <div className={s.App}>
            <Header/>
            <main>
                <Particle/>
                <div className={s.mainBlock}>
                    <MainPage/>
                    <div className={basketClass}>
                        <Basket/>
                    </div>
                </div>

            </main>
        </div>
    );
}

export default App;
