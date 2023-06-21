import {Block} from "./../block/Block";
import s from "./mainPageBlock.module.scss";
import {FC, memo, useEffect} from "react";
import {useActions} from "src/common/hook/useActions";
import {itemsThunks} from "src/reducer/items.reducer";
import {useSelector} from "react-redux";
import {selectItems} from "src/items.selectors";

export const MainPage: FC = memo(() => {
    const items = useSelector(selectItems)
    const {fetchItems} = useActions(itemsThunks)
    useEffect(() => {
        fetchItems({})
    }, [])

    return (
        <div className={s.mainPageBlock}>
            {items && items.map(el => {
                    return <Block key={el.id}
                                  id={el.id}
                                  title={el.title}
                                  picture={el.picture}
                                  price={el.price}
                                  unit={el.unit}/>
                }
            )}
        </div>
    )
})