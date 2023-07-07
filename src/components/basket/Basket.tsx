import s from './basket.module.scss'
import {useSelector} from "react-redux";
import {selectItemsInBasket} from "src/items.selectors";
import {FormBlock} from './../formBlock/FormBlock';
import {TextBlock} from "src/components/textBlock/TextBlock";
import {ButtonClose} from "src/components/buttonClose/ButtonClose";
import {FC, memo, useEffect, useState} from "react";
import {useActions} from "src/common/hook/useActions";
import {itemsActions} from "src/reducer/items.reducer";
import {ProductBlockInBasket} from "src/components/productBlockInBasket/ProductBlockInBasket";
import {ButtonInBasket} from "src/components/buttonInBasket/ButtonInBasket";

export const Basket: FC = memo(() => {
    const itemInBasket = useSelector(selectItemsInBasket)
    const itemsStart = localStorage.getItem('items')
    const {addItemsFromLocal, totalPrice} = useActions(itemsActions)

    useEffect(() => {
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