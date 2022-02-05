import React from 'react'
import {Button} from'@material-ui/core'
import {withStyles} from'@material-ui/core/styles'

const StyledButton = withStyles({
    root:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "25px",
        padding: "0 25px",
        boxSizing: "border-box",
        borderRadius: 0,
        background: "#4775ff",
        color: "#fff",
        transform: "none",
        boxShadow: "3px 3px 0 0 #2e62ff",
        transition: "background .3s,border-color .3s,color .3s",
        "&:hover": {
            backgroundColor: "#3867f5"

        },

    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);



function CustomBtn(props) {
    return (
        <StyledButton variant="contained">{props.txt}</StyledButton>
    )
}

export default CustomBtn
