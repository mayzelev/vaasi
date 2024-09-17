import AccordionSection from '../../components/Accordion/index.jsx';
import { getAssets, getAssetsCompany } from '../../api/apiAssets.js';
import { useEffect, useState } from 'react';
import { USER_TYPE } from '../../shared/constants.js';
import { PERSON_TYPE, USER_ID } from '../../store/useAuthStore.js';
import { mockDataBasicAssets } from './mockData.js';
import style from './BasicAssets.module.css';

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
        <section className={style.container}>
            <h1 className="titleWithBorder">{title}</h1>
            <p className="description">{description}</p>
            {!isAssetsEmpty && <AccordionSection data={assets} />}
        </section>
    );
}
