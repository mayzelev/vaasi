import DOMPurify from 'dompurify';
import style from './RulesForUsing.module.css';
import img from '../../assets/img/backCalculatorSmall.png';

export default function RulesForUsing({ data }) {
    const { header, content } = data;

    return (
        <section className="container">
            <div className={style.wraper}>
                <div className={style.content}>
                    <h1 className={style.header}>{header}</h1>
                    {content.map((item) => (
                        <>
                            {item.header && (
                                <p
                                    className={style.headerItem}
                                    dangerouslySetInnerHTML={{
                                        __html: DOMPurify.sanitize(item.header)
                                    }}
                                ></p>
                            )}
                            <p
                                className={style.title}
                                key={item.id}
                                dangerouslySetInnerHTML={{
                                    __html: DOMPurify.sanitize(item.text)
                                }}
                            ></p>
                        </>
                    ))}
                </div>
                <img className={style.img} src={img} alt="calculator" />
            </div>
        </section>
    );
}
