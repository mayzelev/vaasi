import AccordionSection from '../../components/Accordion/index.jsx';
import { getAssets, getAssetsCompany } from '../../api/apiAssets.js';
import { useEffect, useState } from 'react';
import { PERSON_TYPE, USER_ID, USER_TYPE } from '../../shared/constants.js';
import { mockDataBasicAssets } from './mockData.js';
import style from './BasicAssets.module.css';
import bgImage from '../../assets/img/backCalculatorSmall.png';

export default function BasicAssetsPage() {
    const [assets, setAssets] = useState(null);
    const userId = localStorage.getItem(USER_ID);
    const personType = localStorage.getItem(PERSON_TYPE);
    const { title, description } = mockDataBasicAssets;
    const isAssetsEmpty = !assets || assets.length === 0;

    useEffect(() => {
        const fetchAssets = async () => {
            const fetchFunction = personType === USER_TYPE.COMPANY ? getAssetsCompany : getAssets;
            try {
                const data = await fetchFunction(userId);
                setAssets(data);
            } catch (error) {
                console.error(`Error fetching ${personType} info:`, error);
            }
        };
        fetchAssets();
    }, [personType, userId]);

    return (
        <section className={`container ${style.basicAssets}`}>
            <div>
                <div className={style.container}>
                    <h1 className="titleWithBorder">{title}</h1>
                    <p className={`description ${style.description}`}>{description}</p>
                    {!isAssetsEmpty && <AccordionSection data={assets} />}
                </div>
                <img src={bgImage} className={style.bgImg} alt="money" />
            </div>
        </section>
    );
}
