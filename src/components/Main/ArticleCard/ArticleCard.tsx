import classes from './ArticleCard.module.scss'


const ArticleCard = (props: {image: string, title: string, text: string}) => {
    return <>
        <div className={classes.wrap}>
            <img className={classes.image} src={props.image}></img>
            <div className={classes.description}>
                <div className={classes.textBlock}>
                    <span className={classes.title}>{props.title}</span>
                    <p className={classes.text}>{props.text}</p>
                </div>
                <button className={classes.button}>
                    <div className={classes.container}>
                        <span className={classes.text}>Read more</span>
                        <img className = {classes.icon} src='src/assets/arrow_right.svg'></img>
                    </div>
                </button>
            </div>
        </div>
    </>
}

export default ArticleCard;
