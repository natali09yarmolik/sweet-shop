import s from './block.module.scss'
import {FC, memo, useState} from "react";
import {ItemType} from "src/common/types";
import {useActions} from "src/common/hook/useActions";
import {itemsActions} from "src/reducer/items.reducer";
import {useSelector} from "react-redux";
import {selectItemsInBasket} from "src/items.selectors";
import img from './../../icon/1.jpg'

export const Block: FC<ItemType> = memo(({id, picture, title, price, unit}) => {
        const [visible, setVisible] = useState(false)
        const itemInBasket = useSelector(selectItemsInBasket)
        const {addItemsInBasket, totalPrice, addCountItems} = useActions(itemsActions)

        const buyHandler = (itemId: number) => {
            setVisible(true)
            setTimeout(() => {
                setVisible(false)
            }, 1000, [visible])
            if (itemInBasket.find(el => (el.id === itemId))) {
                itemInBasket.map(el => (el.id === itemId ?
                    addCountItems({itemId, itemCount: el.count as number}) : el))
                totalPrice({})
            } else {
                addItemsInBasket({itemId})
                totalPrice({})
            }
        }
        const visibleMessage = visible ? s.visibleMessage : s.unvisibleMessage
        return (
            <div className={s.mainBlock}>
                <div className={visibleMessage}><span>Добавлен в корзину</span></div>
                <div className={s.picBlock}>
                    <img src={process.env.PUBLIC_URL + picture} alt={'pic'}/>
                </div>
                <h3>{title}</h3>
                <span>{price} {unit}</span>
                <button className={s.buttonBlock} onClick={() => buyHandler(id)}>Заказать</button>
            </div>
        )
    }
)