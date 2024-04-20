import React, { useContext } from 'react';
import classes from './Progress.module.css';
import { RiCloseLine } from 'react-icons/ri'
import { LanguageContext } from '../LanguageContext/LanguageContext';

function Progress(props) {
    const [width, setWidth] = React.useState(0);
    const [isVisible, setIsVisible] = React.useState(false);
    const [firstTimeVisible, setFirstTimeVisible] = React.useState(false);
    const { language, showOffer } = useContext(LanguageContext);


    const translations = {
        ru: {
            main_title: "Получить индивидуальную консультацию",
            feat1: "Собственный пассивный бизнес",
            feat2: "Получите поездку в Грузию",
            feat3: "Стабильность - вне времени",
            receive: "Получить"
        },
        en: {
            main_title: "How does it work",
            feat1: "Own Passive Business",
            feat2: "Get a Trip to Georgia",
            feat3: "Stability Beyond Time",
            receive: "Receive"
        }
    }

    React.useEffect(() => {
        const onScroll = e => {
            if (e.target.documentElement.scrollTop / (document.documentElement.scrollHeight - window.innerHeight) > 0.62) {
                if (!firstTimeVisible) {
                    setFirstTimeVisible(true);
                    setIsVisible(true);
                }
            }
            setWidth(e.target.documentElement.scrollTop / (document.documentElement.scrollHeight - window.innerHeight) * window.innerWidth);
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [width]);

    const CloseWindow = (event) => {
        setIsVisible(false);
    }

    const scrollToOffer = () => {
        setIsVisible(false);
        showOffer();
        const element = document.getElementById('offer-section');
        if (element !== null) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <>
            <div className={classes.slider} style={{ width: width }}></ div>
            {isVisible ? <div onClick={CloseWindow} className={classes.fullsize}>
                <div onClick={event => event.stopPropagation()} className={classes.container}>
                    <div className={classes.mainline}>
                        <div>{translations[language].main_title}</div>
                        <RiCloseLine onClick={CloseWindow} className={classes.close} />
                    </div>
                    <div className={classes.featuresContainer}>
                        <div className={classes.features}><span style={{ color: 'rgb(7,188,12)', fontSize: 22 }}>✓</span>{translations[language].feat1}</div>
                        <div className={classes.features}><span style={{ color: 'rgb(7,188,12)', fontSize: 22 }}>✓</span>{translations[language].feat2}</div>
                        <div className={classes.features}><span style={{ color: 'rgb(7,188,12)', fontSize: 22 }}>✓</span>{translations[language].feat3}</div>
                    </div>
                    <div className={classes.buttonContainer}>
                        <div onClick={scrollToOffer} className={classes.button}>{translations[language].receive}</div>
                    </div>
                </div>
            </div> : <></>}
        </>
    );
}

export default Progress;