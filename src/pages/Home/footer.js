import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from  '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Styles from './hola_peeps.module.css';

const useStyles = makeStyles((theme)=>({
    root:{
        background:"#fae10b",
        padding:"15em 5em 3em 0em",
        clipPath:"polygon(0 0, 100% 30%, 100% 100%, 0% 100%)",
        [theme.breakpoints.down("sm")]:{
            padding:"15em 0em 3em 0em",
        }
    },
    input:{
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            border:"1px solid #515151",
            color:"#010101"
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff"
          },
          "& .MuiInputLabel-outlined": {
            color: "#010101"
          },
          "&.MuiFormHelperText-root.Mui-error" :{
            color: "#010101",
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderRadius: `2em`,
            },
          },
          width:"60%",
          padding:"2em 0em",
          [theme.breakpoints.down("sm")]:{
              width:"80%"
          }
    },
    sendbut:{
        color:"#fae10b",
        height:"100%",
        borderRadius:"2em"
    },
    social:{
        fontSize:"2em",
        marginBottom:".5em",
        [theme.breakpoints.down("sm")]:{
            marginRight:".5em"
        }

    },
    copy:{
        fontSize:"1.5em",
        [theme.breakpoints.down("sm")]:{
            fontSize:"1.2em",
            padding:"1em"
        }
    }
}))

const Footer = () =>{
    const classes = useStyles();
    return (
        <>
            <Grid className={classes.root} container item justify="center">
                <Grid style={{textAlign:"center"}}>
                    <Typography style={{fontFamily:"Montserrat, sans-serif",fontWeight:"600",fontSize:"2.5em"}}>
                        Have a question?
                    </Typography>
                    <TextField
                    variant="outlined"
                    placeholder="holapeeps7@gmail.com"
                    className={classes.input}
                    InputProps={{
                        endAdornment:<Button variant="contained" color="secondary" className={classes.sendbut}>
                            Send
                        </Button>
                    }}
                    >
                    </TextField>
                    <Grid container item justify="center" alignItems="center" direction="column" style={{padding:"2em 0em 0em 0em"}}>
                        <Typography variant="h4">
                            HolaPeeps
                        </Typography>
                        <Typography variant="h5" className={Styles.footersec} style={{textAlign:"center",fontFamily:"Montserrat, sans-serif"}}>
                            Community based Voice-Only Social Network for spontaneous communication
                        </Typography>   
                    </Grid>

                </Grid>
                <Grid item style={{display:"flex",justifyContent:"space-evenly",paddingTop:"4em"}}>
                    <Grid>
                        <Typography variant="h6"  className={classes.footertext} style={{padding:"0.5em 0em",paddingLeft:"1em",fontFamily:"Montserrat, sans-serif",fontWeight:"600"}}>About</Typography>
                        <Typography variant="h6" className={classes.footertext} style={{padding:"0.5em 0em",paddingLeft:"1em",fontFamily:"Montserrat, sans-serif",fontWeight:"600"}}>Press Kit</Typography>
                        <Typography variant="h6" className={classes.footertext} style={{padding:"0.5em 0em",paddingLeft:"1em",fontFamily:"Montserrat, sans-serif",fontWeight:"600"}}>Privacy Policy</Typography>
                    </Grid>
                    <Grid>
                        <Typography variant="h6" className={classes.footertext} style={{padding:"0.5em 0em",paddingLeft:"1em",fontFamily:"Montserrat, sans-serif",fontWeight:"600"}}>Blog</Typography>
                        <Typography variant="h6" className={classes.footertext} style={{padding:"0.5em 0em",paddingLeft:"1em",fontFamily:"Montserrat, sans-serif",fontWeight:"600"}}>FAQs</Typography>
                        <Typography variant="h6" className={classes.footertext} style={{padding:"0.5em 0em",paddingLeft:"1em",fontFamily:"Montserrat, sans-serif",fontWeight:"600"}}>Feature Request</Typography>
                    </Grid>
                </Grid>
                <Grid className={Styles.socialLink} style={{padding:"4em 0em 0em 0em"}}>
                    <FacebookIcon className={classes.social} />
                    <InstagramIcon className={classes.social} />
                    <LinkedInIcon className={classes.social} />
                    <TwitterIcon className={classes.social} />
                    <YouTubeIcon className={classes.social} />
                </Grid>
                
            </Grid>
            <Grid container item justify="center" className={classes.copy} style={{background:"#fae10b"}}>
                    Copyright @HolaPeeps 2021
            </Grid>
        </>
    );
}


export default Footer;