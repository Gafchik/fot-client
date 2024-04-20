import React from 'react';
import classes from './Gallery.module.css';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

import image17 from '../../images/business/17.jpg';
import image18 from '../../images/business/18.jpg';
import image19 from '../../images/business/19.jpg';
import image23 from '../../images/business/23.jpg';
import image24 from '../../images/business/24.jpg';

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

import summer1 from '../../images/3d/summer1.png';
import summer2 from '../../images/3d/summer2.png';
import summer3 from '../../images/3d/summer3.png';
import summer4 from '../../images/3d/summer4.png';
import winter1 from '../../images/3d/winter1.png';
import winter2 from '../../images/3d/winter2.png';
import winter3 from '../../images/3d/winter3.png';
import winter4 from '../../images/3d/winter4.png';

import stfloor from './stfloor.png';
import ndfloor from './ndfloor.png';


import plant1 from '../../images/plants/1.jpeg';
import plant2 from '../../images/plants/2.jpg';
import plant3 from '../../images/plants/3.jpeg';
import plant5 from '../../images/plants/5.jpg';
import image27 from '../../images/business/27.jpg';
import image28 from '../../images/business/28.jpg';
import image29 from '../../images/business/29.jpg';
import image30 from '../../images/business/30.jpg';


const galleryImagesPlaning = [
    { image: stfloor },
    { image: ndfloor }
]

const galleryImagesPlants = [
    { image: plant1 },
    { image: plant2 },
    { image: plant3 },
    { image: plant5 },
    { image: image27 },
    { image: image28 },
    { image: image29 },
    { image: image30 },
]

const galleryImagesPhotos = [
    { image: image17 },
    { image: image18 },
    { image: image19 },
    { image: image23 },
    { image: image24 }
]

const galleryImagesDesign = [
    { image: image1 },
    { image: summer1 },
    { image: summer2 },
    { image: summer3 },
    { image: summer4 },
    { image: winter1 },
    { image: winter2 },
    { image: winter3 },
    { image: winter4 },
    { image: image4 },
    { image: image5 },
    { image: image6 },
    { image: image7 },
    { image: image8 },
    { image: image9 },
    { image: image10 },
    { image: image11 },
    { image: image12 },
    { image: image13 },
    { image: image14 },
    { image: image15 },
    { image: image16 }

]

function Image(props) {

    const [index, setIndex] = React.useState(props.image);

    const getPhotos = () => {
        if (props.mode == "design") {
            return galleryImagesDesign;
        }
        else if (props.mode == "photos") {
            return galleryImagesPhotos;
        }
        else if (props.mode == "planing") {
            return galleryImagesPlaning;
        }
        else if (props.mode == "plants") {
            return galleryImagesPlants;
        }
    }

    const Back = () => {
        let scrollToIndex = getPhotos().length - 1;

        if (index > 0) {
            setIndex(index - 1);
            scrollToIndex = index - 1;
        }
        else setIndex(getPhotos().length - 1);

        var element = document.querySelector('#thumbnails');
        element.scrollLeft = scrollToIndex * 74;
    }

    const Next = () => {
        let scrollToIndex = 0;

        if (index < getPhotos().length - 1) {
            setIndex(index + 1);
            scrollToIndex = index + 1;
        }
        else setIndex(0);
        
        var element = document.querySelector('#thumbnails');
        element.scrollLeft = scrollToIndex * 74;
    }

    React.useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto"
        };
    }, []);

    const changeImage = (i) => {
        setIndex(i);
        var element = document.querySelector('#thumbnails');
        element.scrollLeft = i * 74;
    }

    return (
        <div onClick={props.close} className={classes.fullsize}>
            <div onClick={event => event.stopPropagation()}>
                <div onClick={Back} className={classes.arrowLeft}><FaChevronCircleLeft style={{ fontSize: 26 }} /></div>
                <div onClick={Next} className={classes.arrowRight}><FaChevronCircleRight style={{ fontSize: 26 }} /></div>
            </div>
            <div className={classes.imagesHolder}>
                <img className={classes.imageContainerAdvancedFullsize} style={{ cursor: 'zoom-out' }} src={getPhotos()[index].image} />
                <div onClick={(e) => e.stopPropagation()} className={classes.thumbnails} id="thumbnails" style={{ justifyContent: getPhotos().length < 10 ? 'center' : undefined }}>
                    {getPhotos().map((elem, i) => {
                        return <img onClick={() => changeImage(i)} className={classes.imageThumbnail} src={elem.image} style={{ borderWidth: i === index ? 2 : undefined, borderColor: i === index ? 'greenyellow' : undefined, filter: i === index ? 'brightness(100%)' : undefined }} />
                    })}
                </div>
            </div>
        </div>
    );
}

export default Image;