import {
    AppBar,
    Button,
    Container,
    createTheme, Dialog, DialogActions, DialogContent, DialogTitle,
    Divider, IconButton,
    makeStyles, MenuItem,
    Paper, Select, TextField,
    ThemeProvider,
    Typography
} from "@material-ui/core";
import {DataGrid} from "@mui/x-data-grid";
import {useState} from "react";
import {useFormik} from "formik";
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: '20px'
    },
    manage: {
        display: 'flex',
        flexDirection: 'column'
    },
    manageButtons: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '20px',
        '& > button': {
            marginLeft: '15px'
        }
    },
    country: {
        display: 'flex',
        marginRight: '40px'
    },
    date: {
        display: 'flex',
        alignItems: 'center'
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px'
    },
    select: {
        marginLeft: '20px'
    },
    add: {
        margin: '20px 0',
        display: 'flex',
        alignItems: 'center',
        '& > button': {
            marginRight: '15px'
        }
    },
    form: {
        display: 'flex',
        flexDirection: 'column'
    },
    field: {
        marginBottom: '10px'
    },
    dialogHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        '& > button': {
            marginRight: '15px'
        },
        alignItems: 'center'
    }
}))



const Manage = ({ packages, addPackage, deletePackage }) => {

    const columns = [
        { field: 'track', headerName: 'Трек-номер', width: 180 },
        { field: 'fio', headerName: 'ФИО', width: 250 },
        { field: 'weight', headerName: 'Вес', width: 150 },
        { field: 'inside', headerName: 'Содержимое', width: 200 },
        { field: 'price', headerName: 'Стоимость', width: 200 },
        { field: 'city', headerName: 'Город', width: 200 },
        { field: 'date', headerName: 'Дата получения', width: 230 },
        { field: 'actions', headerName: 'Действия', width: 230, renderCell: (params) => <div><Button onClick={ () => deletePackage(params.row.id) }>Удалить</Button><Button>Подробнее</Button></div> }
    ];

    const [createPackage, setCreatePackage] = useState(false)

    const handleOpenAddPackage = () => {
        setCreatePackage(true)
    }

    const handleCloseAddPackage = () => {
        setCreatePackage(false)
    }

    const styles = useStyles();
    return (
        <div className={styles.manage}>
            <div className={styles.manageButtons}>
                <Button variant={'contained'} color={'primary'}>Скачать лист приема</Button>
                <Button variant={'contained'} color={'primary'}>Сохранить изменения</Button>
                <Button>Какая-то черная кнопка</Button>
            </div>
            <Paper className={styles.paper} elevation={0}>
                <div className={styles.header}>
                    <div className={styles.country}>
                        <Typography>Страна приемки</Typography>
                        <Select className={styles.select} value={0}>
                            <MenuItem value={0}>США</MenuItem>
                            <MenuItem value={1}>Германия</MenuItem>
                        </Select>
                    </div>
                    <div className={styles.date}>
                        <Typography>Дата приема</Typography>
                        <Select className={styles.select} value={0}>
                            <MenuItem value={0}>11.11.2022</MenuItem>
                        </Select>
                    </div>
                </div>
                <Divider/>
                <div className={styles.add}>
                    <Button onClick={handleOpenAddPackage} variant={'outlined'}>Добавить посылку</Button>
                    <Button variant={'outlined'}>Добавить несколько</Button>
                </div>
                <DataGrid autoHeight columns={columns} rows={packages}/>
            </Paper>
            <AddPackage id={packages.length + 1} addPackage={addPackage} open={createPackage} handleClose={handleCloseAddPackage}/>
        </div>

    )
}

const AddPackage = ({open, handleClose, addPackage, id}) => {

    const styles = useStyles();
    const form = useFormik({
        initialValues: {
            track: '',
            fio: '',
            weight: '',
            inside: '',
            price: '',
            city: '',
            date: '',
        },
        onSubmit: (values) => {
            addPackage({...values, id: id})
            form.resetForm();
        }
    });

    const getLabel = (key) => {
        switch (key) {
            case 'track':
                return 'Трек-номер'
            case 'fio':
                return 'ФИО'
            case 'weight':
                return 'Вес'
            case 'inside':
                return 'Содержимое'
            case 'price':
                return 'Стоимость'
            case 'city':
                return 'Город'
            case 'date':
                return 'Дата'
        }
    }

    const handleConfirm = () => {
        form.handleSubmit();
        handleClose();
    }

    const handleCloseDialog = () => {
        handleClose();
        form.resetForm();
    }

    return (
        <Dialog maxWidth={'sm'} fullWidth open={open} onClose={handleCloseDialog}>
            <div className={styles.dialogHeader}>
                <DialogTitle>Новая посылка</DialogTitle>
                <IconButton onClick={handleCloseDialog}>
                    <ClearIcon/>
                </IconButton>
            </div>
            <DialogContent>
                <div className={styles.form}>
                    {
                        Object.keys(form.initialValues).map(x =>
                            <TextField className={styles.field} variant={'outlined'} fullWidth id={x} name={x} label={getLabel(x)} onChange={form.handleChange} value={form.values[x]}/>
                        )
                    }
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseDialog}>Отменить</Button>
                <Button onClick={handleConfirm} variant={'contained'} color={'secondary'}>Подтвердить</Button>
            </DialogActions>
        </Dialog>
    )
}


export default Manage;