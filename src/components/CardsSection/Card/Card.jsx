import classes from './Card.module.css';

function Card(props) {

    function InitCard() {
        if (props.url) {
            return <a className={`${classes.container} ${classes.clickable}`} target="_blank" href={props.url} style={{ animationDelay: `${props.delay}s`, width: `${props.width}px` }}>
                <div className={classes.holder}>
                    <span className={`${classes.title} ${classes.titleAnim}`}>{props.title}</span>
                    <div className={classes.pointer}>👈</div>
                </div>
                <div className={classes.desc}>{props.desc}</div>
            </a>
        }
        else {
            return <div className={`${classes.container} hidden`} style={{ animationDelay: `${props.delay}s`, width: `${props.width}px`, transitionDelay: `${props.delay}s` }}>
                <div className={classes.title}>{props.title}</div>
                <div className={classes.desc}>{props.desc}</div>
            </div>
        }
    }

    return (
        <>{InitCard()}</>
    )
}

export default Card;