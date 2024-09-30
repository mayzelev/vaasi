import bgImage from '../../assets/img/backCalculatorSmall.png';
import { mockDataDocuments } from './mockData.js';
import style from './Documents.module.css';
import { useEffect, useState } from 'react';
import { PERSON_TYPE, USER_ID, USER_TYPE } from '../../shared/constants.js';
import { getFiles, getFilesCompany } from '../../api/apiFiles.js';

import downloadImg from '../../assets/icons/download.svg';
import { downloadFileFn } from '../../shared/utils.js';

export default function DocumentsPage() {
    const [files, setFiles] = useState(null);
    const userId = localStorage.getItem(USER_ID);
    const personType = localStorage.getItem(PERSON_TYPE);
    const { title } = mockDataDocuments;

    const handleClick = async (id, filename) => {
        await downloadFileFn(id, personType, filename);
    };

    useEffect(() => {
        const fetchFiles = async () => {
            const fetchFunction = personType === USER_TYPE.COMPANY ? getFilesCompany : getFiles;
            try {
                const data = await fetchFunction(userId);
                setFiles(data);
            } catch (error) {
                console.error(`Error fetching ${personType} info:`, error);
            }
        };
        fetchFiles();
    }, [personType, userId]);

    return (
        <section className={`container ${style.documents}`}>
            <div>
                <div className={style.container}>
                    <h1 className="titleWithBorder">{title}</h1>
                    <div className={style.documentsWrapper}>
                        {files &&
                            files.length > 0 &&
                            files.map((item) => (
                                <div className={style.total} key={item.filename}>
                                    {item.filename}
                                    <button onClick={() => handleClick(item.id, item.filename)}>
                                        <img src={downloadImg} alt="download" className={style.iconDownload} />
                                    </button>
                                </div>
                            ))}
                    </div>
                </div>

                <img src={bgImage} className={style.bgImg} alt="money" />
            </div>
        </section>
    );
}
