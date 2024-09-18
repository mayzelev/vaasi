import { getBalanceCode } from '../../api/apiBalanceCode.js';
import { TextField } from '@mui/material';
import { useState } from 'react';
import style from './BalanceCode.module.css';
import { mockDataBalanceCode } from './mockData.js';
import VButton from '../../components/VButton/index.jsx';

export default function BalanceCodePage() {
    const [balance, setBalance] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const { title, description } = mockDataBalanceCode;

    const handleClick = async () => {
        const balanceCode = await getBalanceCode();
        setBalance(balanceCode.find((item) => item.name === inputValue));
    };

    return (
        <section className={style.balanceCode}>
            <div className={style.container}>
                <h1 className="titleWithBorder">{title}</h1>
                <p className="description">{description}</p>
                <div>
                    <label>Введіть код балансу VASSI</label>
                    <TextField
                        autoComplete="true"
                        fullWidth
                        variant="outlined"
                        margin="dense"
                        onChange={(e) => setInputValue(e.target.value)}
                        InputProps={{
                            sx: {
                                backgroundColor: 'var(--bg-color-form)',
                                boxShadow: 'inset 0px 1px 3px var(--text-shadow)',
                                borderRadius: '5px',
                                height: '40px',
                                marginBottom: '10px',
                                maxWidth: '462px',
                                '& .MuiInputBase-input': {
                                    height: '40px',
                                    boxSizing: 'border-box'
                                }
                            }
                        }}
                        id="email"
                        name="email"
                    />
                    <VButton
                        label="Застосувати"
                        buttonStyles={{
                            maxWidth: '160px'
                        }}
                        onClick={handleClick}
                    />
                    {balance && (
                        <div className={style.total}>
                            <p>
                                <strong>{balance.name}</strong>
                            </p>
                            <p>
                                <strong>
                                    {balance.total} {balance.currency.currency_name}
                                </strong>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
