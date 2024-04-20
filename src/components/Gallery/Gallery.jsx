import classes from './Gallery.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useContext } from 'react';
import Slider from "react-slick";
import { RiMapPinLine } from 'react-icons/ri';
import { TbOlympics } from 'react-icons/tb';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import image1 from '../../images/business/1.png';
import image4 from '../../images/business/4.jpg';
import image5 from '../../images/business/5.jpg';
import image6 from '../../images/business/6.jpg';
import image7 from '../../images/business/7.jpg';
import image8 from '../../images/business/8.jpg';
import image9 from '../../images/business/9.jpg';
import image10 from '../../images/business/10.jpg';
import image11 from '../../images/business/11.jpg';
import image12 from '../../images/business/12.jpg';
import image13 from '../../images/business/13.jpg';
import image14 from '../../images/business/14.jpg';
import image15 from '../../images/business/15.jpg';
import image16 from '../../images/business/16.jpg';
import image17 from '../../images/business/17.jpg';
import image18 from '../../images/business/18.jpg';
import image19 from '../../images/business/19.jpg';
import image23 from '../../images/business/23.jpg';
import image24 from '../../images/business/24.jpg';
import image27 from '../../images/business/27.jpg';
import image28 from '../../images/business/28.jpg';
import image29 from '../../images/business/29.jpg';
import image30 from '../../images/business/30.jpg';

import video1 from '../../videos/1.MP4';
import video2 from '../../videos/2.MP4';
import video3 from '../../videos/3.MP4';

import plant1 from '../../images/plants/1.jpeg';
import plant2 from '../../images/plants/2.jpg';
import plant3 from '../../images/plants/3.jpeg';
import plant5 from '../../images/plants/5.jpg';
import plant6 from '../../images/plants/6.MP4';
import summer1 from '../../images/3d/summer1.png';
import summer2 from '../../images/3d/summer2.png';
import summer3 from '../../images/3d/summer3.png';
import summer4 from '../../images/3d/summer4.png';
import winter1 from '../../images/3d/winter1.png';
import winter2 from '../../images/3d/winter2.png';
import winter3 from '../../images/3d/winter3.png';
import winter4 from '../../images/3d/winter4.png';
import { LanguageContext } from '../LanguageContext/LanguageContext';
import Image from './Image';

import stfloor from './stfloor.png';
import ndfloor from './ndfloor.png';

var settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
};


