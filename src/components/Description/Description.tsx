import React from 'react';
import classes from '../Facing/Facing.module.css';
import { LanguageContext } from '../LanguageContext/LanguageContext';
import { useContext } from 'react';
import image from '../Facing/summer1.png';
import ArrowRight from '../SVGs/ArrowRight';
import { BsFillPlayFill } from 'react-icons/bs';

function Description(props: any) {
    const { language } = useContext(LanguageContext);

    const scrollToBusiness = () => {
        const element = document.getElementById('call-me-section');
        if (element !== null) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const translations = {
        ru: {
            greeting: "Откройте для себя новые горизонты для пассивного дохода",
            description: "Приобретите 5 гектар оливковой плантации в сердце Грузии  и получите собственный коттедж в клубном поселке",
            more: "Узнать больше",
            advice: "Посмотрите на предложение с высоты птичьего полета"
        },
        en: {
            greeting: "Discover new horizons for passive income",
            description: "Buy 5 hectares of olive plantation in the heart of Georgia and get your own cottage in a club village",
            more: "Discover more",
            advice: "See the proposal from a bird's eye view"
        }
    }

    return (
        <div className={classes.container}>
            <div className={classes.holder}>
                <div className={classes.textContainer}>
                    <div className={classes.textHolder}>
                        <div className={classes.title}>{translations[language].greeting}</div>
                        <span className={classes.desc}>{translations[language].description}</span>
                        <div className={`${classes.buttonHolder} ${classes.btndesktop}`}>
                            <div onClick={scrollToBusiness} className={classes.button}>
                                {translations[language].more}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.imageHolder}>
                    <img className={classes.imageContainer} src={image} />
                    <div onClick={() => { window.open('https://www.youtube.com/watch?v=uClIqzADiDc&ab_channel=OliveFamilyClub') }} className={classes.play}><BsFillPlayFill style={{ fontSize: 40 }} /></div>
                    <div className={classes.arrow} >
                        <ArrowRight />
                    </div>
                    <span className={classes.textadvice}>{translations[language].advice}</span>
                </div>
                <div className={`${classes.buttonHolder} ${classes.btnmobile}`}>
                    <div onClick={scrollToBusiness} className={classes.button}>
                        {translations[language].more}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Description;