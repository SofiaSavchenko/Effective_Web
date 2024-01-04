import FilledButton from '../FilledButton/FilledButton';
import classes from './Virtual.module.scss'


const Virtual = () => {
    return <>
        <section className={classes.wrap}>
            <img className={classes.points} src='src/assets/points.svg'></img>
            <div className={classes.container}>
                <div className={classes.description}>
                    <div className={classes.textBlock}>
                        <h1 className={classes.title}>Virtual healthcare for you</h1>
                        <span className={classes.text}>Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone</span>
                    </div>
                    <FilledButton text='Consult today'/>
                </div>
                <img src='src/assets/main_picture_1.png'/>
            </div>
        </section>
    </>
}

export default Virtual;