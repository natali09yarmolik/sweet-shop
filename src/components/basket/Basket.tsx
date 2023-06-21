import s from './basket.module.scss'
import {CountBlock} from "../countBlock/CountBlock";
import {useSelector} from "react-redux";
import {selectItems, selectItemsInBasket, selectTotal} from "src/items.selectors";
import {BlockInBasket} from "src/components/blockInBasket/BlockInBasket";
import { FormBlock } from './../formBlock/FormBlock';
import {TextBlock} from "src/components/textBlock/TextBlock";
import {ButtonClose} from "src/components/buttonClose/ButtonClose";
import {FC, memo, useEffect} from "react";
import {useActions} from "src/common/hook/useActions";
import {itemsActions} from "src/reducer/items.reducer";
import {ProductBlockInBasket} from "src/components/productBlockInBasket/ProductBlockInBasket";

export const Basket: FC = memo(() => {
    const itemInBasket = useSelector(selectItemsInBasket)

    const {addItemsFromLocal, totalPrice} = useActions(itemsActions)


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
                <ProductBlockInBasket/>
                <div className={s.formBlock}>
                    <TextBlock/>
                    <FormBlock/>
                </div>
            </div>
        </div>
    )
})