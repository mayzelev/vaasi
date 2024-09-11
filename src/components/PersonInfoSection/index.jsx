import style from './PersonInfoSection.module.css';

export default function PersonInfoSection({ data, backgroundImage }) {
    const { header, description, title } = data;

    return (
        <div className="container">
            <div className={style.containerBcg} style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className={style.header}>{header}</div>
                <div className={style.line}>
                    <div className={style.thin} />
                    <div className={style.thick} />
                    <div className={style.thin} />
                </div>
                <div className={style.description}>{description}</div>
                <div className={style.title}>{title}</div>
                <div className={style.iconsContainer}>
                    {data.image.map((img) => (
                        <div key={img.id} className={style.iconItem}>
                            <img src={img.link} alt={img.text} className={style.iconImage} />
                            <p className={style.iconDescription}>{img.description}</p>
                        </div>
                    ))}
                </div>
                <div className={style.arrowLeft}></div>
                <div className={style.arrowCenter}></div>
                <div className={style.arrowRight}></div>
            </div>
        </div>
    );
}
