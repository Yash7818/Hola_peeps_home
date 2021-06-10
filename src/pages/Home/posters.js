import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Carousel from 'nuka-carousel';
import {makeStyles} from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';



const useStyles = makeStyles((theme)=>({
    root:{
        flexGrow:1,
        padding:"4em 0em;"
    },
    appbar:{
        padding:"2em",
        background:"rgba(0,0,0,0)",
        color:"#fae10b"
    },
    title:{
        flexGrow:1,
        // fontFamily:'Roboto,sans-serif'
    },
    main:{
        flexGrow:1,
        alignSelf:"center",
    },
    maintext:{
        color:"#fae10b",
        fontWeight:"600",
    },
    image:{
        maxWidth:"80%",
        [theme.breakpoints.down("xs")]:{
            display:"none",
        },
    },
    simage:{
        display:"none",
        maxWidth:"90%",
        borderRadius:"1em",
        [theme.breakpoints.down("xs")]:{
            display:"inline",
        },

    },
    simple:{
        width:"20px",
        height:"20px",
        border:"2px solid #fff",
        borderRadius:"50%",
        listStyle:"none",
        margin:"1em 0em",
        cursor:"pointer"
    },
    active:{
        width:"20px",
        height:"20px",
        borderRadius:"50%",
        border:"2px solid #fff",
        background:"#fff",
        alignSelf:"center",
        listStyle:"none",
        margin:"1em 0em",
        cursor:"pointer"
    },

}));

const Poster = () =>{
    const First = "https://res.cloudinary.com/marcos-yash/image/upload/v1621280388/Holapeeps/Artboard_1_copyadd_vtib6q.png";
    const Second = "https://res.cloudinary.com/marcos-yash/image/upload/v1621280386/Holapeeps/Artboard_1_copy_5add_lzodgu.png";
    const Third = "https://res.cloudinary.com/marcos-yash/image/upload/v1621280388/Holapeeps/Artboard_1_copy_2add_gqi6s0.png";
    const Fourth = "https://res.cloudinary.com/marcos-yash/image/upload/v1621280386/Holapeeps/Artboard_1_copy_3add_hek2by.png";
    const Fifth = "https://res.cloudinary.com/marcos-yash/image/upload/v1621280385/Holapeeps/Artboard_1_copy_4add_pxyso7.png";

    const Mfirst = "https://res.cloudinary.com/marcos-yash/image/upload/v1621842553/Mobile/Artboard_1hp_1_ipifza.jpg";
    const Msecond = "https://res.cloudinary.com/marcos-yash/image/upload/v1621931989/Mobile/Artboard_1hp6_1_lzkuty.jpg";
    const Mthird = "https://res.cloudinary.com/marcos-yash/image/upload/v1621839677/Mobile/Artboard_1hp2_ues1fj.jpg";
    const Mfourth = "https://res.cloudinary.com/marcos-yash/image/upload/v1621839541/Mobile/Artboard_1hp5_1_yx1n9f.jpg";
    const Mfifth = "https://res.cloudinary.com/marcos-yash/image/upload/v1621840384/Mobile/Artboard_1hp3_uoaslc.jpg";

    const classes = useStyles();

    return (
        <>
            <Carousel className={classes.root} vertical="true"
                renderCenterLeftControls={({currentSlide,slideCount,goToSlide}) => (
                    <ul style={{padding:"1em 3em"}}>
                        {[...Array(slideCount)].map((key,index)=><li className={index==currentSlide?classes.active:classes.simple} onClick={()=>goToSlide(index)}><div></div></li>)}
                    </ul>
                )}

            >
                <Grid container item justify="center" alignItems="center" style={{padding:"1em 0em"}}>
                    <img className={classes.image} src={First}></img>
                    <img className={classes.simage} src={Mfirst}></img>
                </Grid>
                <Grid container item justify="center" alignItems="center" style={{padding:"1em 0em"}}>
                    <img className={classes.image} src={Second}></img>
                    <img className={classes.simage} src={Msecond}></img>
                </Grid>
                <Grid container item justify="center" alignItems="center" style={{padding:"1em 0em"}}>
                    <img className={classes.image} src={Third}></img>
                    <img className={classes.simage} src={Mthird}></img>
                </Grid>
                <Grid container item justify="center" alignItems="center" style={{padding:"1em 0em"}}>
                    <img className={classes.image} src={Fourth}></img>
                    <img className={classes.simage} src={Mfourth}></img>
                </Grid>
                <Grid container item justify="center" alignItems="center" style={{padding:"1em 0em"}}>
                    <img className={classes.image} src={Fifth}></img>
                    <img className={classes.simage} src={Mfifth}></img>
                </Grid>
            </Carousel>
        </>
    );
}

export default Poster;
