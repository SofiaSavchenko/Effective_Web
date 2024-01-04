import classes from './Header.module.scss'
import TopNavBar from './TopNavBar/TopNavBar';


const Header = () => {
    return <>
        <header className={classes.header}>
            <div className={classes.elements}>
                <div className={classes.logo}>
                    <div className={classes.circleWrap}>
                        <span className={classes.logoTypography}>T</span>
                    </div>
                    <span className={classes.logoText}>HealthCare</span>
                </div>
                <TopNavBar/>
            </div>
        </header>
    </>
}

export default Header;
