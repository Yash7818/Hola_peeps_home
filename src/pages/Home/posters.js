import React from 'react';
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
        maxWidth:"80%"
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
    const First = "https://res.cloudinary.com/marcos-yash/image/upload/v1621280385/Holapeeps/Artboard_1_copy_4add_pxyso7.png";
    const Second = "https://res.cloudinary.com/marcos-yash/image/upload/v1621280388/Holapeeps/Artboard_1_copy_2add_gqi6s0.png";
    const Third = "https://res.cloudinary.com/marcos-yash/image/upload/v1621280386/Holapeeps/Artboard_1_copy_3add_hek2by.png";
    const Fourth = "https://res.cloudinary.com/marcos-yash/image/upload/v1621280388/Holapeeps/Artboard_1_copyadd_vtib6q.png";
    const Fifth = "https://res.cloudinary.com/marcos-yash/image/upload/v1621280386/Holapeeps/Artboard_1_copy_5add_lzodgu.png";
    
    const classes = useStyles();

    return (
        <>
            <Carousel className={classes.root} vertical="true" 
                renderCenterLeftControls={({ previousSlide,currentSlide,slideCount,goToSlide}) => (
                    <ul style={{padding:"1em 3em"}}>
                        {[...Array(slideCount)].map((key,index)=><li className={index==currentSlide?classes.active:classes.simple} onClick={()=>goToSlide(index)}><div></div></li>)}
                    </ul>
                )}
                
            >
                <Grid container item justify="center" alignItems="center" style={{padding:"1em 0em"}}>
                    <img className={classes.image} src={First}></img>
                </Grid>
                <Grid container item justify="center" alignItems="center" style={{padding:"1em 0em"}}>
                    <img className={classes.image} src={Second}></img>
                </Grid>
                <Grid container item justify="center" alignItems="center" style={{padding:"1em 0em"}}>
                    <img className={classes.image} src={Third}></img>
                </Grid>
                <Grid container item justify="center" alignItems="center" style={{padding:"1em 0em"}}>
                    <img className={classes.image} src={Fourth}></img>
                </Grid>
                <Grid container item justify="center" alignItems="center" style={{padding:"1em 0em"}}>
                    <img className={classes.image} src={Fifth}></img>
                </Grid>
            </Carousel>
        </>
    );
}

export default Poster;