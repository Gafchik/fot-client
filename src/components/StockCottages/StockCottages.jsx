import React, { useContext, useState } from 'react';
import Cottages from './images/cottages.jpg';
import classes from './StockCottages.module.css'
import { cottages } from './Cottages.ts';
import { LanguageContext } from '../LanguageContext/LanguageContext';
import { swipe } from './SwipeHandler.ts';
import { useSearchParams } from "react-router-dom";

function StockCottages(props) {
    let [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("cottages_overview");

    const { language, detailed } = useContext(LanguageContext);
    const [point, setPoint] = React.useState({ x: 0, y: 0, angle: 0 });
    const [dragging, setDragging] = React.useState(false);
    const [x, setX] = React.useState(0);
    const [y, setY] = React.useState(0);
    const [angle, setAngle] = React.useState(0);
    const myElementRef = React.useRef(null);
    const [offset, setOffset] = React.useState(0);
    const [swiped, setSwiped] = React.useState(false);

    const translations = {
        ru: {
            main_title: "ПОЛУЧИ ДОПОЛНИТЕЛЬНУЮ ИНФОРМАЦИЮ ПО ИНТЕРЕСУЮЩЕМУ ПРЕДЛОЖЕНИЮ",
            help_title: "Наведите на коттедж, чтобы получить информацию по нему",
            free_to_buy: "Доступен",
            reserved_by: "Недоступен",
            flats_to_buy: "Доступен",
            flats_availbale: "Блоков доступно ",
            to_purchase: "на общую вместимость 32 человека"
        },
        en: {
            main_title: "GET AN ADDITIONAL INFO ABOUT COTTAGES",
            help_title: "Hover into a cottege to get info about it",
            free_to_buy: "Available",
            reserved_by: "Not available",
            flats_to_buy: "Not available",
            flats_availbale: "Flats available",
            to_purchase: ""
        }
    }

    const [currentBuilding, setCurrentBuilding] = React.useState(0);
    const [info, setInfo] = React.useState({
        id: cottages.GetCottageById(currentBuilding === cottages.count ? 0 : currentBuilding).number,
        available: cottages.GetCottageById(currentBuilding === cottages.count ? 0 : currentBuilding).isAvailable,
        title: cottages.GetCottageById(currentBuilding === cottages.count ? 0 : currentBuilding).GetTitle(language),
        flats: cottages.GetCottageById(currentBuilding === cottages.count ? 0 : currentBuilding).flats,
        flatsCount: cottages.GetCottageById(currentBuilding === cottages.count ? 0 : currentBuilding).flatsCount,
        flatsAvailable: cottages.GetCountOfAvailableFlats(currentBuilding === cottages.count ? 0 : currentBuilding),
        additional: cottages.GetCottageById(currentBuilding === cottages.count ? 0 : currentBuilding).GetAdditional(language)
    });
    const [visible, setVisible] = React.useState(false);
    const [clicked, setClicked] = React.useState(false);
    const [firstTimeSelected, setFirstTimeSelected] = React.useState(false);

    function HandleCurrBuilding(next) {
        let currBuilding;

        if (next) currBuilding = currentBuilding > cottages.count - 1 ? 0 : currentBuilding + 1;
        else currBuilding = currentBuilding === 0 ? cottages.count - 1 : currentBuilding - 1;

        setCurrentBuilding(currBuilding);

        if (currBuilding === -1) currBuilding = cottages.count - 1;
        else if (currBuilding === cottages.count) currBuilding = 0;

        setInfo({
            id: cottages.GetCottageById(currBuilding).number,
            available: cottages.GetCottageById(currBuilding).isAvailable,
            title: cottages.GetCottageById(currBuilding).GetTitle(language),
            flats: cottages.GetCottageById(currBuilding).flats,
            flatsCount: cottages.GetCottageById(currBuilding).flatsCount,
            flatsAvailable: cottages.GetCountOfAvailableFlats(currBuilding),
            additional: cottages.GetCottageById(currBuilding).GetAdditional(language)
        })
    }

    function onMouseEnter(number) {
        setVisible(true);
        setFirstTimeSelected(true);
        setCurrentBuilding(number);
        setInfo({
            id: cottages.GetCottageById(number).number,
            available: cottages.GetCottageById(number).isAvailable,
            title: cottages.GetCottageById(number).GetTitle(language),
            flats: cottages.GetCottageById(number).flats,
            flatsCount: cottages.GetCottageById(number).flatsCount,
            flatsAvailable: cottages.GetCountOfAvailableFlats(number),
            additional: cottages.GetCottageById(number).GetAdditional(language)
        })
    }

    React.useEffect(() => {
        if (window.innerWidth < 768) {
            setClicked(true);
        }

        console.log(query);
    }, []);

    function onMouseLeave() {
        setVisible(false);
    }

    function Resize(isPocket) {
        if (window.innerWidth > 1200) {
            return 1200 / 1500;
        }

        return (window.innerWidth - (!isPocket ? 17 : 0)) / 1500;
    }

    function Dmns(number, isPocket) {
        let top = ((cottages.GetCottageById(number)?.y || cottages.GetCottageById(0).y) + (isPocket ? (cottages.GetCottageById(number)?.pocketOffsetY || cottages.GetCottageById(0).pocketOffsetY) * 3 : 0)) * Resize(isPocket);
        let left = ((cottages.GetCottageById(number)?.x || cottages.GetCottageById(0).x) + (isPocket ? (cottages.GetCottageById(number)?.pocketOffsetX || cottages.GetCottageById(0).pocketOffsetX) * 4 : 0)) * Resize(isPocket);
        let width = (cottages.GetCottageById(number)?.width || cottages.GetCottageById(0).width) + "%";

        return { top: top, left: left, width: width };
    }

    if (!detailed && !query) {
        return <div className={classes.container}>
            <div className={classes.holder}>
                <div className={classes.content}>
                </div>
            </div>
        </div>
    }

    function onTouchStart(e) {
        const helper = document.getElementById("helper");
        if (helper !== null) {
            helper.remove();
            setSwiped(true);
        }

        const element = myElementRef.current;
        if (element) {
            const { left, top } = element.getBoundingClientRect();
            const offsetX = e.targetTouches[0].clientX - left;
            const offsetY = e.targetTouches[0].clientY - top;
            console.log('Offset X:', offsetX, "Element:", e.targetTouches[0].clientX);
            console.log('Offset Y:', offsetY);
            setOffset(offsetX);
            setDragging(true);
            swipe.SetStartPos((e.targetTouches[0].clientX - offsetX));
        }
    }

    function calculateOpacity(newX) {
        console.log(window.innerWidth / 2, newX);
        const distanceFromCenter = Math.abs(window.innerWidth / 2 - Math.abs(newX));
        const maxDistance = window.innerWidth / 2;
        const opacity = Math.abs(distanceFromCenter / maxDistance);
        return Math.max(opacity, 0);
    }

    function onTouchMove(e) {
        if (dragging) {
            let touchPos = e.targetTouches[0];
            swipe.UpdatePos(touchPos.clientX);

            let newX = (touchPos.clientX - offset) / window.innerWidth * 400;
            let newY = touchPos.clientY / window.innerHeight;
            let newAngle = Math.atan2(0 - x, 1500 - y);

            // transform: `translate(${point.x}px, ${point.y}px)`, rotate: `${-(point.angle * 180 / Math.PI) / 2}deg

            const card = document.getElementById("card");
            card.style.opacity = Math.max(calculateOpacity(newX), 0);

            card.style.transform = `scale(${Math.max(calculateOpacity(newX), 0.8)}) translateX(${newX}px) rotate(${-(newAngle * 180 / Math.PI) / 2}deg)`;
            let dir = swipe.CheckDirection();
            // console.log(dir);
            if (dir !== 2) {
                if (dir === 0) {
                    HandleCurrBuilding(false);
                    setPoint({ x: 0, y: 0, angle: 0 });
                }
                else if (dir === 1) {
                    HandleCurrBuilding(true);
                    setPoint({ x: 0, y: 0, angle: 0 });
                }
                card.style.transform = `translate(0, 0) rotate(0)`;
                card.style.transition = `.2s ease`;
                card.style.opacity = 1;

                setDragging(false);
            }
        }
    }

    function onTouchEnd(e) {
        if (dragging) {
            const card = document.getElementById("card");
            card.style.transform = `translate(0, 0) rotate(0)`;
            card.style.transition = `.4s ease`;
            card.style.opacity = 1;
            setDragging(false);
        }
    }

    return (
        <div className={classes.container} id="stock">
            <div className={classes.holder}>
                <div className={classes.content}>
                    <div>
                        <div className={classes.titleMain} style={{paddingTop: 40}}>
                            {translations[language].main_title}
                        </div>
                    </div>
                    <div className={classes.images}>
                        <div className={`${classes.helpTitle} ${firstTimeSelected ? classes.hide : ""}`}>
                            {translations[language].help_title}
                        </div>
                        <div style={{ opacity: visible ? 1 : 0 }} className={classes.cardInfo}>
                            <div className={classes.infoBlock}>
                                <div className={classes.title}>{info.title}</div>
                                <div className={classes.number}>{info.id}</div>
                            </div>
                            <div className={classes.sellBlock}>
                                <div className={classes.subTitle}>
                                    {(info.flats !== undefined && info.flats !== null) ? <div className={classes.flats}>
                                        {/* {[...Array(info.flatsCount)].map((x, index) => <>
                                            <span className={info.flats[index].isAvailable ?
                                                "" : classes.reserved}>{info.flats[index].isAvailable}</span>
                                            {index === 1 ? <br /> : <></>}
                                        </>
                                        )} */}
                                        <div className={classes.titleAdd}>{info.additional}</div>
                                        <div className={classes.flatsInfo}>{translations[language].flats_availbale} {info.flatsAvailable} {translations[language].to_purchase}</div>
                                    </div>
                                        : info.available ? <span className={classes.datum}>{translations[language].free_to_buy}</span> : <span className={classes.datum}>{translations[language].reserved_by}</span>}
                                </div>
                            </div>
                        </div>
                        <img className={classes.image} src={Cottages} />
                        {window.innerWidth > 768 ? <>
                            {[...Array(cottages.count)].map((x, index) =>
                                <>
                                    <img key={index} style={{ zIndex: 1000 - cottages.GetCottageById(index).index, left: Dmns(index, false).left, top: Dmns(index, false).top, width: Dmns(index, false).width }} onMouseLeave={onMouseLeave} onClick={() => setClicked(true)} onTouchEnd={() => setClicked(true)} onMouseEnter={() => onMouseEnter(index)} className={classes.highlighted} src={cottages.GetCottageById(index).GetImage()} />
                                </>
                            )}
                        </>
                            :
                            <>
                                <div className={classes.highlightedPocket} style={{ zIndex: 1000 - cottages.GetCottageById(currentBuilding)?.index || cottages.GetCottageById(0).index, left: Dmns(currentBuilding, true).left, top: Dmns(currentBuilding, true).top }}>{cottages.GetCottageById(currentBuilding)?.number || 1}</div>
                                {/* {[...Array(cottages.count)].map((x, index) => {
                                    if (cottages.GetCottageById(index).GetId() === currentBuilding) {
                                        return <div className={classes.highlightedPocket} style={{ zIndex: 1000 - cottages.GetCottageById(index).index, left: Dmns(index, true).left, top: Dmns(index, true).top }}>{cottages.GetCottageById(index).number}</div>
                                    }
                                }
                                )} */}
                            </>
                        }
                        {/* <img style={{ left: Dmns(1).left, top: Dmns(1).top, width: Dmns(1).width }} onMouseLeave={onMouseLeave} onMouseEnter={() => onMouseEnter(1)} className={classes.highlighted} src={cottages.GetCottageById(1).GetImage()} /> */}
                    </div>
                    <div style={{ position: 'relative', width: '100%', height: 400, overflow: 'hidden' }}>
                        <div id="card" ref={myElementRef} style={{ position: 'absolute', transition: `${!dragging ? ".2s ease" : ""}` }} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} className={`${classes.cardHolderMobile} ${!swiped ? classes.animated : ""}`}>
                            <div id="helper" className={classes.swipehelper}>👆</div>
                            <div style={{ opacity: clicked ? 1 : 0 }} className={classes.cardInfoMobile}>
                                <div className={classes.infoBlockMobile}>
                                    <div className={classes.titleMobile}>{info.title}</div>
                                    <div className={classes.numberMobile}>{info.id}</div>
                                </div>
                                <div className={classes.sellBlockMobile}>
                                    <div className={classes.subTitleMobile}>
                                        {(info.flats !== undefined && info.flats !== null) ? <div className={classes.flats}>
                                            {/* {[...Array(info.flatsCount)].map((x, index) => <>
                                            <span className={info.flats[index].isAvailable ?
                                                "" : classes.reserved}>{info.flats[index].isAvailable}</span>
                                            {index === 1 ? <br /> : <></>}
                                        </>
                                        )} */}
                                            <div className={classes.titleAdd}>{info.additional}</div>
                                            <div className={classes.flatsInfo}>{translations[language].flats_availbale} {info.flatsAvailable} {translations[language].to_purchase}</div>
                                        </div>
                                            : info.available ? translations[language].flats_to_buy : translations[language].reserved_by}
                                    </div>
                                </div>
                            </div>
                            <div className={classes.mobileHandler}>
                                <div onTouchEnd={() => HandleCurrBuilding(false)} className={classes.mobileHandlerArrow}>{"<"}</div>
                                <div onTouchEnd={() => HandleCurrBuilding(true)} className={classes.mobileHandlerArrow}>{">"}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default StockCottages;