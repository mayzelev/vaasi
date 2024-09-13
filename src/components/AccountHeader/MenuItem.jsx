import { List, ListItemButton } from '@mui/material'; // Make sure to import these from the appropriate library
import { Link } from 'react-router-dom'; // Make sure to import Link from 'react-router-dom'
import style from './Header.module.css'; // Import your styles
import { menuItemsData } from './mockdata'; // Adjust the import path as necessary

const MenuItems = () => (
    <List className={style.menuList}>
        {menuItemsData.map((item, index) => (
            <ListItemButton key={index}>
                <Link to={item.to}>
                    <img src={item.src} alt={item.text} /> {item.text}
                </Link>
            </ListItemButton>
        ))}
    </List>
);

export default MenuItems;
