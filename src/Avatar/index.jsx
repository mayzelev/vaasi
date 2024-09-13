import { useState } from 'react';
import imgUploader from '../assets/icons/uploader.svg';
import style from './Avatar.module.css';

const AvatarUpload = () => {
    const [, setFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setPreview(URL.createObjectURL(selectedFile));
        }
    };

    // TODO: ADD Image Api
    // const handleUpload = () => {
    //     // api
    // };

    return (
        <div className="avatar-upload">
            <div className="avatar-preview">
                {preview ? (
                    <label htmlFor="photo-upload" className="custom-file-upload fas">
                        <div className={style.imgWrap}>
                            <img htmlFor="photo-upload" src={preview} alt={'avatar'} />
                        </div>
                        <input id="photo-upload" type="file" onChange={handleFileChange} className={style.avatarInput} />
                    </label>
                ) : (
                    <label htmlFor="photo-upload" className="custom-file-upload fas">
                        <div className={style.imgDefault}>
                            <img htmlFor="photo-upload" src={imgUploader} alt={'avatar'} />
                        </div>
                        <input id="photo-upload" type="file" onChange={handleFileChange} className={style.avatarInput} />
                    </label>
                )}
            </div>
        </div>
    );
};

export default AvatarUpload;
