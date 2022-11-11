import React from 'react'
import {connect} from "react-redux";
import Content from "./Content";

const ContentContainer = React.memo((props) => {
    return (
        <Content { ...props } />
    )
})

const mapStateToProps = (state) => {
    return {

    };
}


export default connect(mapStateToProps, {  })(ContentContainer);
