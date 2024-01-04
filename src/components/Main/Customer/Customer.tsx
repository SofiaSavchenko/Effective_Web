import DividerLight from '../DividerLight/DividerLight';
import classes from './Customer.module.scss'


const Customer = () => {
    return <>
        <div className={classes.container}>
            <div className={classes.wrap}>
                <span className={classes.title}>What our customer are saying</span>
                <div className={classes.divider}>
                    <DividerLight/>
                </div>
                <div className={classes.description}>
                    <div className={classes.customer}>
                        <img className={classes.customerImage} src='src/assets/customer.png'></img>
                        <div className={classes.customerDescription}>
                            <span className={classes.title}>Edward Newgate</span>
                            <span className={classes.subtitle}>Founder Circle</span>
                        </div>
                    </div>
                    <p className={classes.text}>“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”</p>
                </div>
                <img src='src/assets/points2.svg' className={classes.points1}></img>
                <img src='src/assets/points.svg' className={classes.points2}></img>
            </div>

            <div className={classes.slider}>
                <button className={classes.button}>
                    <img src='src/assets/arrow_left.svg'></img>
                </button>
                <div>
                    <img src='src/assets/slider.svg'></img>
                </div>
                <button className={classes.button}>
                    <img src='src/assets/arrow_right.svg'></img>
                </button>
            </div>
        </div>
    </>
}

export default Customer;