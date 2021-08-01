import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles,createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Toolbar from '@material-ui/core/Toolbar';
import Poster from './posters';
import Footer from './footer';
import Styles from './hola_peeps.module.css';

const theme = createMuiTheme({
    palette: {
        primary: {
          main: "#fae10b",
        },
        secondary: {
          main: "#000000",
        },
      },
})

const useStyles = makeStyles((theme)=>({
    root:{
        flexGrow:1,
    },
    appbar:{
        padding:"1em",
        background:"rgba(0,0,0,0)",
        color:"#fae10b",
        [theme.breakpoints.down("sm")]:{
            padding:"1em 0.2em",
        },
        [theme.breakpoints.down("xs")]:{
            display:"none"
        }
    },
    title:{
        flexGrow:1,
        fontFamily:"Montserrat, sans-serif",
        fontWeight:"600",
        fontSize: "2.5rem",
        [theme.breakpoints.down("sm")]:{
            fontSize:"2em"
        },
        [theme.breakpoints.down("xs")]:{
            fontSize:"1.5em"
        }
    },
    main:{
        alignSelf:"center",
        // paddingLeft:"5em",
        [theme.breakpoints.down("md")]:{
            display:"flex",
            flexDirection:"column",
            paddingLeft:"0em",
        },
        [theme.breakpoints.down("sm")]:{
            marginTop: '10px'
        },

        // padding:"0em 4em"
    },
    subHeading: {
      paddingRight:"5em",
      [theme.breakpoints.down("md")]:{
          display:"flex",
          flexDirection:"column",
          paddingRight:"0em",
      }
    },
    maintext:{
        color:"#fae10b",
        fontWeight:"600",
        textAlign:"center",
        fontFamily:"Montserrat, sans-serif",
        fontSize:"4.5em",
        [theme.breakpoints.down("lg")]:{
            fontSize:"4.5em",
            margin:"0.2em 0em"
        },
        [theme.breakpoints.down("md")]:{
            fontSize:"3.5em",
            margin:"0.2em 0em"
        },
        [theme.breakpoints.down("sm")]:{
            fontSize:"2.4em",
            margin:"0.2em 0em"
        },
        [theme.breakpoints.down("xs")]:{
            fontSize:"2.4em",
            margin:"0.2em 0em"
        }
    },
    maintext1:{
        color:"#fae10b",
        fontWeight:"600",
        textAlign:"center",
        fontFamily:"Montserrat, sans-serif",
        marginBottom: "15px",
        paddingLeft: "10%",
        paddingRight: "10%",
        [theme.breakpoints.down("lg")]:{
            fontSize:"3.5em",
            margin:"1em 0em"
        },
        [theme.breakpoints.down("sm")]:{
            fontSize:"2.8em",
            margin:"1em 0em",
            paddingLeft: "0"
        },
        [theme.breakpoints.down("xs")]:{
            fontSize:"2.8em",
            paddingLeft: "0"
        }
    },
    hometext:{
        padding:"0.5em 46px 0.5em 0em",
        [theme.breakpoints.down("sm")]:{
            fontSize:"1.5em",
            padding:"0.5em 0em 0.5em 0em",
        }
    },
    playbut:{
        maxWidth:"14em",
        [theme.breakpoints.down("sm")]:{
            maxWidth:"12em"
        }
    },
    exceptbut:{
        display:"none",
        marginTop:"1em",
        maxWidth:"13em",
        [theme.breakpoints.down("xs")]:{
            display:"inline"
        }
    },
    getStarted: {
      padding:".8em",
      marginTop: "1.5em",
      fontSize:"1.3em",
      fontWeight:"600",
      borderRadius:"1em",
      [theme.breakpoints.down("md")]:{
        marginTop: "1em",
      },
      [theme.breakpoints.down("sm")]:{
        marginTop: "0.5em",
      }
    },
    youtube:{
        width:"80%",
        [theme.breakpoints.down("xl")]:{
            height:"60em"
        },
        [theme.breakpoints.down("lg")]:{
            height:"45em"
        },
        [theme.breakpoints.down("md")]:{
            height:"40em",
            width:"85%",
        },
        [theme.breakpoints.down("sm")]:{
            height:"38em",
            width:"90%",
        },
        borderRadius:"2em"
    },
    tiltimage:{
        maxWidth:"10%",
        [theme.breakpoints.down("md")]:{
            display:"none",
        }
    },
    foottop:{
        // paddingLeft:"4em",
        paddingTop:"3em",
        [theme.breakpoints.down("sm")]:{
            paddingLeft:"0em",
            paddingTop:"1em"
        }
    },
    toolbar: {
      display: "flex",
      padding: "0px 20px 0"
    }
}));


