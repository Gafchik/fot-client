import React, { useContext } from 'react';
import classes from './Facing.module.css';
import { VscGlobe } from 'react-icons/vsc';
import { FaChevronDown } from 'react-icons/fa';
import { LanguageContext } from '../LanguageContext/LanguageContext';

function LanguagePicker(props) {
    const [clicked, setClicked] = React.useState(false);
    const { language, changeLanguage } = useContext(LanguageContext);

    const handleClicked = () => setClicked(!clicked);

    function getLang() {
        if (language === 'ru') return "RU"
        else if (language === 'uk') return "UA"
        else if (language === 'en') return "EN"
    }
    const setLangQueryParam = (lang) => {
        const newUrl = `${window.location.pathname}?lang=${lang}`;
        // Заменяем текущий URL на новый URL с параметром lang
        window.history.replaceState({}, '', newUrl);
    };

    const setLang = (language) => {
        setClicked(false);
        changeLanguage(language);
        console.log(language)
        // setQueryParams({ lang: 'ru', page: 'home' });
        setLangQueryParam(language);
    }

    return (
        <div className={classes.languageContainer}>
            <div onClick={handleClicked} className={classes.languagePicker}>
                {/* <VscGlobe style={{ fontSize: 40, fontWeight: 'bolder' }} /> */}
                <span className={classes.langTitle}>{getLang()}</span>
                {/* <FaChevronDown className={`${classes.chevron} ${clicked ? classes.chevronClicked : ""}`} /> */}
            </div>
            <div className={`${clicked ? classes.picker : classes.pickerNone}`}>
                <div className={classes.langItem} onClick={() => setLang('ru')}>Русский</div>
                {/* <div className={classes.langItem} onClick={() => setLang('uk')}>Українська</div> */}
                <div className={classes.langItem} onClick={() => setLang('en')}>English</div>
            </div>
        </div>
    );
}

export default LanguagePicker;