import classes from './TopNavBar.module.scss'


const TopNavBar = () => {
    return <>
        <nav className={classes.container}>
            <span className={`${classes.elem} ${classes.selected}`}>Home</span>
            <span className={classes.elem}>Find a doctor</span>
            <span className={classes.elem}>Apps</span>
            <span className={classes.elem}>Testimonials</span>
            <span className={classes.elem}>About us</span>
        </nav>
    </>
}

export default TopNavBar;
