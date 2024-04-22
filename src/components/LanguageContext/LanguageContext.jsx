import React, {createContext, useEffect, useState} from 'react';
import Cookies from 'js-cookie';

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(
        Cookies.get('lang') !== ""
            ? (Cookies.get('lang') === 'ru' || Cookies.get('lang') === 'en')
                ? Cookies.get('lang')
                : 'ru'
            : 'ru'
    ); // Изначально установите язык по умолчанию
    const [offer, setOffer] = useState(false);
    const [detailed, setDetailed] = useState(Cookies.get('cottages') !== null ? (Cookies.get('cottages') === "show") ? true : false : false);

    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
        Cookies.set('lang', newLanguage);
    };

    const showOffer = () => {
        setOffer(true);
    };

    const showDetailed = () => {
        setDetailed(true);
        Cookies.set('cottages', "show");
    };
    useEffect(() => {
        // Функция для получения GET параметров из URL
        const getQueryParams = () => {
            const params = {};
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            for (const [key, value] of urlParams.entries()) {
                params[key] = value;
            }
            return params;
        };

        // Получение GET параметров из URL
        const queryParams = getQueryParams();

        // Обработка полученных параметров
        if (queryParams.lang) {
            let lang = queryParams.lang.toLowerCase()
            if(['ru','en'].includes(lang)){
                setLanguage(queryParams.lang);
            }
        }
    }, []); // useEffect будет запущен только при монтировании компонента

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, offer, showOffer, detailed, showDetailed }}>
            {children}
        </LanguageContext.Provider>
    );
};

export { LanguageContext, LanguageProvider };