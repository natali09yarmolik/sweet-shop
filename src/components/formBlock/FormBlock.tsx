import {ChangeEvent, FC, FormEvent, memo, useState} from "react";
import s from './formBlock.module.scss'
import emailjs from "emailjs-com";
import {useSelector} from "react-redux";
import {selectItems, selectItemsInBasket} from "src/items.selectors";
import {Simulate} from "react-dom/test-utils";
import change = Simulate.change;


export const FormBlock:FC = memo(()=>{
    /*const [value, setValue] = useState('')*/
    const items = useSelector(selectItemsInBasket)
    /*const itemsJSON = JSON.stringify(items)*/
    /*const changeHandler = () =>{
        setValue(itemsJSON)
    }*/

    const sentEmail = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        emailjs.sendForm('VVmlYXN30tWg6SLEB', 'template_cv8jnng', e.currentTarget, 'VVmlYXN30tWg6SLEB')
            .then((result) => {
                alert("Ваш заказ принят")
    }, (error) => {
                error.message
            });
        e.currentTarget.reset()
    }
    return (
        <form className={s.formBlock} onSubmit={sentEmail}>
            <input type={"text"}
                   name={'name'}
                   required
                   placeholder={'Введите Ваше Имя'}
                   className={s.formBlockInput}
            />
            <input type={"email"}
                   name={'email'}
                   required
                   placeholder={'Введите Ваш email'}
                   className={s.formBlockInput}
            />
            <input type={"phone"}
                   name={'phone'}
                   required
                   placeholder={'Введите Ваш номер телефона'}
                   className={s.formBlockInput}
            />
             <input type={"text"}
                    name = {'message'}
                    value={JSON.stringify(items)}
                    className={s.FormBlockOption}
            />
            <input type={"submit"}
                   value={'Оформить заказ'}
                   className={s.formBlockButton}
            />
        </form>
    )
})