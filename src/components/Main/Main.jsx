import {AppBar, Container, createTheme, ThemeProvider, Typography} from "@material-ui/core";
import SidebarContainer from "../Sidebar/SidebarContainer";
import {HashRouter} from "react-router-dom";
import ContentContainer from "../Content/ContentContainer";

const theme = createTheme({

});

const Main = () => {
    return (
        <HashRouter>
            <ThemeProvider theme={theme}>
                <SidebarContainer/>
                <ContentContainer/>
            </ThemeProvider>
        </HashRouter>
    )
}



export default Main;