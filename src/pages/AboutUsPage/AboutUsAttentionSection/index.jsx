import DOMPurify from 'dompurify';
import LineTitle from '../../../components/LineTitle';
import style from './AboutUsAttentionSection.module.css';

export default function AboutUsAttentionSection({ data }) {
    const { header, description, banner } = data;

    return (
        <section className="container">
            <div className={style.content}>
                <div className={style.header}>{header}</div>
                <LineTitle />
                <div className={style.descriptionContainer}>
                    <div
                        className={style.description}
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(description)
                        }}
                    ></div>
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
        </section>
    );
}
