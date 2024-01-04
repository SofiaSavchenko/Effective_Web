import TransparentButton from '../TransparentButton/TransparentButton';
import Divider from '../Divider/Divider';
import classes from './Provider.module.scss'


const Provider = () => {
    return <>
        <section className={classes.wrap}>
            <img className={classes.points} src='src/assets/points.svg'></img>
            <div className={classes.container}>
                <img src='src/assets/main_picture_2.png'/>
                <div className={classes.description}>
                    <div className={classes.textBlock}>
                        <h1 className={classes.title}>Leading healthcare providers</h1>
                        <Divider/>
                        <span className={classes.text}>We provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver</span>
                    </div>
                    <TransparentButton text='Learn more'/>
                </div>
            </div>
        </section>
    </>
}

export default Provider;