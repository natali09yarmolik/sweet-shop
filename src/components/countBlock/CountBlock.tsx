import s from "./countBlock.module.scss";
import {FC, memo} from "react";
import {useActions} from "src/common/hook/useActions";
import {itemsActions} from "src/reducer/items.reducer";

type Props = {
    id: number
    count: number
    index: number
}
export const CountBlock: FC<Props> = memo(({id, count, index}) => {
    const {deleteCountItems, addCountItems, deleteItems, totalPrice} = useActions(itemsActions)
    const minusHandler = (itemId: number, count: number, index: number) => {
        if (count === 1) {
            deleteItems({index})
            totalPrice({})
        } else if (count > 0) {
            deleteCountItems({itemId, count})
            totalPrice({})
        }
    }
    const plusHandler = (itemId: number, itemCount: number) => {
        if (count > 0) {
            addCountItems({itemId, itemCount})
            totalPrice({})
        }
    }
    return (
        <div className={s.countBlock}>
            <div className={s.buttonCountBlock}
                 onClick={() => minusHandler(id, count, index)}><h1>-</h1></div>
            <div className={s.inputCountBlock}>{count}</div>
            <div className={s.buttonCountBlock}
                 onClick={() => plusHandler(id, count)}
            ><h2>+</h2></div>
        </div>
    )
})