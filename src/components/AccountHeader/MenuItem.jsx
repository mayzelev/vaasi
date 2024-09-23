import { List, ListItemButton } from '@mui/material';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import { menuItemsData } from './mockdata';
import { PERSON_TYPE, USER_TYPE } from '../../shared/constants.js';

export default function AccountHeader({ toggleDrawer }) {
    const personType = localStorage.getItem(PERSON_TYPE);
    const filteredMenuItems =
        personType === USER_TYPE.COMPANY ? menuItemsData.filter((item) => item.to !== '/code-balance') : menuItemsData;
    return (
        <List className={style.menuList} onClick={toggleDrawer(false)}>
            {filteredMenuItems.map((item) => (
                <ListItemButton key={item.to}>
                    <Link to={item.to}>
                        <img src={item.src} alt={item.text} /> {item.text}
                    </Link>
                </ListItemButton>
            ))}
        </List>
    );
}
