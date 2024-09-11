import style from './PersonMainSection.module.css';
import VButton from '../VButton';

export default function PersonMainSection({ data, backgroundImage }) {
    const { girlImgSrc, mainTitle, subTitle, subDescription1, subDescription2, buttonLabel, onButtonClick, buttonStyles } = data;

    return (
        <div className="container">
            <div className={style.container} style={{ backgroundImage: `url(${backgroundImage})` }}>
                <img className={style.girlImg} src={girlImgSrc} alt="girl" />
                <div className={style.containerTop}>
                    <div className={style.card}>
                        <div className={style.containerForLine}>
                            <div className={style.lineContainer}>
                                <div className={style.verticalLine}></div>
                            </div>
                            <div>
                                <div className={style.cardHeader}>
                                    <div className={style.cardTitle}>
                                        <div className={style.cardTitleFirst}>{mainTitle}</div>
                                        <div className={style.cardTitleSecond}>{subTitle}</div>
                                    </div>
                                </div>
                                <div className={style.description}>
                                    <p className={style.subDescription1}>
                                        {subDescription1} <strong>{subDescription2}</strong>
                                    </p>
                                </div>
                                <VButton
                                    className={style.vButton}
                                    label={buttonLabel}
                                    onClick={onButtonClick}
                                    buttonStyles={buttonStyles}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
