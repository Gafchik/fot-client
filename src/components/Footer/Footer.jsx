import { useContext } from 'react';
import classes from './Footer.module.css';
import { BsInstagram, BsYoutube } from 'react-icons/bs';
import { FaTelegramPlane, FaTwitter } from 'react-icons/fa'
import { LanguageContext } from '../LanguageContext/LanguageContext';
import Logo from '../../Logo/Logo';
import classesAbout from '../MainTextSectionAboutUs/AboutUs.module.css';

import Telegram from '../MainTextSectionAboutUs/Images/telegram.png';
import Phone from '../MainTextSectionAboutUs/Images/phone.png';
import Mail from '../MainTextSectionAboutUs/Images/mail.png';
import Viber from '../MainTextSectionAboutUs/Images/viber.png';
import Whatsapp from '../MainTextSectionAboutUs/Images/whatsapp.png';

function Footer() {
    const { language } = useContext(LanguageContext);

    const translations = {
        ru: {
            contacts: "Мы в соцсетях",
            me: "КОНТАКТЫ"
        },
        en: {
            contacts: "Our socials",
            me: "CONTACTS"
        }
    }

    return (
        <div className={classes.container}>
            <div className={classes.holder}>
                <div className={classesAbout.contactsContainer}>
                    {/* <div className={classesAbout.titleContactDesc} style={{ fontSize: 20 }}>Andrii</div> */}
                    <div className={classesAbout.title} style={{ fontSize: 30, marginBottom: -20, marginTop: 10 }}>{translations[language].me}</div>
                    <div className={classesAbout.iconHolders}>
                        <a className='hidden' style={{transitionDelay: '0'}} href="https://wa.me/995599427509">
                            <img className={classesAbout.iconContact} src={Whatsapp} />
                        </a>
                        <a className='hidden' style={{transitionDelay: '0.1s'}} href="https://t.me/BioAndrii">
                            <img className={classesAbout.iconContact} src={Telegram} />
                        </a>
                        <a className='hidden' style={{transitionDelay: '0.2s'}} href="viber://chat?number=+995599427509">
                            <img className={classesAbout.iconContact} src={Viber} />
                        </a>
                        <a className='hidden' style={{transitionDelay: '0.3s'}} href="mailto:Bio.cottage.gr@gmail.com?subject=Оливковые плантации и коттедж в клубном поселке&body=">
                            <img className={classesAbout.iconContact} src={Mail} />
                        </a>
                        <a className='hidden' style={{transitionDelay: '0.4s'}} href="tel:+995599427509">
                            <img className={classesAbout.iconContact} src={Phone} />
                        </a>
                    </div>
                </div>
                <div className={classes.main} style={{marginTop: -50}}>
                    <div className={classes.navContainer}>
                        <div className={classes.logoContainer}>
                            <Logo /> <span className={classes.logotext}>Family Olive Club</span>
                        </div>
                    </div>
                    {/* <div className={classes.contactsHolder}>
                        <span>2023 </span>
                        <span>© All rights reserved.</span>
                    </div> */}
                    <div className={classes.additional}>
                        <span className={classes.title}>{translations[language].contacts}</span>
                        <div className={classes.contactsHolderIcons}>
                            <div className={classes.iconHolder}>
                                <a href="https://www.instagram.com/bio_cottege/" target="_blank">
                                    <BsInstagram className={classes.inst} style={{ fontSize: 23 }} />
                                </a>
                                <a href="https://www.youtube.com/@OliveFamilyClub" target="_blank">
                                    <BsYoutube className={classes.inst} style={{ fontSize: 30 }} />
                                </a>
                                {/* <FaTelegramPlane className={classes.telegram} style={{ fontSize: 30 }} /> */}
                                {/* <FaTwitter className={classes.twitter} style={{ fontSize: 30 }} /> */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer;