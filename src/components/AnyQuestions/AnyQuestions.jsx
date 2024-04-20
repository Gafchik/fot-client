import React, { useContext } from 'react';
import classes from './AnyQuestions.module.css';
import image from './laptop.png';
import { LanguageContext } from '../LanguageContext/LanguageContext';

function AnyQuestions(props) {
    const { language } = useContext(LanguageContext);

    const translations = {
        ru: {
            questions: "Остались вопросы?",
            desc: "Воспользуйтесь нашим чат-ботом, чтобы получить дополнительную информацию",
            gotobot: "Перейти к чат-боту"
        },
        uk: {
            questions: "Залишилися питання?",
            desc: "Скористайтеся нашим чат-ботом, щоб отримати додаткову інформацію",
            gotobot: "Перейти до чат-бота"
        },
        en: {
            questions: "Have any questions?",
            desc: "Use our chatbot to get additional information",
            gotobot: "Go to the chatbot"
        }
    }

    return (
        <div className={classes.container}>
            <div className={classes.holder}>
                <div className={classes.content}>
                    <div className={classes.separator}>
                        <div className={classes.ftpart}>
                            <span className={classes.title}>{translations[language].questions}</span>
                            <div>
                                <span>{translations[language].desc}</span>
                            </div>
                            <div className={`${classes.buttonHolder} ${classes.desktop}`}>
                                <div onClick={()=>{window.open('https://t.me/FamilyOliveClubBot?start=start')}} className={classes.button}>
                                    {translations[language].gotobot}
                                </div>
                            </div>
                        </div>
                        <div className={classes.ndpart}>
                            <img className={classes.image} src={image} />
                        </div>
                        <div className={classes.mobileHolder}>
                            <div className={`${classes.buttonHolder} ${classes.mobile}`}>
                                <div onClick={()=>{window.open('https://t.me/FamilyOliveClubBot?start=start')}} className={classes.button}>
                                    {translations[language].gotobot}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default AnyQuestions;