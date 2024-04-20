import classes from './CardAboutUs.module.css';

function CardAboutUsSimple(props) {
    return (
        <div className={`${classes.container} ${classes.white}`}>
            <div className={classes.descSimple}><span className={classes.numberSimple}>4</span><div className={classes.bio}>{props.text}</div></div>
        </div>
    )
}

export default CardAboutUsSimple;