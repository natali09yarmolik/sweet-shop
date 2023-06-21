import {FC, memo} from "react";
import s from "./buttonClose.module.scss"
import {useSelector} from "react-redux";
import {selectVisible} from "src/items.selectors";
import {useActions} from "src/common/hook/useActions";
import {itemsActions} from "src/reducer/items.reducer";

export const ButtonClose: FC = memo(() => {
    const visible = useSelector(selectVisible)
    const {changeVisibleBasket} = useActions(itemsActions)

    const closeBasketHandler = () => {
        changeVisibleBasket({visible})
    }
    return (
        <div className={s.buttonCloseBlock}
             onClick={closeBasketHandler}
        >
            <span></span>
            <span></span>
        </div>
    )
})

