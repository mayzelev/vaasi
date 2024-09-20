import LineTitle from '../LineTitle';
import style from './PersonAttentionSection.module.css';

export default function PersonAttentionSection({ data, imgAttention }) {
    const { header, description, banner } = data;

    return (
        <section className="container">
            <div className={style.container}>
                <div className={style.content}>
                    <img className={style.imgMoney} src={imgAttention} alt="money" />
                    <div className={style.header}>{header}</div>
                    <div className={style.description}>{description}</div>
                    <LineTitle />
                    <div className={style.banner}>
                        <div className={style.bannerHeader}>{banner.header}</div>
                        <div className={style.bannerdDscription}>{banner.description}</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
