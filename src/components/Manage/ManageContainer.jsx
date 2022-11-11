import {connect} from "react-redux";
import React from 'react';
import Manage from "./Manage";
import {addPackage, deletePackage, getPackages} from "../../redux/packages-reducer";

const ManageContainer = React.memo((props) => {
    return (
        <Manage { ...props } />
    )
})

const mapStateToProps = (state) => {
    return {
        packages: state.packages.packages
    };
}


export default connect(mapStateToProps, { getPackages, addPackage, deletePackage })(ManageContainer);
