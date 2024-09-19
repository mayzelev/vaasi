import { getBalanceCode, updateBalanceCode } from '../../api/apiBalanceCode.js';
import { TextField } from '@mui/material';
import { useState } from 'react';
import style from './BalanceCode.module.css';
import { mockDataBalanceCode } from './mockData.js';
import VButton from '../../components/VButton/index.jsx';
import TooltipComponent from '../../components/ToolTip/index.jsx';
import { tooltipStyles } from './constants.js';

export default function BalanceCodePage() {
    const [balance, setBalance] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const { title, description } = mockDataBalanceCode;

    const handleClick = async () => {
        try {
            const balanceCode = await getBalanceCode();
            const selectedBalance = balanceCode.find((item) => item.name === inputValue);

            if (selectedBalance) {
                setBalance(selectedBalance);
                await updateBalanceCode(selectedBalance.id, { ...selectedBalance, active: false });
            } else {
                console.error('Balance code not found');
            }
        } catch (error) {
            console.error('Error updating balance code:', error);
        }
    };

    return (
        <section className={style.balanceCode}>
            <div className={style.container}>
                <div className={style.tooltipWrapper}>
                    <h1 className="titleWithBorder">{title}</h1>
                    <TooltipComponent
                        title="Баланс кода ВААСИ - це баланс, який відображається після перевірки вашого коду. Отримати код ви можете після стирання захисного покриття на вашій скретч картці. Але будьте уважні, стирати покриття можна тільки після оплати заявки згідно з надісланим вам рахунку."
                        tooltipStyles={tooltipStyles}
                    />
                </div>
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
                                    {(balance.total / 100).toFixed(2)} {balance.currency.currency_name}
                                </strong>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
