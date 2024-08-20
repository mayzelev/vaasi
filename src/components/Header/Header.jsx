import style from './Header.module.css';

export default function Header() {
    return (
        <header className={style.header}>
            <div className={style.headerLeft}>
                <div className={style.logoContainer}>
                    <img className={style.sfere} src="../image/sfere.png" alt="VAASI Logo" />
                    <img className={style.logo} src="../image/logo.png" alt="VAASI Logo" />
                </div>
                <div className={style.navLinks}>
                    <a href="#">Юридичні особи</a>|<a href="#">Фізичні особи</a>
                </div>
            </div>
            <div className={style.headerRight}>
                <div className={style.clocks}>
                    <div className={style.clockeItemWithImg}>
                        <img className={style.watch} src="../image/watch.png" alt="watch" />
                        <div className={style.clockeItem}>
                            <span>07:21</span>
                            <span>Київ</span>
                        </div>
                    </div>
                    <div className={style.clockeItemWithImg}>
                        <img className={style.watch} src="../image/watch.png" alt="watch" />
                        <div className={style.clockeItem}>
                            <span>07:21</span>
                            <span>Токіо</span>
                        </div>
                    </div>
                    <div className={style.clockeItemWithImg}>
                        <img className={style.watch} src="../image/watch.png" alt="watch" />
                        <div className={style.clockeItem}>
                            <span>07:21</span>
                            <span>Сідней</span>
                        </div>
                    </div>
                    <div className={style.clockeItemWithImg}>
                        <img className={style.watch} src="../image/watch.png" alt="watch" />
                        <div className={style.clockeItem}>
                            <span>07:21</span>
                            <span>Нью-Йорк</span>
                        </div>
                    </div>
                    <div className={style.clockeItemWithImg}>
                        <img className={style.watch} src="../image/watch.png" alt="watch" />
                        <div className={style.clockeItem}>
                            <span>07:21</span>
                            <span>Лондон</span>
                        </div>
                    </div>
                </div>
                <div className={style.authButtons}>
            <a href="#" className={style.register}>
                        Реєстрація
                    </a>
                    <div className={style.separator}></div>
                    <a href="#" className="login">
                        Увійти
                    </a>
                </div>
                <div className="language-select">
                    <span className="arrow">▼</span>
                    <span>UKR</span>
                </div>
            </div>
        </header>
    );
}
