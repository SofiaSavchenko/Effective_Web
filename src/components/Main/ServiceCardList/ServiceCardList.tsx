import ServiceCard from '../ServiceCard/ServiceCard'
import classes from './ServiceCardList.module.scss'


const ServiceCardList = () => {
    const elements = [
        { image: 'src/assets/picture_1.svg', title: 'Search doctor', text: 'Choose your doctor from thousands of specialist, general, and trusted hospitals' },
        { image: 'src/assets/picture_2.svg', title: 'Online pharmacy', text: 'Buy  your medicines with our mobile application with a simple delivery system' },
        { image: 'src/assets/picture_3.svg', title: 'Consultation', text: 'Free consultation with our trusted doctors and get the best recomendations' },
        { image: 'src/assets/picture_4.svg', title: 'Details info', text: 'Free consultation with our trusted doctors and get the best recomendations' },
        { image: 'src/assets/picture_5.svg', title: 'Emergency care', text: 'You can get 24/7 urgent care for yourself or your children and your lovely family' },
        { image: 'src/assets/picture_6.svg', title: 'Tracking', text: 'Track and save your medical history and health data ' }
    ]

    return <>
        <div className={classes.container}>
            <img className={classes.points} src='src/assets/points.svg' ></img>
            <img className={classes.drop} src='src/assets/drop_back.svg' ></img>
            <div className={classes.elements}>
                {
                    elements.map(item =>
                        <ServiceCard image={item.image} title={item.title} text={item.text} />)
                }
            </div>
        </div>
    </>
}

export default ServiceCardList;