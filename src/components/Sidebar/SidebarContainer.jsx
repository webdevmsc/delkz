import React from 'react'
import {connect} from "react-redux";
import Sidebar from "./Sidebar";

const SidebarContainer = React.memo((props) => {
    return (
        <Sidebar { ...props } />
    )
})

const mapStateToProps = (state) => {
    return {

    };
}


export default connect(mapStateToProps, {  })(SidebarContainer);
