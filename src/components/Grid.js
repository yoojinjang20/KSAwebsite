import React from 'react'
import CustomBtn from './CustomBtn'
import {Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const styles = makeStyles({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 10rem 0 10rem"
    },
    item: {
        paddingTop: "1rem"
    }
})


function Grid(props) {
    const {titleBtn, list} = props;
    const classes = styles();
    return (
        <div className={classes.wrapper}>
            <div className = {classes.item}>
                <CustomBtn txt={titleBtn}/>
            </div>
            <Typography className={classes.item} variant="h8">{list}</Typography>
        </div>
        
    )
}

export default Grid