const Homepage = () =>{

    const classes = useStyles();

    useEffect(()=>{
        document.body.style.background="#2b2b2b";
    });

    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const phoneWidth = matches ? '240' : '280';
    const phoneHeight = matches ? '420' : '500';

    return (
    <ThemeProvider theme={theme}>
       <Grid className={classes.root}>
          <AppBar position="static" elevation="0" className={classes.appbar}>
            <div className={classes.toolbar}>
              <Typography variant="h3" className={classes.title}>
                  Hola Peeps
              </Typography>
              <div>
                <a href="https://play.google.com/store/apps/details?id=com.holapeeps.app" target="_blank">
                  <img  className={classes.playbut} src={"https://res.cloudinary.com/marcos-yash/image/upload/v1621327166/Holapeeps/Artboard_1googleplay_pr8t44.png"}></img>
                </a>
              </div>
            </div>
           </AppBar>

            <Grid container item justify="center" alignItems="center" className={classes.main} style={{alignSelf:"center",textAlign:"center",alignContent:"center"}}>
                <Typography variant="h1" className={classes.maintext}>
                    Hang out
                </Typography>
                <Grid style={{textAlign:"center",alignContent:"center"}}>
                 <svg id="phoneSvg" width={phoneWidth} height={phoneHeight} viewBox="0 0 309 622" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Group 155">
                <path id="Vector" d="M303.66 98.4301H303.08V37.0001C303.08 27.2189 299.194 17.8384 292.278 10.922C285.362 4.00569 275.981 0.120117 266.2 0.120117H42.65C32.8688 0.120117 23.4882 4.00569 16.5719 10.922C9.65556 17.8384 5.77002 27.2189 5.77002 37.0001V98.4301H5.17999C3.90338 98.4328 2.67996 98.9418 1.7782 99.8454C0.876435 100.749 0.369992 101.974 0.369995 103.25V145.74C0.369995 147.016 0.876759 148.239 1.77881 149.141C2.68086 150.043 3.9043 150.55 5.17999 150.55H5.77002V160.69H5.17999C3.90511 160.693 2.68322 161.2 1.78174 162.102C0.88026 163.003 0.372637 164.225 0.369995 165.5V208C0.369995 209.276 0.876759 210.499 1.77881 211.401C2.68086 212.303 3.9043 212.81 5.17999 212.81H5.77002V585C5.77002 594.781 9.65556 604.162 16.5719 611.078C23.4882 617.995 32.8688 621.88 42.65 621.88H266.2C275.981 621.88 285.362 617.995 292.278 611.078C299.194 604.162 303.08 594.781 303.08 585V176.62H303.66C304.938 176.62 306.164 176.112 307.068 175.208C307.972 174.304 308.48 173.078 308.48 171.8V103.25C308.48 101.972 307.972 100.746 307.068 99.8419C306.164 98.9379 304.938 98.4301 303.66 98.4301Z" fill="#F1D806"/>
                <path id="Vector_2" d="M262.39 9.24023H46.45C29.9091 9.24023 16.5 22.6493 16.5 39.1902V582.77C16.5 599.311 29.9091 612.72 46.45 612.72H262.39C278.931 612.72 292.34 599.311 292.34 582.77V39.1902C292.34 22.6493 278.931 9.24023 262.39 9.24023Z" fill="#202020"/>
                <path id="Vector_3" d="M159.54 336C159.54 336 151 338 145.39 336C145.103 335.9 144.838 335.744 144.613 335.539C144.388 335.335 144.207 335.087 144.08 334.81C143.879 334.345 143.811 333.833 143.883 333.332C143.956 332.831 144.166 332.359 144.49 331.97C145.423 330.994 146.575 330.254 147.85 329.81C149.234 329.348 150.477 328.539 151.46 327.46C151.72 327.132 151.908 326.754 152.013 326.349C152.118 325.945 152.138 325.523 152.07 325.11C152.014 324.656 151.78 324.242 151.42 323.96H137.67C132.42 323.957 127.387 321.87 123.676 318.157C119.965 314.444 117.88 309.41 117.88 304.16V282.79C117.88 277.541 119.965 272.508 123.676 268.796C127.388 265.085 132.421 263 137.67 263H167.32C172.569 263 177.602 265.085 181.314 268.796C185.025 272.508 187.11 277.541 187.11 282.79V304.29C187.11 305.56 189 331.25 159.54 336Z" fill="url(#paint0_linear)"/>
                <path id="Vector_4" className={Styles.vector_4} d="M132.32 289.46C132.32 288.212 131.308 287.2 130.06 287.2C128.812 287.2 127.8 288.212 127.8 289.46V298.49C127.8 299.738 128.812 300.75 130.06 300.75C131.308 300.75 132.32 299.738 132.32 298.49V289.46Z" fill="white"/>
                <path id="Vector_5" className={Styles.vector_5} d="M141.36 275.9C141.36 274.651 140.348 273.64 139.1 273.64C137.852 273.64 136.84 274.651 136.84 275.9V312.04C136.84 313.288 137.852 314.3 139.1 314.3C140.348 314.3 141.36 313.288 141.36 312.04V275.9Z" fill="white"/>
                <path id="Vector_6" className={Styles.vector_6} d="M150.39 282.68C150.39 281.432 149.378 280.42 148.13 280.42C146.882 280.42 145.87 281.432 145.87 282.68V305.27C145.87 306.518 146.882 307.53 148.13 307.53C149.378 307.53 150.39 306.518 150.39 305.27V282.68Z" fill="white"/>
                <path id="Vector_7" className={Styles.vector_6} d="M159.43 289.46C159.43 288.212 158.418 287.2 157.17 287.2C155.922 287.2 154.91 288.212 154.91 289.46V298.49C154.91 299.738 155.922 300.75 157.17 300.75C158.418 300.75 159.43 299.738 159.43 298.49V289.46Z" fill="white"/>
                <path id="Vector_8" className={Styles.vector_4} d="M177.5 289.15C177.5 287.901 176.488 286.89 175.24 286.89C173.992 286.89 172.98 287.901 172.98 289.15V298.18C172.98 299.428 173.992 300.44 175.24 300.44C176.488 300.44 177.5 299.428 177.5 298.18V289.15Z" fill="white"/>
                <path id="Vector_9" className={Styles.vector_6} d="M168.51 282.41C168.51 281.134 167.476 280.1 166.2 280.1C164.924 280.1 163.89 281.134 163.89 282.41V305.53C163.89 306.805 164.924 307.84 166.2 307.84C167.476 307.84 168.51 306.805 168.51 305.53V282.41Z" fill="white"/>
                </g>
                <defs>
                <linearGradient id="paint0_linear" x1="117.88" y1="299.95" x2="187.14" y2="299.95" gradientUnits="userSpaceOnUse">
                <stop stop-color="#2D1473"/>
                <stop offset="1" stop-color="#5D1B3F"/>
                </linearGradient>
                </defs>
                </svg>

                </Grid>
                <Typography variant="h1" className={classes.maintext}>
                    more Often
                </Typography>
            </Grid>
            <Grid className={classes.subHeading} container item justify="center" direction="column" alignItems="center">
                <div>
                  <a href="https://holapeeps.com/" target="_blank">
                    <Button className={classes.getStarted} color="primary" variant="contained" style={{color:"#000",fontFamily:"Montserrat, sans-serif"}}>
                      Get Started
                    </Button>
                  </a>
                </div>
                <Button>
                  <a href="https://play.google.com/store/apps/details?id=com.holapeeps.app" target="_blank">
                    <img  className={classes.exceptbut} src={"https://res.cloudinary.com/marcos-yash/image/upload/v1621327166/Holapeeps/Artboard_1googleplay_pr8t44.png"}></img>
                  </a>
                </Button>
                <Typography variant="h4" className={classes.hometext} style={{textAlign:"center",color:"#ffffff",fontFamily:"Montserrat, sans-serif"}}>
                 Find Your Community and speak your Heart out. <br></br>Give it a try & have fun!
                </Typography>
            </Grid>

            <Poster theme={theme} />

            <Grid container item justify="center" alignItems="center">
            <iframe className={classes.youtube} src="https://www.youtube.com/embed/kUOMT3HYyhA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Grid>

            <Grid container item  className={Styles.containmain} justify="space-between" >
                <Grid item  justify="center" alignItems="center" className={classes.foottop} style={{textAlign:"center",alignSelf:"center"}}>
                    <Typography variant="h2"  className={classes.maintext1} >
                        Get HolaPeeps Mobile App
                    </Typography>
                    <Button>
                      <a href="https://play.google.com/store/apps/details?id=com.holapeeps.app" target="_blank">
                        <img className={classes.playbut} src={"https://res.cloudinary.com/marcos-yash/image/upload/v1621327166/Holapeeps/Artboard_1googleplay_pr8t44.png"}></img>
                      </a>
                    </Button>
                </Grid>
                
                <Grid>
                    <img className={Styles.tiltimage} src={"https://res.cloudinary.com/marcos-yash/image/upload/v1621330176/Holapeeps/Group_26_ocdatw.png"}></img>
                </Grid>

            </Grid>
            <Footer></Footer>
       </Grid>
       </ThemeProvider>
    );
}

export default Homepage;
