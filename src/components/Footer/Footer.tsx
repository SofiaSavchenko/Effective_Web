import classes from './Footer.module.scss'

const Footer = () => {
    return <>
        <div className={classes.wrap}>
            <div className={classes.description}>
                <div className={classes.first}>
                    <div className={classes.logo}>
                        <div className={classes.circleWrap}>
                            <span className={classes.logoTypography}>T</span>
                        </div>
                        <span className={classes.logoText}>HealthCare</span>
                    </div>
                    <p className={classes.textBlock}>HealthCare provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                </div>
                <span className={classes.second}>©HealthCare PTY LTD 2023. All rights reserved</span>
            </div>
            <div className={classes.block}>
                <span className={classes.title}>Company</span>
                <span className={classes.element}>About</span>
                <span className={classes.element}>Testimonials</span>
                <span className={classes.element}>Find a doctor</span>
                <span className={classes.element}>Apps</span>
            </div>
            <div className={classes.block}>
                <span className={classes.title}>Region</span>
                <span className={classes.element}>Indonesia</span>
                <span className={classes.element}>Singapore</span>
                <span className={classes.element}>Hongkong</span>
                <span className={classes.element}>Canada</span>
            </div>
            <div className={classes.block}>
                <span className={classes.title}>Help</span>
                <span className={classes.element}>Help center</span>
                <span className={classes.element}>Contact support</span>
                <span className={classes.element}>Instructions</span>
                <span className={classes.element}>How it works</span>
            </div>
            <img className={classes.points} src='src/assets/points2.svg'></img>
        </div>
    </>
}

export default Footer;
