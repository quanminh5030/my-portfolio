import { Button, CardMedia, Fade, Grid, Link, makeStyles, Tooltip, Typography, Zoom } from '@material-ui/core';
import React, { useState } from 'react';
import mypicture from '../images/myPicture.jpg'
import vaalikonePic from '../images/vaalikoneApp.PNG'
import fudhub from '../images/fud-hub.PNG';
import personaltrainer from '../images/trainingApp.PNG';

import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";


const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: 100,
        fontWeight: 'bold',
        color: '#5e5e5e',
        marginBottom: 50
    },

    img: {
        height: 300,
        width: '70%',
        margin: 'auto',
    },

    desc: {
        color: 'red'
    }
}))

export default function Contact() {
    const classes = useStyles();
    const [elements, setElements] = useState([
        { githubLink: 'https://quanminh5030.github.io/Personal-Trainer', textInfo: 'A ReactJS application which show the data of the customers and their training sessions stored in the database', image: personaltrainer },
        { githubLink: 'https://github.com/quanminh5030/Vaalikone.git', textInfo: 'A Java application where users can answer questions and see how suitable they are with each candidates.', image: vaalikonePic },
        { githubLink: 'https://github.com/quanminh5030/-fud-hub.git', textInfo: 'An application created by using PHP where users can sign up and login to see the recipes for the most popular foods available in the website', image: fudhub },
    ])

    return (
        <Grid container >
            <Grid item md={12}>
                <Typography variant='h5' align='center' className={classes.title}>Check out some of my projects</Typography>
            </Grid>

            {elements.map(element => (
                <Grid item md={4} style={{ marginBottom: 200 }}>
                    <Link href={element.githubLink}>
                        <Tooltip
                            placement='bottom'
                            TransitionComponent={Zoom}
                            TransitionProps={{ timeout: 600 }}
                            title={element.textInfo}
                            // className={classes.desc}
                        >
                            <CardMedia
                                image={element.image} className={classes.img}
                            />
                        </Tooltip>
                    </Link>

                </Grid>

            ))}
        </Grid>

    );
}