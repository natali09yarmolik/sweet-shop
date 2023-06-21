import s from './buttonInBasket.module.scss'
import {FC, memo} from "react";

type Props = {
    title: string
    onClick: () => void
}

export const ButtonInBasket: FC<Props> = memo(({title, onClick}) => {
        return (
            <button className={s.buttonInBasket}
                    onClick={onClick}
            >{title}</button>
        )
    }
)