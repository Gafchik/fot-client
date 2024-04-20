import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext/LanguageContext';
import Card from './Card/Card';
import classes from './CardsSection.module.css';

function CardsSection() {
    const { language } = useContext(LanguageContext);

    const translations = {
        ru: {
            main_title: "С нами вы получаете",
            st_card_title: "Высокую доходность",
            st_card_description: "Доходность плантации начнется с 4-го года эксплуатации, а доходность от коттеджей ожидается с 2025 года.",
            nd_card_title: "Стабильность вне времени",
            nd_card_description: "Оливковые деревья - уникальный актив, имеющий автономную капитализацию. Они живут сотни лет и сохраняют производительность на протяжении всего этого времени.",
            rd_card_title: "Полный цикл обслуживания",
            rd_card_description: "Мы берем на себя обслуживание плантации и коттеджа, позволяя вам без забот получать пассивный доход."
        },
        uk: {
            main_title: "З нами ви отримуєте",
            st_card_title: "Високий дохід",
            st_card_description: "Дохід від плантацій розпочнеться з 4-го року експлуатації, а дохідність від котеджів очікується з 2025 року.",
            nd_card_title: "Стабильність поза часом",
            nd_card_description: "Оливкові дерева – унікальний актив, що має автономну капіталізацію. Вони живуть сотні років та зберігають продуктивність протягом усього цього часу.",
            rd_card_title: "Повний цикл обслуговування",
            rd_card_description: "Ми беремо на себе обслуговування плантації та котеджу, дозволяючи вам без турбот отримувати пасивний дохід."

        },
        en: {
            main_title: "With us you get",
            st_card_title: "High income",
            st_card_description: "Income from plantations will start from the 4th year of operation, and income from cottages is expected from 2025.",
            nd_card_title: "Stability beyond time",
            nd_card_description: "Olive trees are a unique asset that has autonomous capitalization. They live for hundreds of years and maintain productivity throughout this time.",
            rd_card_title: "Full service cycle",
            rd_card_description: "We take care of the maintenance of the plantation and the cottage, allowing you to earn passive income without worry."
        }
    }
    
    return (
        <div className={classes.container}>
            <div className={classes.holder}>
                <div className={classes.content}>
                    <div className={classes.titleContainer}>
                        <div className={classes.title}>{translations[language].main_title}</div>
                    </div>
                    <div className={classes.text}>
                        <Card delay={0} title={translations[language].st_card_title} desc={translations[language].st_card_description} />
                        <Card delay={0.1} title={translations[language].nd_card_title} desc={translations[language].nd_card_description} />
                        <Card delay={0.2} title={translations[language].rd_card_title} desc={translations[language].rd_card_description} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardsSection;