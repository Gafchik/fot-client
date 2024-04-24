import Logo from '../../Logo/Logo';
import classes from './GetOffer.module.css';

import { LanguageContext } from '../LanguageContext/LanguageContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useContext, useState } from 'react';
import Doc from '../../files/FamilyOliveClub.pdf';
import * as EmailValidator from 'email-validator';
import InputCustom from '../Input/InputCustom';

function GetOffer() {
    const { language, offer, showDetailed } = React.useContext(LanguageContext);
    const [clicked, setClicked] = React.useState(false);

    const [num, setNum] = React.useState('');
    const [name, setName] = React.useState('');
    const [mail, setMail] = React.useState('');
    const [error, setError] = React.useState('');
    const [result, setResult] = React.useState('');

    const [isSafari, setIsSafari] = useState(false);

    React.useEffect(() => {
        const isSafari = /^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent);
        setIsSafari(isSafari);
    }, []);

    const translations = {
        ru: {
            message: "Обеспечьте свое будущее пассивным доходом уже сегодня",
            button: "Посмотрите на предложение с высоты птичьего полета",
            left: "Оставьте свои контактные данные и мы свяжемся с вами",
            name: "ФИО",
            phone: "ТЕЛ.",
            email: "ЭЛ. ПОЧТА",
            offer: "Получить предложение",
            fillphone: "Поле номера телефона должно быть заполнено.",
            fillname: "Поле имени должно быть заполнено.",
            fillemail: "Поле почты или номера телефона должно быть заполнено.",
            incorrectemail: "Формат указанной почты некорректный.",
            incorrectnum: "Формат указанного номера некорректный.",
            incorrectname: "Введено некорректное имя.",
            success: "Успешно отправлено.",
            or: "ИЛИ"
        },
        en: {
            message: "Secure your future with passive income today",
            button: "Take a look at the offer from a bird's-eye view",
            left: "Leave your contact information and we will get in touch with you",
            name: "Full Name",
            phone: "Phone",
            email: "Email",
            offer: "Get the offer",
            fillphone: "Phone field cannot be empty.",
            fillname: "Name field cannot be empty.",
            fillemail: "Email/Phone field cannot be empty.",
            incorrectemail: "Email is incorrect",
            incorrectnum: "Phone is incorrect.",
            incorrectname: "Name is incorrect",
            success: "Successfully sent.",
            or: "OR"
        }
    }
    const handleClicked = () => setClicked(!clicked);

    function containsNumbers(str) {
        return /\d/.test(str);
    }

    const getUserData = () => {
        if (name === '') {
            setError(translations[language].fillname);
        }
        else if (mail === '' && num === '') {
            setError(translations[language].fillemail);
        }
        else if (!EmailValidator.validate(mail) && num === '') {
            setError(translations[language].incorrectemail);
        }
        else if (mail === '' && !containsNumbers(num)) {
            setError(translations[language].incorrectnum);
        }
        else {
            if (containsNumbers(name)) {
                setError(translations[language].incorrectname);
            }
            notifyManager(name, num, mail);
            scrollToCottagesAdditional();
            toast.success(translations[language].success);
        }
    }

    function notifyManager(name, phone, mail) {
        const data = {
            name: name,
            phone: phone,
            mail: mail,
            type: "call",
            message: "Просьба перезвонить"
        };

        const encodedData = new URLSearchParams(data).toString();

        fetch('https://cotteges-olives-brand-new-production.up.railway.app/notifymanagers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                "Access-Control-Allow-Origin": "*",
            },
            body: encodedData
        }).then((response) => response.json())
            .then(data => setResult(data.message))
            .then(() => {
                // if (!isSafari) {
                //     var link = document.createElement('a');
                //     link.href = Doc;
                //     link.download = Doc.substr(Doc.lastIndexOf('/') + 1);
                //     link.click();
                // }
            });
    }

    function getErrors() {
        if (error != '') {
            return <div className={classes.errorHolder}>
                <span>{error}</span>
            </div>
        }
    }

    function getMessage() {
        if (result != '') {
            return <div className={classes.errorHolder} style={{ textAlign: 'center', marginTop: 20, color: '#ABCE2D' }}>
                <span>{result}</span>
            </div>
        }
    }

    const scrollToCottagesAdditional = () => {
        showDetailed();
        setTimeout(() => {
            const element = document.getElementById('stock');
            if (element !== null) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    }

    function getForm() {
        if (!clicked && !offer) {
            return <div className={`${classes.buttonHolder} ${classes.btndesktop}`}>
                <div onClick={handleClicked} className={classes.button}>
                    {translations[language].offer}
                </div>
            </div>
        }
        else {
            return <div className={classes.form}>
                <div className={classes.formtitle}>{translations[language].left}</div>
                <div className={classes.inputsContainer}>
                    <InputCustom offer={true} errors={setError} text={translations[language].name} action={setName} />
                    <InputCustom offer={true} errors={setError} text={translations[language].phone} action={setNum} />
                    <div className={classes.or}>{translations[language].or}</div>
                    <InputCustom offer={true} errors={setError} text={translations[language].email} action={setMail} />
                </div>
                <div className={`${classes.buttonHolder}`}>
                    <div className={classes.buttonform} onClick={() => getUserData()}>{translations[language].offer}</div>
                </div>
                {getErrors()}
                {getMessage()}
            </div>
        }
    }

    return (
        <div className={classes.bgimage} id="offer-section">
            <ToastContainer closeOnClick={true} limit={1} theme='light' progressStyle={{ color: 'green' }} />
            <div className={classes.container}>
                <div className={classes.holder}>
                    <div className={classes.textContainer}>
                        <div className={classes.textHolder}>
                            <span className={classes.desc}>{translations[language].message}</span>
                            {getForm()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetOffer;