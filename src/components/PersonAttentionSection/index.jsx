import style from './PersonAttentionSection.module.css';

export default function PersonAttentionSection({ data, imgAttention }) {
    const { header, description, baner } = data;

    return (
        <div className="container">
            <div className={style.container}>
                <img className={style.imgMoney} src={imgAttention} alt="money" />
                <div className={style.content}>
                    <div className={style.header}>{header}</div>
                    <div className={style.description}>{description}</div>
                    <div className={style.line}>
                        <div className={style.thin} />
                        <div className={style.thick} />
                        <div className={style.thin} />
                    </div>
                    <div className={style.banerContainer}>
                        <div className={style.baner}>
                            <div className={style.banerHeader}>{baner.header}</div>
                            <div className={style.banerdDscription}>{baner.description}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
