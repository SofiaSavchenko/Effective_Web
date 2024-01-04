import classes from './TransparentButton.module.scss'


const TransparentButton = (props: { text: string, icon?: string }) => {
    return <>
        <button className={classes.button}>
            <div className={classes.container}>
                <span className={classes.text}>{props.text}</span>
                {
                    props.icon
                        ? <img src={props.icon} className={classes.icon}></img>
                        : null
                }
            </div>
        </button>
    </>
}

export default TransparentButton;