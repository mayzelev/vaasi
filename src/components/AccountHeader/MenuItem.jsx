import { List, ListItemButton } from '@mui/material';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import { menuItemsData } from './mockdata';
import { PERSON_TYPE } from '../../store/useAuthStore.js';
import { USER_TYPE } from '../../shared/constants.js';

export default function AccountHeader() {
    const personType = localStorage.getItem(PERSON_TYPE);
    const filteredMenuItems =
        personType === USER_TYPE.COMPANY ? menuItemsData.filter((item) => item.to !== '/code-balance') : menuItemsData;
    return (
        <List className={style.menuList}>
            {filteredMenuItems.map((item, index) => (
                <ListItemButton key={index}>
                    <Link to={item.to}>
                        <img src={item.src} alt={item.text} /> {item.text}
                    </Link>
                </ListItemButton>
            ))}
        </List>
    );
}
