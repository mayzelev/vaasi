import LineTitle from '../../../components/LineTitle';
import style from './AboutUsAttentionSection.module.css';

export default function AboutUsAttentionSection({ data }) {
    const { header, description1, description2, description3, description4, description5, banner } = data;

    return (
        <div className="container">
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.header}>{header}</div>
                    <LineTitle />
                    <div className={style.descriptionContainer}>
                        <div className={style.description}>
                            {description1} <strong>{description2}</strong> {description3}
                        </div>
                        <div className={style.description}>
                            <strong>{description4}</strong>
                        </div>
                        <div className={style.description}>{description5}</div>
                    </div>
                    <div className={style.banner}>
                        <div className={style.bannerHeaderContainer}>
                            <div className={style.bannerHeader1}>{banner.header1}</div>
                            <div className={style.bannerHeader2}>{banner.header2}</div>
                        </div>
                        <div className={style.bannerdDscription}>{banner.description}</div>
                        <img className={style.bannerdImg} src={banner.img.src} alt={banner.img.alt} />
                    </div>
                </div>
            </div>
        </div>
    );
}
