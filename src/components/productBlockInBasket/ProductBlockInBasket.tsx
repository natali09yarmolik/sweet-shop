import s from './basket.module.scss'
import {CountBlock} from "../countBlock/CountBlock";
import {useSelector} from "react-redux";
import {selectItems, selectTotal} from "src/items.selectors";
import {BlockInBasket} from "src/components/blockInBasket/BlockInBasket";
import { FormBlock } from './../formBlock/FormBlock';
import {TextBlock} from "src/components/textBlock/TextBlock";
import {ButtonClose} from "src/components/buttonClose/ButtonClose";
import {FC, memo, useEffect} from "react";
import {useActions} from "src/common/hook/useActions";
import {itemsActions} from "src/reducer/items.reducer";

export const Basket: FC = memo(() => {
    const itemInBasket = useSelector(selectItems)
    const total = useSelector(selectTotal)
    const {addItemsFromLocal, totalPrice, clearItems} = useActions(itemsActions)

    const clearFormHandler = () =>{
        clearItems({})
        totalPrice({})
    }
    useEffect(() => {
        const itemsStart = localStorage.getItem('items')
        if (itemsStart) {
            const items = JSON.parse(itemsStart)
            addItemsFromLocal({items})
            totalPrice({})
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(itemInBasket))
    }, [itemInBasket])
    return (
        <div className={s.mainBasketBlock}>
            <ButtonClose/>
            <div className={s.basketBlock}>
                <div className={s.productBlock}>
                    <div className={s.productWithCount}>
                        {itemInBasket.map((el, index) => (
                                <div className={s.blockInBasket} key={index}>
                                    <BlockInBasket
                                        picture={el.picture}
                                        title={el.title}
                                        price={el.price}
                                        unit={el.unit}
                                    />
                                    <CountBlock id={el.id} count={el.count} index={index}/>
                                </div>
                            )
                        )
                        }
                    </div>
                    <div className={s.totalBlock}>
                        <div className={s.totalPrice}>Сумма заказа: {total} руб.</div>
                        <button className={s.clearForm} onClick={clearFormHandler}>Очистить карзину</button>
                    </div>

                </div>
                <div className={s.formBlock}>
                    <TextBlock/>
                    <FormBlock/>
                </div>
            </div>
        </div>
    )
})