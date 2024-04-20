import classes from './CardAboutUs.module.css';

function CardAboutUs(props) {

    return (
        <div className={classes.container}>
            <div className={classes.title}>{props.title}</div>
            <div className={classes.desc}><span className={classes.number}>1</span><div>{props.st}</div></div>
            <div className={classes.desc}><span className={classes.number}>2</span><div>{props.nd}</div></div>
            <div className={classes.desc}><span className={classes.number}>3</span><div>{props.rd}</div></div>
        </div>
    )
}

export default CardAboutUs;