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
        display:"flex",
        background:"#fae10b",
        padding:"10em 5em 3em 0em",
        clipPath:"polygon(0 0, 100% 30%, 100% 100%, 0% 100%)",
        [theme.breakpoints.down("sm")]:{
            padding:"8em 0em 3em 0em",
            clipPath:"polygon(0 0, 100% 10%, 100% 100%, 0% 100%)",
            flexDirection:"column"
        },
        [theme.breakpoints.down("sm")]:{
            padding:"6em 0em 1em 0em",
            clipPath:"polygon(0 0, 100% 5%, 100% 100%, 0% 100%)",
            flexDirection:"column"
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
          width:"70%",
          padding:"2em 0em",
        [theme.breakpoints.down("sm")]:{
              width:"80%"
        },
        [theme.breakpoints.down("xs")]:{
            width:"90%"
        }
    },
    fieldarea:{
        textAlign:"center",
        width:"50%",
        [theme.breakpoints.down("sm")]:{
            width:"100%"
        }
    },
    sendbut:{
        color:"#fae10b",
        height:"100%",
        borderRadius:"2em"
    },
    footersec:{
        
    },
    social:{
        fontSize:"2em",
        marginBottom:".5em",
        [theme.breakpoints.down("sm")]:{
            marginRight:".5em"
        }

    },
    copy:{
        fontSize:"1.2em",
        padding:"1em",
        color: "rgba(0,0,0,0.5)",
        [theme.breakpoints.down("sm")]:{
            fontSize:"1.2em",
            padding:"1em"
        }
    },
    footertext:{
        padding:"0.7em 0em",
        paddingLeft:"2em",
        [theme.breakpoints.down("sm")]:{
            fontSize:"1.2em",
            padding:"1em"
        },
        [theme.breakpoints.down("xs")]:{
            fontSize:"1.1em",
            paddingLeft:".5em"
        }
    }
}))

const Footer = () =>{
    const classes = useStyles();
    return (
        <>
            <Grid className={classes.root}>
                <Grid className={classes.fieldarea}>
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
                    <Grid style={{padding:"2em 0em 0em 0em"}}>
                        <Typography variant="h4">
                            HolaPeeps
                        </Typography>
                        <Typography variant="h5" className={classes.footersec} style={{fontFamily:"Montserrat, sans-serif"}}>
                            Community based Voice-Only Social Network for spontaneous communication
                        </Typography>
                    </Grid>

                </Grid>

                <Grid style={{display:"flex",justifyContent:"space-around",paddingTop:"5em"}}>
                    <Grid>
                        <Typography variant="h6"  className={classes.footertext} style={{fontFamily:"Montserrat, sans-serif",fontWeight:"600"}}>About</Typography>
                        <Typography variant="h6" className={classes.footertext} style={{fontFamily:"Montserrat, sans-serif",fontWeight:"600"}}>Press Kit</Typography>
                        <Typography variant="h6" className={classes.footertext} style={{fontFamily:"Montserrat, sans-serif",fontWeight:"600"}}>Privacy Policy</Typography>
                    </Grid>
                    <Grid>
                        <Typography variant="h6" className={classes.footertext} style={{fontFamily:"Montserrat, sans-serif",fontWeight:"600"}}>Blog</Typography>
                        <Typography variant="h6" className={classes.footertext} style={{fontFamily:"Montserrat, sans-serif",fontWeight:"600"}}>FAQs</Typography>
                        <Typography variant="h6" className={classes.footertext} style={{fontFamily:"Montserrat, sans-serif",fontWeight:"600"}}>Feature Request</Typography>
                    </Grid>
                </Grid>
                <Grid style={{flex:"1 1 auto"}}></Grid>
                <Grid className={Styles.socialLink} style={{padding:"4em 2em 0em 2em"}}>
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
