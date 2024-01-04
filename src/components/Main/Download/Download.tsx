import TransparentButton from '../TransparentButton/TransparentButton';
import Divider from '../Divider/Divider';
import classes from './Download.module.scss'


const Download = () => {
    return <>
        <section className={classes.wrap}>
            <div className={classes.description}>
                <div className={classes.textBlock}>
                    <h1 className={classes.title}>Download our mobile apps</h1>
                    <Divider/>
                    <span className={classes.text}>Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely</span>
                </div>
                <TransparentButton text='Download' icon='src/assets/arrow_down.svg'/>
            </div>
            <img src='src/assets/main_picture_3.png'/>
        </section>
    </>
}

export default Download;