import style from './PersonMainSection.module.css';
import VButton from '../VButton';
import useAuthStore from '../../store/useAuthStore';

export default function PersonMainSection({ data, imgMain, tabIndex, showButton = true }) {
    const { openRegistration } = useAuthStore();
    const { girlImgSrc, mainTitle, subTitle, subDescription1, subDescription2, buttonLabel, subDescription3 } = data;

    const handleButtonClick = () => {
        openRegistration({ initialTab: tabIndex });
    };

    return (
        <section className="container">
            <div className={style.container}>
                <img className={style.imgMoney} src={imgMain} alt="money" />
                {girlImgSrc && <img className={style.girlImg} src={girlImgSrc} alt="girl" />}

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
                                    {subDescription1 && (
                                        <p className={style.subDescription1}>
                                            {subDescription1} <strong>{subDescription2}</strong>
                                        </p>
                                    )}
                                    <p className={style.subDescription3}>{subDescription3}</p>
                                </div>

                                {showButton && (
                                    <VButton
                                        label={buttonLabel}
                                        onClick={handleButtonClick}
                                        buttonStyles={{ width: 'auto', padding: '8px 25px' }}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
