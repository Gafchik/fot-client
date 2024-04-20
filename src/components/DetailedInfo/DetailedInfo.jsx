import React, { useContext } from 'react';
import classes from './DetailedInfo.module.css';
import { LanguageContext } from '../LanguageContext/LanguageContext';

function DetailedInfo(props) {
    const { language, showOffer } = useContext(LanguageContext);

    const translations = {
        ru: {
            title: "Мы — агрокомплекс, который занимается организацией и дальнейшим обслуживанием промышленных оливковых плантаций.",
            description: "Мы обеспечиваем вам доступ к передовым практикам и технологиям. Наша команда сотрудничает с ведущими институтами и экспертами из Турции и Испании и другими представителями IOC, чтобы гарантировать успешное развитие вашей плантации.",
            so: "Кроме этого, мы:",
            st: "владеем большим банком земли для организации плантаций нашим партнерам",
            nd: "регулярно получаем рекомендации и передовые технологии которые внедряем в наш бизнес",
            rd: "имеем огромную поддержку государства в виде различных субсидий и помощи в обслуживании плантаций",
            p1: "Грузия обладает огромным потенциалом для развития благодаря своему уникальному климату.",
            p2: "Как наш партнер, вы сможете воспользоваться преимуществами этого потенциала, так как ваши активы будут обслуживаться профессионально и приносить стабильный пассивный доход.",
            p3: "Присоединяйтесь к нам и обеспечьте свое финансовое будущее, получая стабильный источник дохода.",
            title1: "400+ га",
            desc1: "оливковых плантаций насчитывает наше хозяйство",
            title2: "2000 га",
            desc2: "Насчитывает наш банк земли, и мы постоянно расширяем его размеры",
            title3: "John Deеr",
            desc3: "является нашим официальным партнером в Грузии",
            getOffer: "Получить предложение",
            titlebnb: "Агронедвижимость в Грузии через BNB Smart Chain",
            featurebnb1: "Прозрачно: Каждый этап вашей покупки зафиксирован в BNB Smart Chain.",
            featurebnb2: "Безопасно: Смарт-контракты на платформе BNB Smart Chain гарантируют автоматизацию и защиту вашей сделки.",
            featurebnb3: "Быстро: Оперативная оплата криптовалютой без лишних комиссий.",
            featurebnb4: "Легально: Все операции соответствуют законам Грузии и реализуются с помощью BNB Smart Chain.",
            featurebnb5: "Альтернатива: Данный способ является дополнением к классическому пути приобретения, предоставляя больше гибкости и инновационных решений.",
            totalbnb: "BNB Smart Chain представляет собой альтернативный способ приобретения недвижимости."
        },
        uk: {
            title: "Ми - агрокомплекс, який займається організацією та подальшим обслуговуванням промислових оливкових плантацій.",
            description: "Ми забезпечуємо вам доступ до передових практик і технологій. Наша команда співпрацює з провідними інститутами та експертами з Туреччини, Іспанії та інших представників Міжнародної організації оливкової оливи (IOC), щоб гарантувати успішний розвиток вашої плантації.",
            so: "Крім цього, ми:",
            st: "володіємо великим земельним банком для організації плантацій нашим партнерам",
            nd: "регулярно отримуємо рекомендації та передові технології, які впроваджуємо у наш бізнес",
            rd: "маємо велику підтримку держави у вигляді різних субсидій та допомоги у обслуговуванні плантацій",
            p1: "Грузія має великий потенціал для розвитку завдяки своєму унікальному клімату.",
            p2: "Як наш партнер, ви зможете скористатися перевагами цього потенціалу, оскільки ваші активи будуть професійно обслуговуватися та приносити стабільний пасивний дохід.",
            p3: "Приєднуйтесь до нас і забезпечте своє фінансове майбутнє, отримуючи стабільний джерело доходу.",
            title1: "400+ га",
            desc1: "оливкових плантацій налічує наше господарство",
            title2: "2000 га",
            desc2: "нараховує наш земельний банк, і ми постійно розширюємо його розміри",
            title3: "John Deеr",
            desc3: "є нашим офіційним партнером в Грузії",
            getOffer: "Отримати пропозицію"
        },
        en: {
            title: "We are an agro complex specializing in the organization and maintenance of industrial olive plantations.",
            description: "We provide you with access to advanced practices and technologies. Our team collaborates with leading institutions and experts from Turkey, Spain, and other representatives of the International Olive Council (IOC) to ensure the successful development of your plantation.",
            so: "In addition, we:",
            st: "own a large land bank for organizing plantations for our partners",
            nd: "regularly receive recommendations and implement cutting-edge technologies in our business",
            rd: "have extensive government support in the form of various subsidies and plantation maintenance assistance",
            p1: "Georgia has tremendous potential for development due to its unique climate.",
            p2: "As our partner, you will be able to leverage this potential as your assets are professionally serviced and generate stable passive income.",
            p3: "Join us and secure your financial future by gaining a stable source of income.",
            title1: "400+ hectares",
            desc1: "of olive plantations are owned by our farm",
            title2: "2000 hectares",
            desc2: "is the size of our land bank, and we are constantly expanding it",
            title3: "John Deere",
            desc3: "is our official partner in Georgia",
            getOffer: "Get the offer",
            titlebnb: "Agricultural real estate in Georgia through BNB Smart Chain",
            featurebnb1: "Transparent: Every step of your purchase is recorded in the BNB Smart Chain.",
            featurebnb2: "Safe: Smart contracts on the BNB Smart Chain platform guarantee automation and protection of your transaction.",
            featurebnb3: "Fast: Prompt payment with cryptocurrency without extra commissions.",
            featurebnb4: "Legal: All operations comply with the laws of Georgia and are implemented using BNB Smart Chain.",
            featurebnb5: "Alternative: This method complements the classic acquisition path, providing more flexibility and innovative solutions.",
            totalbnb: "BNB Smart Chain is an alternative way to purchase real estate."
        }
    }

    const scrollToOffer = () => {
        showOffer();
        const element = document.getElementById('offer-section');
        if (element !== null) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className={classes.container} id="about-section">
            <div className={classes.holder}>
                <div className={classes.content}>
                    <span className={classes.title}>{translations[language].title}</span>
                    <div className={classes.separator}>
                        <div className={classes.ftpart}>
                            <div>
                                <span>{translations[language].description}</span>
                            </div>
                            <div>
                                <span>{translations[language].so}</span>
                                <div className={classes.list}>
                                    <div className='hidden' style={{transitionDelay: '0s'}}>{translations[language].st}</div>
                                    <div className='hidden' style={{transitionDelay: '0.1s'}}>{translations[language].nd}</div>
                                    <div className='hidden' style={{transitionDelay: '0.2s'}}>{translations[language].rd}</div>
                                </div>
                            </div>
                            <div className={classes.secondary}>
                                <div className='hidden' style={{transitionDelay: '0s'}}>{translations[language].p1}</div>
                                <div className='hidden' style={{transitionDelay: '0.1s'}}>{translations[language].p2}</div>
                                <div className='hidden' style={{transitionDelay: '0.2s'}}>{translations[language].p3}</div>
                            </div>
                        </div>
                        <div className={classes.ndpart}>
                            <div className={classes.cardContainer}>
                                <div className='hidden' style={{transitionDelay: '0'}}>
                                    <div className={classes.cardTitle}>{translations[language].title1}</div>
                                    <div className={classes.cardDesc}>{translations[language].desc1}</div>
                                </div>
                                <div className='hidden' style={{transitionDelay: '0.1s'}}>
                                    <div className={classes.cardTitle}>{translations[language].title2}</div>
                                    <div className={classes.cardDesc}>{translations[language].desc2}</div>
                                </div>
                                <div className='hidden' style={{transitionDelay: '0.2s'}}>
                                    <div className={classes.cardTitle}>{translations[language].title3}</div>
                                    <div className={classes.cardDesc}>{translations[language].desc3}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.buttonHolder}>
                        <div onClick={scrollToOffer} className={classes.button}>
                            {translations[language].getOffer}
                        </div>
                    </div>
                    <div className={classes.ftpart}>
                        <div style={{ marginTop: 50, marginBottom: -20 }}>
                            <span className={classes.title}>{translations[language].titlebnb}</span>
                        </div>
                        <div>
                            <div className={classes.list2}>
                                <div className='hidden'><span style={{ transitionDelay: "0s", color: 'rgb(7,188,12)', fontSize: 30 }}>✓</span> {translations[language].featurebnb1}</div>
                                <div className='hidden'><span style={{ transitionDelay: "0.1s", color: 'rgb(7,188,12)', fontSize: 30 }}>✓</span> {translations[language].featurebnb2}</div>
                                <div className='hidden'><span style={{ transitionDelay: "0.2s", color: 'rgb(7,188,12)', fontSize: 30 }}>✓</span> {translations[language].featurebnb3}</div>
                                <div className='hidden'><span style={{ transitionDelay: "0.3s", color: 'rgb(7,188,12)', fontSize: 30 }}>✓</span> {translations[language].featurebnb4}</div>
                                <div className='hidden'><span style={{ transitionDelay: "0.4s", color: 'rgb(7,188,12)', fontSize: 30 }}>✓</span> {translations[language].featurebnb5}</div>
                            </div>
                        </div>
                        <div className={classes.secondary}>
                            <span>{translations[language].totalbnb}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailedInfo;