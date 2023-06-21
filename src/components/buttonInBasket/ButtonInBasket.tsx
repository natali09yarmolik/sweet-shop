import s from 'src/components/blockInBasket/blockInBasket.module.scss'
import {FC, memo} from "react";
import {ItemType} from "src/common/types";
import {useActions} from "src/common/hook/useActions";
import {itemsActions} from "src/reducer/items.reducer";
import items from '../../items.json'

type Props = {
    id?: number
    picture: string
    title: string
    price: number
    unit: string
}

export const BlockInBasket : FC<Props> = memo(({id, picture, title, price, unit}) => {

      return (
        <div className={s.mainBlockInBasket}>
            <div className={s.picBlockInBasket}>
                <img src={picture} alt={'pic'}/>
            </div>
            <div className={s.informBlockInBasket}>
                <span>{title}</span>
                <span>{price} {unit}</span>
            </div>
        </div>
    )
}
)