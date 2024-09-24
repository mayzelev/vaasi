import { TextField, InputAdornment } from '@mui/material';
import MaskedInput from 'react-text-mask';
import phoneIcon from '../../assets/icons/phone.svg';
import style from './PhoneInput.module.css';
import { useCallback } from 'react';

export const PhoneInput = ({ formik, authError, setAuthError, country }) => {
    const getPhoneMask = (country) => {
        switch (country) {
            case 'UA':
                return ['+', '3', '8', ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/];
            case 'EN':
                return ['+', '1', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
            case 'DE':
                return ['+', '4', '9', ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
            default:
                return ['+', '3', '8', ' ', '0', /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/];
        }
    };

    const handleChange = useCallback(
        (e) => {
            formik.handleChange(e);
            if (authError) {
                setAuthError(null);
            }
        },
        [formik, authError, setAuthError]
    );

    return (
        <MaskedInput
            mask={getPhoneMask(country)}
            value={formik.values.phone}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            render={(ref, props) => (
                <TextField
                    {...props}
                    inputRef={ref}
                    autoComplete="true"
                    fullWidth
                    placeholder="+38 0XX XXX XX XX"
                    variant="outlined"
                    margin="dense"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start" sx={{ transform: 'translateX(-13px)' }}>
                                <div className={style.iconsContainer}>
                                    <img className={style.icons} src={phoneIcon} alt="phone" />
                                </div>
                            </InputAdornment>
                        ),
                        sx: {
                            backgroundColor: 'var(--bg-color-form)',
                            boxShadow: 'inset 0px 1px 3px var(--text-shadow)',
                            borderRadius: '5px',
                            height: '40px',
                            '& .MuiInputBase-input': {
                                height: '40px',
                                boxSizing: 'border-box'
                            }
                        }
                    }}
                    id="phone"
                    name="phone"
                    error={!!authError?.phone || (formik.touched.phone && Boolean(formik.errors.phone))}
                    helperText={authError?.phone || (formik.touched.phone && formik.errors.phone)}
                />
            )}
        />
    );
};
