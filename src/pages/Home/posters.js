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
    const First = "https://holapeeps1403.sgp1.cdn.digitaloceanspaces.com/homepage/homepage_pic1.webp";
    const Second = "https://holapeeps1403.sgp1.cdn.digitaloceanspaces.com/homepage/homepage_pic2.webp";
    const Third = "https://holapeeps1403.sgp1.cdn.digitaloceanspaces.com/homepage/homepage_pic3.webp";
    const Fourth = "https://holapeeps1403.sgp1.cdn.digitaloceanspaces.com/homepage/homepage_pic4.webp";
    const Fifth = "https://holapeeps1403.sgp1.cdn.digitaloceanspaces.com/homepage/homepage_pic5.webp";

    const Mfirst = "https://holapeeps1403.sgp1.cdn.digitaloceanspaces.com/homepage/homepage_m1.webp";
    const Msecond = "https://holapeeps1403.sgp1.cdn.digitaloceanspaces.com/homepage/homepage_m2.webp";
    const Mthird = "https://holapeeps1403.sgp1.cdn.digitaloceanspaces.com/homepage/homepage_m3.webp";
    const Mfourth = "https://holapeeps1403.sgp1.cdn.digitaloceanspaces.com/homepage/homepage_m4.webp";
    const Mfifth = "https://holapeeps1403.sgp1.cdn.digitaloceanspaces.com/homepage/homepage_m5.webp";

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
