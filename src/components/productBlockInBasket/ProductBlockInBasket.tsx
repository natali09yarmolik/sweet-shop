import s from 'src/components/productBlockInBasket/productBlockInBasket.module.scss'
import {CountBlock} from "../countBlock/CountBlock";
import {useSelector} from "react-redux";
import {selectItemsInBasket, selectTotal} from "src/items.selectors";
import {BlockInBasket} from "src/components/blockInBasket/BlockInBasket";
import {FC, memo} from "react";
import {useActions} from "src/common/hook/useActions";
import {itemsActions} from "src/reducer/items.reducer";
import {ButtonInBasket} from "src/components/buttonInBasket/ButtonInBasket";

export const ProductBlockInBasket: FC = memo(() => {
    const itemInBasket = useSelector(selectItemsInBasket)
    const total = useSelector(selectTotal)
    const {totalPrice, clearItems} = useActions(itemsActions)

    const clearFormHandler = () =>{
        clearItems({})
        totalPrice({})
    }
    return (
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
                            <CountBlock id={el.id} count={el.count as number} index={index}/>
                        </div>
                    )
                )
                }
            </div>
            <div className={s.totalBlock}>
                <div className={s.totalPrice}>Сумма заказа: {total} руб.</div>
                <ButtonInBasket title={'Очистить карзину'} onClick={clearFormHandler}/>
            </div>
        </div>
    )
})