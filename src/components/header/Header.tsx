import React, {FC, memo} from "react";
import {useSelector} from "react-redux";
import {selectTotal, selectVisible} from "src/items.selectors";
import {useActions} from "src/common/hook/useActions";
import {itemsActions} from "src/reducer/items.reducer";
import {Link} from "react-scroll";
import s from "src/components/header/Header.module.scss";


export const Header: FC = memo(() => {
    const total = useSelector(selectTotal)
    const visible = useSelector(selectVisible)
    const {changeVisibleBasket} = useActions(itemsActions)

    const basketHandler = () => {
        changeVisibleBasket({visible})

    }
    const totalSpan = total !== 0 ? s.visibleTotal : s.unvisibleTotal
    return (
        <header className={s.headerBlock}>
            <div className={s.containerBlock}>
                <h1 className={s.titleBlock}>SWEET-SHOP</h1>
                <div className={s.basketBlock}>
                    <span className={totalSpan}>{total} руб</span>
                    <Link to='id-basket'
                          activeClass={s.headerInfo}
                          spy={true}
                          smooth={true}
                          offset={-170}
                          duration={700}
                          >
                        <span onClick={basketHandler}
                              className={s.headerInfo}
                        ></span>
                    </Link>
                </div>
            </div>
        </header>
    )
})