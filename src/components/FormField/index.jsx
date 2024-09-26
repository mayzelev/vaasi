import { TextField, InputAdornment } from '@mui/material';
import style from './FormField.module.css';

export default function FormField({ formik, id, placeholder, adornment, error, helperText, onChange, onBlur }) {
    return (
        <TextField
            autoComplete="true"
            fullWidth
            placeholder={placeholder}
            variant="outlined"
            margin="dense"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start" sx={{ transform: 'translateX(-13px)' }}>
                        <div className={style.iconsContainer}>
                            <img className={style.icons} src={adornment} alt={id} />
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
            id={id}
            name={id}
            value={formik.values[id]}
            onChange={onChange}
            onBlur={onBlur}
            error={error}
            helperText={helperText}
        />
    );
}
