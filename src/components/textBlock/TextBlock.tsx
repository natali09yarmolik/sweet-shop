import {FC, memo} from "react";
import s from 'src/components/textBlock/textBlock.module.scss'

export const TextBlock: FC = memo(()=>{
    return(
        <div className={s.textBlock}>
            <p>Для оформления заказа,
                заполните поля формы и нажмите кнопку
                &#34;Оформить заказ&#34;
            </p>
        </div>
    )
})