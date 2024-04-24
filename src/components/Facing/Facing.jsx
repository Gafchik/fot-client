import { useContext } from 'react';
import Logo from '../../Logo/Logo';
import classes from './Facing.module.css';
import LanguagePicker from './LanguagePicker';
import video from './bg.mp4';
import { LanguageContext } from '../LanguageContext/LanguageContext';

function Facing() {
    const { language } = useContext(LanguageContext);

    const scrollToDetailed = () => {
        const element = document.getElementById('call-me-section');
        if (element !== null) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const scrollToAboutus = () => {
        const element = document.getElementById('about-section');
        if (element !== null) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const scrollToCottages = () => {
        const element = document.getElementById('cottages-section');
        if (element !== null) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const translations = {
        ru: {
            main_title: "ОЛИВКОВОЕ ДЕРЕВО — ЛИКВИДНОСТЬ ВНЕ ВРЕМЕНИ",
            btn: "УЗНАТЬ БОЛЬШЕ",
            aboutus: "О нас",
            cottages: "Коттеджи",
            title: "Family Olive Club - ликвидность вне времени!",
            sub1: "Инвестируя в оливковые плантации, вы обеспечиваете своей семье стабильный пассивный доход на протяжении более 100 лет!",
            feat1: "Пассивный доход без необходимости оперативного вмешательства",
            feat2: "Опытная сервисная компания",
            feat3: "Прозрачная бизнес-модель",
            feat4: "Стабильный доход",
        },
        en: {
            main_title: "OLIVE TREE - TIMELESS LIQUIDITY",
            btn: "DISCOVER MORE",
            aboutus: "About us",
            cottages: "Cottages",
            title: "Family Olive Club - liquidity beyond time!",
            sub1: "By investing in olive plantations, you ensure a stable passive income for your family for over 100 years!",
            feat1: "Passive income without the need for operational intervention",
            feat2: "Experienced service company",
            feat3: "Transparent business model",
            feat4: "Stable income",
        }
    }
    return (
        <div>
            {/* <video className={classes.videoContainer} autoPlay muted loop>
                <source className={classes.video} src={video} type="video/mp4" />
            </video> */}
            <div className={classes.bgimage}>
                <div className={classes.holderContainer}>
                    <div className={classes.contentContainer}>
                        <div className={classes.navContainer}>
                            <div style={{ display: 'flex', gap: 40, alignItems: 'center' }}>
                                <div className={classes.logoContainer}>
                                    <Logo /> Family Olive Club
                                </div>
                                <div className={classes.buttonsholder}>
                                    <div onClick={scrollToAboutus}>{translations[language].aboutus}</div>
                                    {/*<div onClick={scrollToCottages}>{translations[language].cottages}</div>*/}
                                </div>
                            </div>
                            <LanguagePicker />
                        </div>
                    </div>
                </div>
                <div className={classes.main}>
                    <div className={`${classes.firsttitle} hidden`}>{translations[language].title}</div>
                    <div className={`${classes.maintitle} hidden`} style={{ transitionDelay: '.1s' }}>
                        <span>{translations[language].sub1}</span>
                    </div>
                    <div className={classes.features}>
                        <div className='hidden' style={{ transitionDelay: '.2s' }}>
                            <div className={classes.features_title}>01</div>
                            <div className={classes.features_desc}>{translations[language].feat1}</div>
                        </div>
                        <div className='hidden' style={{ transitionDelay: '.3s' }}>
                            <div className={classes.features_title}>02</div>
                            <div className={classes.features_desc}>{translations[language].feat2}</div>
                        </div>
                        <div className='hidden' style={{ transitionDelay: '.4s' }}>
                            <div className={classes.features_title}>03</div>
                            <div className={classes.features_desc}>{translations[language].feat3}</div>
                        </div>
                        <div className='hidden' style={{ transitionDelay: '.5s' }}>
                            <div className={classes.features_title}>04</div>
                            <div className={classes.features_desc}>{translations[language].feat4}</div>
                        </div>
                        {/* <div>
                            <div className={classes.features_title}>05</div>
                            <div className={classes.features_desc}>Введеня в експлуатацію в 2024 році</div>
                        </div> */}
                    </div>
                </div>
                {/* <div onClick={scrollToDetailed} className={classes.button}>{translations[language].btn}</div> */}
            </div>
        </div>
    )
}

export default Facing;