import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext/LanguageContext';
import classes from './AboutUs.module.css';
import CardAboutUs from './Card/CardAboutUs';
import CardAboutUsSimple from './Card/CardAboutUsSimple';


// import { AiFillPhone } from 'react-icons/ai';

function AboutUs() {
    const { language } = useContext(LanguageContext);

    const translations = {
        ru: {
            main_title: "Как это работает",
            sub_title: "С нашим уникальным проектом вы получаете 2 диверсифицированных пассивных бизнеса",
            title_st: "Оливковые плантации",
            desc_st_st: "Организация оливковой промышленной плантации с уникальным климатом в регионе Кахетия, Грузия",
            desc_st_nd: "Первые 3 года дерево растет, с 4-го года начинает плодоносить",
            desc_st_rd: "Уход за деревьями и реализация урожая сервисной компанией",
            title_nd: "Коттедж в клубном поселке",
            desc_nd_st: "Выбор расположения коттеджа в посёлке Family Olive Club",
            desc_nd_nd: "Сдача поселка к проведению юношеского олимпийского фестиваля в 2025 году",
            desc_nd_rd: "Комплексное сервисное обслуживание коттеджей",
            text_overall: "Ожидаемая доходность активов составляет до 60% годовых",
            passive: "Пассивный годовой доход под руководством опытной сервисной компании",
            passive1: "Доходность платации",
            passive1num: "До 40%",
            passive2: "Доходность коттеджей",
            passive2num: "До 10%",
        },
        en: {
            main_title: "How does it work",
            sub_title: "With our unique project, you get 2 diversified passive businesses",
            title_st: "Olive plantations",
            desc_st_st: "Organization of an olive industrial plantation with a unique climate in the Kakheti region, Georgia",
            desc_st_nd: "The first 3 years the tree grows, from the 4th year it begins to bear fruit",
            desc_st_rd: "Tree care and harvest sales by a service company",
            title_nd: "Cottage in the club village",
            desc_nd_st: "Choosing the location of the cottage in the village of Family Olive Club",
            desc_nd_nd: "Commissioning of the village for the Youth Olympic Festival in 2025",
            desc_nd_rd: "Comprehensive service for cottages",
            text_overall: "The expected return on assets is up to 60% per annum",
            passive: "Passive Annual Income under the guidance of an experienced service company",
            passive1: "Plantation Yield",
            passive1num: "Up to 40%",
            passive2: "Cottage Yield",
            passive2num: "Up to 10%",
        }
    }

    return (
        <div className={classes.container} id="aboutus-section">
            <div className={classes.holder}>
                <div className={classes.content}>
                    <div className={classes.titleContainer}>
                        <div className={classes.title}>{translations[language].main_title}</div>
                        <div className={classes.subtitle}>{translations[language].sub_title}</div>
                    </div>
                    <div className={classes.text}>
                        <CardAboutUs title={translations[language].title_st} st={translations[language].desc_st_st} nd={translations[language].desc_st_nd} rd={translations[language].desc_st_rd} />
                        <CardAboutUs title={translations[language].title_nd} st={translations[language].desc_nd_st} nd={translations[language].desc_nd_nd} rd={translations[language].desc_nd_rd} />
                        {/* <CardAboutUsSimple text={translations[language].text_overall} /> */}
                    </div>
                </div>
            </div>
            <div className={classes.attention}>
            </div>
            <div className={classes.separator}>
                <div className={`${classes.separator_title} hidden`} style={{transitionDelay: '0s'}}>
                    {translations[language].passive}
                </div>
                <div className={classes.separator_additional}>
                    <div className={classes.separator_info}>
                        <div className={`${classes.separator_number} hidden`} style={{transitionDelay: '0s'}}>{translations[language].passive1num}</div>
                        <div className={`${classes.separator_small} hidden`} style={{transitionDelay: '0.1s'}}>{translations[language].passive1}</div>
                    </div>
                    <div className={classes.separator_info}>
                        <div className={`${classes.separator_number} hidden`} style={{transitionDelay: '0.1s'}}>{translations[language].passive2num}</div>
                        <div className={`${classes.separator_small} hidden`} style={{transitionDelay: '0.2s'}}>{translations[language].passive2}</div>
                    </div>
                </div>
            </div>
            <div className={classes.attention}>
            </div>
        </div>
    )
}

export default AboutUs;