import { Link } from 'react-router-dom';
import style from './MainSection.module.css';
import VButton from '../../components/UI/VButton/VButton';

export default function MainSection() {
    return (
        <div className='container'>
            <div className={style.container}>
                <div className={style.money}></div>
                <div className={style.globus}></div>
                <div className={style.mainSectionContainer}>
                    <h1 className={style.headerTitle}>vaasi</h1>
                    <h2 className={style.subTitle}>international group</h2>
                    <div className={style.line}>
                        <div className={style.thin}></div>
                        <div className={style.thick}></div>
                        <div className={style.thin}></div>
                    </div>
                    <p className={style.info}>
                        Наша компанія надає високоякісні послуги конвертації грошей, спеціально розроблені для <br /> корпоративних клієнтів. З
                        нами ви отримаєте ефективний та надійний інструмент <br /> для оптимізації обміну валют та максимізації вашого фінансового
                        портфеля.
                    </p>
                    <Link to="/about-us" className={style.aboutUs}>
                        <VButton
                            label="Про нас"
                            buttonStyles={{
                                background: 'var(--gradient-button)',
                                textColor: '#fff',
                                fontSize: 16,
                                padding: '8px 8px',
                                borderRadius: '50px',
                                lineHeight: '19.2px',
                                borderColor: 'none',
                                hoverBackground: 'var(--button-color-hover)',
                                hoverBorderColor: 'transparent',
                                height: '35px',
                                width: '160px',
                                transition: 'background 0.3s ease'
                            }}
                        />
                    </Link>
                    <div className={style.toogle}></div>
                </div>
            </div>
        </div>
    );
}
