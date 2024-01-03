import ServiceCardList from '../ServiceCardList/ServiceCardList';
import TransparentButton from '../TransparentButton/TransparentButton';
import classes from './Service.module.scss'
import Divider from '../Divider/Divider';


const ServicesBlock = () => {

    return <>
        <section className={classes.container}>
            <div className={classes.textContainer}>
                <h1 className={classes.title}>Our services</h1>
                <div className={classes.divider}>
                    <Divider/>
                </div>
                <p className={classes.text}>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
            </div>
            <div className={classes.service}>
                <ServiceCardList/>
            </div>
            <div className={classes.button}>
                <TransparentButton text='Learn more'/>
            </div>

        </section>
    </>
}

export default ServicesBlock;