function Gallery() {
    const { language, showOffer, detailed } = useContext(LanguageContext);
    const [isVisible, setIsVisible] = React.useState(false);
    const [isDesign, setIsDesign] = React.useState(true);
    const [isFirstFloor, setIsFirstFloor] = React.useState(true);
    const [image, setImage] = React.useState(false);
    const [mode, setMode] = React.useState(0);

    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    })

    const translations = {
        ru: {
            title1: "Оливковый бизнес - один из самых прибыльных и стабильных в агросекторе",
            desc1: "Так выглядит ваш актив до и после первого урожая",
            title2: "Коттеджный поселок Family Olive Club в Бакуриани",
            desc2: "Только за 2018 год турестический поток вырос на 15 % и ожидает увеличения роста в связи с проведением ",
            championship: "Чемпионата мира по фристайлу 2023",
            and: " и ",
            festival: "Европейского зимнего юношеского олимпийского фестиваля 2025.",
            such: " Такие мероприятия обеспечивают ликвидность активов и их стремительный рост.",
            offer: "Выбрать коттедж",
            cottages: "Коттеджи",
            design: "Визуализация",
            photos: "Фотографии",
        },
        en: {
            title1: "The olive business is one of the most profitable and stable in the agricultural sector",
            desc1: "This is what your asset looks like before and after the first harvest",
            title2: "Family Olive Club cottage settlement in Bakuriani",
            desc2: "In 2018 alone, tourist traffic grew by 15% and is expected to increase in connection with ",
            championship: "the Freestyle World Championships 2023",
            and: " and ",
            festival: "the European Winter Youth Olympic Festival 2025.",
            such: " Such events provide asset liquidity and their rapid growth.",
            offer: "Choose the cottage",
            cottages: "Cottages",
            design: "Design",
            photos: "Photos",
        }
    }

    const imagesOlives = [
        {
            original: plant1,
            thumbnail: plant1,
            originalWidth: window.innerWidth,
            originalHeight: 300,
            thumbnailHeight: 60
        },
        {
            original: plant2,
            thumbnail: plant2,
            originalWidth: window.innerWidth,
            originalHeight: 300,
            thumbnailHeight: 60
        },
        {
            original: plant3,
            thumbnail: plant3,
            originalWidth: window.innerWidth,
            originalHeight: 300,
            thumbnailHeight: 60
        },
        {
            original: plant5,
            thumbnail: plant5,
            originalWidth: window.innerWidth,
            originalHeight: 300,
            thumbnailHeight: 60
        },
        {
            original: image27,
            thumbnail: image27,
            originalWidth: window.innerWidth,
            originalHeight: 300,
            thumbnailHeight: 60
        },
        {
            original: image28,
            thumbnail: image28,
            originalWidth: window.innerWidth,
            originalHeight: 300,
            thumbnailHeight: 60
        },
        {
            original: image29,
            thumbnail: image29,
            originalWidth: window.innerWidth,
            originalHeight: 300,
            thumbnailHeight: 60
        },
        {
            original: image30,
            thumbnail: image30,
            originalWidth: window.innerWidth,
            originalHeight: 300,
            thumbnailHeight: 60
        }
    ];

    const imagesCottages = [
        {
            original: image1,
            thumbnail: image1,
            originalWidth: window.innerWidth,
            originalHeight: 300,
            thumbnailHeight: 60
        },
        {
            original: summer1,
            thumbnail: summer1,
            originalWidth: window.innerWidth,
            originalHeight: 300,
            thumbnailHeight: 60
        },
        {
            original: summer2,
            thumbnail: summer2,
            originalWidth: window.innerWidth,
            originalHeight: 300,
            thumbnailHeight: 60
        },
        {
            original: summer3,
            thumbnail: summer3,
            originalWidth: window.innerWidth,
            originalHeight: 300,
            thumbnailHeight: 60
        },
        {
            original: summer4,
            thumbnail: summer4,
            originalWidth: window.innerWidth,
            originalHeight: 300,
            thumbnailHeight: 60
        },
        {
            original: winter1,
            thumbnail: winter1,
            originalWidth: window.innerWidth,
            originalHeight: 300,
            thumbnailHeight: 60
        },
        {
            original: winter2,
            thumbnail: winter2,
            originalWidth: window.innerWidth,
            originalHeight: 300,
            thumbnailHeight: 60
        },
        {
            original: winter3,
            thumbnail: winter3,
            originalWidth: window.innerWidth,
            originalHeight: 300,
            thumbnailHeight: 60
        },
        {
            original: winter4,
            thumbnail: winter4,
            originalWidth: window.innerWidth,
            originalHeight: 300,
            thumbnailHeight: 60
        },
        {
            original: image4,
            thumbnail: image4,
            originalWidth: window.innerWidth,
            originalHeight: 300,
            thumbnailHeight: 60
        },
        {
            original: image5,
            thumbnail: image5,
            originalWidth: window.innerWidth,
            originalHeight: 300,
            thumbnailHeight: 60
        },
        {
            original: image6,
            thumbnail: image6,
            originalWidth: window.innerWidth,
            originalHeight: 300,
            thumbnailHeight: 60
        },
        {
            original: image7,
            thumbnail: image7,
            originalWidth: window.innerWidth,
            originalHeight: 300,
            thumbnailHeight: 60
        },
        {
            original: image8,
            thumbnail: image8,
            originalWidth: window.innerWidth,
            originalHeight: 300,
            thumbnailHeight: 60
        },
        {
            original: image9,
            thumbnail: image9,
            originalWidth: window.innerWidth,
            originalHeight: 300,
            thumbnailHeight: 60
        },
        {
            original: image10,
            thumbnail: image10,
            originalWidth: window.innerWidth,
            originalHeight: 300,
            thumbnailHeight: 60
        },
        {
            original: image11,
            thumbnail: image11,
            originalWidth: window.innerWidth,
            originalHeight: 300,
            thumbnailHeight: 60
        },
        {
            original: image12,
            thumbnail: image12,
            originalWidth: window.innerWidth,
            originalHeight: 300,
            thumbnailHeight: 60
        },
        {
            original: image13,
            thumbnail: image13,
            originalWidth: window.innerWidth,
            originalHeight: 300,
            thumbnailHeight: 60
        },
        {
            original: image14,
            thumbnail: image14,
            originalWidth: window.innerWidth,
            originalHeight: 300,
            thumbnailHeight: 60
        },
        {
            original: image15,
            thumbnail: image15,
            originalWidth: window.innerWidth,
            originalHeight: 300,
            thumbnailHeight: 60
        },
        {
            original: image16,
            thumbnail: image16,
            originalWidth: window.innerWidth,
            originalHeight: 300,
            thumbnailHeight: 60
        },
        {
            original: image17,
            thumbnail: image17,
            originalWidth: window.innerWidth,
            originalHeight: 300,
            thumbnailHeight: 60
        },
        {
            original: image18,
            thumbnail: image18,
            originalWidth: window.innerWidth,
            originalHeight: 300,
            thumbnailHeight: 60
        },
        {
            original: image19,
            thumbnail: image19,
            originalWidth: window.innerWidth,
            originalHeight: 300,
            thumbnailHeight: 60
        },
        {
            original: image23,
            thumbnail: image23,
            originalWidth: window.innerWidth,
            originalHeight: 300,
            thumbnailHeight: 60
        },
        {
            original: image24,
            thumbnail: image24,
            originalWidth: window.innerWidth,
            originalHeight: 300,
            thumbnailHeight: 60
        }

    ]

    const [indexCottages, setIndexCottages] = React.useState(0);
    const [indexPlants, setIndexPlants] = React.useState(0);
    const [indexGallery, setIndexGallery] = React.useState(0);

    React.useEffect(() => {
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }
        window.addEventListener('resize', handleResize);

        return _ => {
            window.removeEventListener('resize', handleResize);
        }
    })

    const scrollToOffer = () => {
        showOffer();
        const element = document.getElementById('offer-section');
        if (element !== null) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    function getPlantsGallery() {
        if (window.innerWidth > 768) {
            return <Slider afterChange={function (e) { setIndexPlants(e) }} autoplay={false} autoplaySpeed={4000} arrows={dimensions.width > 768 ? true : false}  {...settings}>
                <img onClick={() => SetCurrentImage("plants", 0)} className={classes.imageContainerAdvanced} src={plant1} />
                <img onClick={() => SetCurrentImage("plants", 1)} className={classes.imageContainerAdvanced} src={plant2} />
                <img onClick={() => SetCurrentImage("plants", 2)} className={classes.imageContainerAdvanced} src={plant3} />
                <img onClick={() => SetCurrentImage("plants", 3)} className={classes.imageContainerAdvanced} src={plant5} />
                <img onClick={() => SetCurrentImage("plants", 4)} className={classes.imageContainerAdvanced} src={image27} />
                <img onClick={() => SetCurrentImage("plants", 5)} className={classes.imageContainerAdvanced} src={image28} />
                <img onClick={() => SetCurrentImage("plants", 6)} className={classes.imageContainerAdvanced} src={image29} />
                <img onClick={() => SetCurrentImage("plants", 7)} className={classes.imageContainerAdvanced} src={image30} />

                <video controls autoPlay muted loop className={`${classes.imageContainerAdvanced} ${classes.videoCon}`} >
                    <source src={plant6} type='video/mp4' />
                </video>
            </Slider>
        }
        return <>
            <ImageGallery items={imagesOlives} /><br />
        </>
    }


    const SetCurrentImage = (mode, image) => {
        setImage(image);
        setMode(mode);
        setIsVisible(true);
    }

    function getCottagesGallery() {
        if (window.innerWidth > 768) {
            if (isDesign) {
                return <Slider afterChange={function (e) { setIndexCottages(e) }} autoplay={false} autoplaySpeed={4000} arrows={dimensions.width > 768 ? true : false} {...settings}>
                    <img onClick={() => SetCurrentImage("design", 0)} className={classes.imageContainerAdvanced} src={image1} />
                    <img onClick={() => SetCurrentImage("design", 1)} className={classes.imageContainerAdvanced} src={summer1} />
                    <img onClick={() => SetCurrentImage("design", 2)} className={classes.imageContainerAdvanced} src={summer2} />
                    <img onClick={() => SetCurrentImage("design", 3)} className={classes.imageContainerAdvanced} src={summer3} />
                    <img onClick={() => SetCurrentImage("design", 4)} className={classes.imageContainerAdvanced} src={summer4} />
                    <img onClick={() => SetCurrentImage("design", 5)} className={classes.imageContainerAdvanced} src={winter1} />
                    <img onClick={() => SetCurrentImage("design", 6)} className={classes.imageContainerAdvanced} src={winter2} />
                    <img onClick={() => SetCurrentImage("design", 7)} className={classes.imageContainerAdvanced} src={winter3} />
                    <img onClick={() => SetCurrentImage("design", 8)} className={classes.imageContainerAdvanced} src={winter4} />
                    <img onClick={() => SetCurrentImage("design", 9)} className={classes.imageContainerAdvanced} src={image4} />
                    <img onClick={() => SetCurrentImage("design", 10)} className={classes.imageContainerAdvanced} src={image5} />
                    <img onClick={() => SetCurrentImage("design", 11)} className={classes.imageContainerAdvanced} src={image6} />
                    <img onClick={() => SetCurrentImage("design", 12)} className={classes.imageContainerAdvanced} src={image7} />
                    <img onClick={() => SetCurrentImage("design", 13)} className={classes.imageContainerAdvanced} src={image8} />
                    <img onClick={() => SetCurrentImage("design", 14)} className={classes.imageContainerAdvanced} src={image9} />
                    <img onClick={() => SetCurrentImage("design", 15)} className={classes.imageContainerAdvanced} src={image10} />
                    <img onClick={() => SetCurrentImage("design", 16)} className={classes.imageContainerAdvanced} src={image11} />
                    <img onClick={() => SetCurrentImage("design", 17)} className={classes.imageContainerAdvanced} src={image12} />
                    <img onClick={() => SetCurrentImage("design", 18)} className={classes.imageContainerAdvanced} src={image13} />
                    <img onClick={() => SetCurrentImage("design", 19)} className={classes.imageContainerAdvanced} src={image14} />
                    <img onClick={() => SetCurrentImage("design", 20)} className={classes.imageContainerAdvanced} src={image15} />
                    <img onClick={() => SetCurrentImage("design", 21)} className={classes.imageContainerAdvanced} src={image16} />
                </Slider>
            }
            else {
                return <Slider afterChange={function (e) { setIndexCottages(e) }} autoplay={false} autoplaySpeed={4000} arrows={dimensions.width > 768 ? true : false} {...settings}>
                    <img onClick={() => SetCurrentImage("photos", 0)} className={classes.imageContainerAdvanced} src={image17} />
                    <img onClick={() => SetCurrentImage("photos", 1)} className={classes.imageContainerAdvanced} src={image18} />
                    <img onClick={() => SetCurrentImage("photos", 2)} className={classes.imageContainerAdvanced} src={image19} />
                    <img onClick={() => SetCurrentImage("photos", 3)} className={classes.imageContainerAdvanced} src={image23} />
                    <img onClick={() => SetCurrentImage("photos", 4)} className={classes.imageContainerAdvanced} src={image24} />
                </Slider>
            }
        }
        return <>
            <ImageGallery items={imagesCottages} /><br />
        </>
    }

    return (
        <>
            {isVisible ? <Image close={() => setIsVisible(false)} mode={mode} image={image} /> : <></>}
            <div className={classes.container} id="gallery-section">
                <div className={`${classes.gallerySectionHolder} ${classes.second}`}>
                    <div className={classes.gallerySection}>
                        <div className={`${classes.titleHolder} ${classes.marg}`}>
                            <div className={classes.galleryHolder}>
                                <RiMapPinLine onClick={() => window.open("https://goo.gl/maps/AcBdgyooZggr984a6?coh=178571&entry=tt")} className={classes.pin} style={{ fontSize: 80 }} /><span className={classes.galleryTitle}>{translations[language].title1}</span>
                            </div>
                        </div>
                        <div className={`${classes.titleHolder} ${classes.titleDesc}`}>
                            {translations[language].desc1}
                        </div>
                        <div className={classes.galleryContainer}>
                            <div className={classes.images}>
                                {getPlantsGallery()}
                                <div className={`${classes.buttonHolder}`}>
                                    <div className={classes.additionalContainer}>
                                        <div className={classes.additionalInfo}>
                                            <div className={classes.additionalTitle}>Площадь</div>
                                            <div className={classes.additionalSubtitle}>5 га</div>
                                        </div>
                                        {/* <div className={classes.additionalInfo}>
                                            <div className={classes.additionalTitle}>Этажи</div>
                                            <div className={classes.additionalSubtitle}>2</div>
                                        </div> */}
                                        <div className={classes.additionalInfo}>
                                            <div className={classes.additionalTitle}>Доходность</div>
                                            <div className={classes.additionalSubtitle}>до 40% годовых</div>
                                        </div>
                                    </div>
                                    <div className={classes.buttonform} onClick={scrollToOffer}>{translations[language].offer}</div>
                                </div>
                            </div>
                            <div className={classes.floors}>
                                <div className={classes.plantsFeatures}>
                                    <div>
                                        Оливковый бизнес — один из самых прибыльных в агросекторе.
                                    </div>
                                    <div>
                                        Family Olive Club — внедрила в агробизнес специально составленную экономическую модель, которая позволит получать стабильную прибыль.
                                    </div>
                                    <div>
                                        Оливки и оливковое масло являются одними из основных продуктов питания в Средиземноморском регионе. По данным исследований этих фондов, потребление оливкового масла за период с 2016 года по 2020 год, увеличилось почти на 20% и остается категорией самого потребляемого оливкового продукта.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${classes.gallerySectionHolder} ${classes.second}`} id="cottages-section">
                    <div className={classes.gallerySection}>
                        <div className={`${classes.titleHolder} ${classes.addHolder} ${classes.marg}`}>
                            <div className={classes.galleryHolder}>
                                <RiMapPinLine onClick={() => window.open("https://www.google.com/maps/place/Bakuriani,+Georgien/@41.7469131,43.5073183,14z/data=!3m1!4b1!4m6!3m5!1s0x404316197e7e1f63:0x74a1b8db49722b50!8m2!3d41.7509723!4d43.5291848!16zL20vMDVjNGI3")} className={classes.pin} style={{ fontSize: 50 }} /><span className={classes.galleryTitle}>{translations[language].title2}</span>
                            </div>
                            {/* <div>
                            <TbOlympics className={classes.icond} style={{ fontSize: 50 }} />
                        </div> */}
                        </div>
                        <div className={`${classes.titleHolder} ${classes.titleDesc}`} style={{ marginTop: 15, display: 'flex' }}>
                            <span>
                                {translations[language].desc2}<a href="https://www.youtube.com/watch?v=GitP14BbjcA&ab_channel=FISSnowboarding" target="_blank" className={classes.link}>{translations[language].championship}</a>{translations[language].and}<a href="https://1tv.ge/news/saqartvelos-premier-ministrma-da-evropis-olimpiuri-komitetis-prezidentma-2025-wlis-zamtris-akhalgazrduli-olimpiuri-festivalis-mosamzadebeli-procesi-ganikhiles/" className={classes.link}>{translations[language].festival}</a>{translations[language].such}
                            </span>
                        </div>
                        <div className={classes.galleryContainer}>
                            <div className={classes.images}>
                                <div className={classes.galleryTitleSuper}>
                                    <div>{translations[language].cottages}</div>
                                    <div onClick={() => setIsDesign(!isDesign)} className={classes.slider}>
                                        <div className={`${classes.backgroundFill} ${isDesign ? classes.left : classes.right}`}></div>
                                        <div>{translations[language].design}</div>
                                        <div>{translations[language].photos}</div>
                                    </div>
                                </div>
                                {getCottagesGallery()}
                                <div className={`${classes.buttonHolder}`}>
                                    <div className={classes.additionalContainer}>
                                        <div className={classes.additionalInfo}>
                                            <div className={classes.additionalTitle}>Площадь</div>
                                            <div className={classes.additionalSubtitle}>100 м2</div>
                                        </div>
                                        <div className={classes.additionalInfo}>
                                            <div className={classes.additionalTitle}>Этажи</div>
                                            <div className={classes.additionalSubtitle}>2</div>
                                        </div>
                                        <div className={classes.additionalInfo}>
                                            <div className={classes.additionalTitle}>Доходность</div>
                                            <div className={classes.additionalSubtitle}>До 10% годовых</div>
                                        </div>
                                    </div>
                                    <div className={classes.buttonform} onClick={scrollToOffer}>{translations[language].offer}</div>
                                </div>
                            </div>
                            <div className={classes.floors}>
                                <div className={classes.floorsTitleSuper}>
                                    <div className={classes.floorPicker} onClick={() => setIsFirstFloor(true)} style={{ color: isFirstFloor ? 'white' : 'inherit' }} >Первый этаж</div>
                                    <div className={classes.floorPicker} onClick={() => setIsFirstFloor(false)} style={{ color: isFirstFloor ? 'inherit' : 'white' }} >Второй этаж</div>
                                </div>
                                <img onClick={() => SetCurrentImage("planing", isFirstFloor ? 0 : 1)} className={classes.imageContainerFloors} src={isFirstFloor ? stfloor : ndfloor} />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default Gallery;