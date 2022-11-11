import {Drawer, Link, ListItem, ListItemText, makeStyles, MenuItem, Typography} from "@material-ui/core";
import {NavLink} from "react-router-dom";

const drawerWidth = 280

const useStyles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
    },
    drawerPaper: {
        width: drawerWidth,
        padding: theme.spacing(3)
    },
    menuItem: {
        padding: theme.spacing(2),
        fontSize: '16px',
        transitionProperty: 'all',
        transitionDuration: '0.3s',
        borderRadius: '5px',
        color: 'black',
        '&:hover': {
            backgroundColor: 'rgb(0, 0, 0, 0.1)',
            marginLeft: '10px',
        },
        margin: '5px 0',

    },
    logo: {
        height: '120px',
        width: '100%',
        margin: '10px 0 20px 0'
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
    }
}))

const links = [
    {
        to: '/',
        label: 'Главная',
    },
    {
        to: '/',
        label: 'Финансы'
    },
    {
        to: '/',
        label: 'Транзакции'
    },
    {
        to: '/',
        label: 'Манифесты'
    },
    {
        to: '/',
        label: 'Прием посылок'
    },
    {
        to: '/',
        label: 'Настройки'
    },
    {
        to: '/',
        label: 'Манифесты'
    },
    {
        to: '/',
        label: 'Пользователи'
    },
    {
        to: '/',
        label: 'Получатели'
    },
    {
        to: '/manage',
        label: 'Посылки'
    },
    {
        to: '/',
        label: 'На доставке'
    },
    {
        to: '/',
        label: 'Кэшбэк'
    },
    {
        to: '/',
        label: 'Помощь при покупке'
    },
]

const Sidebar = () => {
    const styles = useStyles();
    return (
        <Drawer classes={{
            paper: styles.drawerPaper,
        }} className={styles.drawer} variant={'permanent'} open={true}>
            {links.map(x =>
                <NavLink onClick={ () => { if (x.label === 'Список инсайдеров MAR') alert('В разработке') }} className={styles.link} to={x.to}>
                    <ListItem className={styles.menuItem} button key={x.label}>
                        {x.label}
                    </ListItem>
                </NavLink>
            )}
        </Drawer>
    )
}

export default Sidebar;
