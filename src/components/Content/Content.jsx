import {Route, Routes} from "react-router-dom";
import {makeStyles} from "@material-ui/core";
import ManageContainer from "../Manage/ManageContainer";

const useStyles = makeStyles(theme => ({
    main: {
        marginLeft: '350px',
        padding: theme.spacing(4)
    },
    avatar: {
        position: 'absolute',
        right: '45px',
        top: '25px',
        width: '60px',
        height: '60px',
        cursor: 'pointer'
    },
}))

const Content = () => {
    const styles = useStyles();
    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <Routes>
                    <Route path="/manage" element={<ManageContainer/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default Content;
