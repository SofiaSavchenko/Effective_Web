import classes from './ServiceCard.module.scss'


const ServiceCard = (props: {image: string, title: string, text: string}) => {
    return <>
        <div className={classes.container}>
            <div className={classes.imageContainer}>
                <img className={classes.image} src={props.image}></img>
            </div>
            <div className={classes.textBlock}>
                <span className={classes.title}>{props.title}</span>
                <p className={classes.text}>{props.text}</p>
            </div>
        </div>
    </>
}

export default ServiceCard;