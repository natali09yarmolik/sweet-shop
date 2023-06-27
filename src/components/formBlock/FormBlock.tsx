import {FC, FormEvent, memo, useState} from "react";
import s from './formBlock.module.scss'
import emailjs from "emailjs-com";
import {useSelector} from "react-redux";
import {selectItemsInBasket} from "src/items.selectors";

export const FormBlock: FC = memo(() => {
    const items = useSelector(selectItemsInBasket)
    const [visible, setVisible] = useState(false)
    const changeHandler = () => {
        console.log(1)
    }

    const sentEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setVisible(true)
        emailjs.sendForm('VVmlYXN30tWg6SLEB', 'template_cv8jnng',
            e.currentTarget, 'VVmlYXN30tWg6SLEB')
            .then((result) => {
                console.log(result)
                setTimeout(() => {
                    setVisible(false)
                }, 3000, [visible])
            }, (error) => {
                error.message
            });
        e.currentTarget.reset()
    }
    const visibleAnswer = visible ? s.formBlockAnswer : s.formBlockAnswerNone
    const visibleForm = !visible ? s.formBlockInput : s.formBlockInputNone
    return (
        <div className={s.formBlockMain}>
            <div className={visibleAnswer}><p>Ваш заказ принят 😉</p></div>
            <form className={s.formBlock} onSubmit={sentEmail}>
                <input type={"text"}
                       name={'name'}
                       required
                       placeholder={'Введите Ваше Имя'}
                       className={visibleForm}
                />
                <input type={"email"}
                       name={'email'}
                       required
                       placeholder={'Введите Ваш email'}
                       className={visibleForm}
                />
                <input type={"phone"}
                       name={'phone'}
                       required
                       placeholder={'Введите Ваш номер телефона'}
                       className={visibleForm}
                />
                <input type={"text"}
                       name={'message'}
                       onChange={changeHandler}
                       value={JSON.stringify(items)}
                       className={s.FormBlockOption}
                />
                <input type={"submit"}
                       value={'Оформить заказ'}
                       className={s.formBlockButton}
                />
            </form>
        </div>

    )
})
