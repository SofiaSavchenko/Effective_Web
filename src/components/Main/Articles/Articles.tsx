import ArticleCard from '../ArticleCard/ArticleCard';
import TransparentButton from '../TransparentButton/TransparentButton';
import Divider from '../Divider/Divider';
import classes from './Articles.module.scss'


const Articles = () => {

    const elements = [
        {image: 'src/assets/article_1.png', title: 'Disease detection, check up in the laboratory', text: 'In this case, the role of the health laboratory is very important to do a disease detection...'},
        {image: 'src/assets/article_2.png', title: 'Herbal medicines that are safe for consumption', text: 'Herbal medicine is very widely used at this time because of its very good for your health...'},
        {image: 'src/assets/article_3.png', title: 'Natural care for healthy facial skin', text: 'A healthy lifestyle should start from now and also for your skin health. There are some...'}
    ]

    return <>
        <div className={classes.container}>
            <span className={classes.title}>Check out our latest article</span>
            <div className={classes.divider}>
                <Divider/>
            </div>
            <div className={classes.elements}>
                {
                    elements.map((item) => <ArticleCard image={item.image} title={item.title} text={item.text}/>)
                }
            </div>
            <div className={classes.button}>
                <TransparentButton text='View all'/>
            </div>
            <img className={classes.points} src='src/assets/points.svg'></img>
            <img className={classes.drop} src='src/assets/drop_back.svg'></img>
        </div>
    </>
}

export default Articles;