import { Link } from 'react-router-dom';

import style from './MainSection.module.css';
import VButton from '../VButton';
import LineTitle from '../LineTitle';

export default function MainSection() {
    return (
        <div className="container">
            <div className={style.container}>
                <div className={style.money} />
                <div className={style.globus} />
                <div className={style.mainSectionContainer}>
                    <h1 className={style.headerTitle}>vaasi</h1>
                    <h2 className={style.subTitle}>international group</h2>
                    <LineTitle thinWidth={230} thickWidth={39} />
                    <p className={style.info}>
                        Наша компанія надає високоякісні послуги конвертації грошей, спеціально розроблені для <br /> корпоративних
                        клієнтів. З нами ви отримаєте ефективний та надійний інструмент <br /> для оптимізації обміну валют та максимізації
                        вашого фінансового портфеля.
                    </p>
                    <Link to="/about-us" className={style.aboutUs}>
                        <VButton
                            label="Про нас"
                            buttonStyles={{
                                height: '35px',
                                width: '160px'
                            }}
                        />
                    </Link>
                    <div className={style.toogle}></div>
                </div>
            </div>
        </div>
    );
}
