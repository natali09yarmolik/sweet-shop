import s from 'src/components/blockInBasket/blockInBasket.module.scss'
import {FC, memo} from "react";

type Props = {
    id?: number
    picture: string
    title: string
    price: number
    unit: string
}

export const BlockInBasket: FC<Props> = memo(({picture, title, price, unit}) => {

        return (
            <div className={s.mainBlockInBasket}>
                <div className={s.picBlockInBasket}>
                    <img src={process.env.PUBLIC_URL + picture} alt={'pic'}/>
                </div>
                <div className={s.informBlockInBasket}>
                    <span>{title}</span>
                    <span>{price} {unit}</span>
                </div>
            </div>
        )
    }
)