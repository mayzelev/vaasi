import style from './AboutUsAttentionSection.module.css';

export default function AboutUsAttentionSection({ data }) {
    const { header, description1, description2, description3, description4, description5, baner } = data;

    return (
        <div className="container">
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.header}>{header}</div>
                    <div className={style.line}>
                        <div className={style.thin} />
                        <div className={style.thick} />
                        <div className={style.thin} />
                    </div>
                    <div className={style.descriptionContainer}>
                        <div className={style.description}>
                            {description1} <strong>{description2}</strong> {description3}
                        </div>
                        <div className={style.description}>
                            <strong>{description4}</strong>
                        </div>
                        <div className={style.description}>{description5}</div>
                    </div>
                    <div className={style.banerContainer}>
                        <div className={style.baner}>
                            <div className={style.banerHeaderContainer}>
                                <div className={style.banerHeader1}>{baner.header1}</div>
                                <div className={style.banerHeader2}>{baner.header2}</div>
                            </div>
                            <div className={style.banerdDscription}>{baner.description}</div>
                            <img className={style.banerdImg} src={baner.img.src} alt={baner.img.alt} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
