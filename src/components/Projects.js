import { createMuiTheme, Grid, Link, responsiveFontSizes, ThemeProvider, Tooltip, Typography, Zoom } from '@material-ui/core';
import React from 'react';
import vaalikonePic from '../images/vaalikoneApp.PNG'
import fudhub from '../images/fud-hub.PNG';
import personaltrainer from '../images/trainingApp.PNG';
import lianaTech from '../images/liana.PNG';
import useStyles from './style/projectStyle';
import { Image } from 'react-bootstrap';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default function Contact() {
    const classes = useStyles();
    const elements = [
        { githubLink: 'https://trainerapp-quand.herokuapp.com', textInfo: 'A ReactJS application which show the data of the customers and their training sessions stored in the database', image: personaltrainer },
        { githubLink: 'https://github.com/quanminh5030/Vaalikone.git', textInfo: 'A Java application where users can answer questions and see how suitable they are with each candidates.', image: vaalikonePic },
        { githubLink: 'https://github.com/quanminh5030/-fud-hub.git', textInfo: 'An application created by using PHP where users can sign up and login to see the recipes for the most popular foods available in the website', image: fudhub },
        { githubLink: 'http://liana-technologies-quand.herokuapp.com/', textInfo: 'The individual project from Liana Technologies company for testing level purpose. It is nice looking homepage for the company in which the lastest new is fetched from https://www.lianatech.com/blog.rss. Besides, the users can type their email address for subscription.', image: lianaTech },
    ];

    return (
        <Grid container >
            <Grid container item md={12} justify='center'>
                <ThemeProvider theme={theme}>
                    <Typography variant='h4' className={classes.title}>Check out some of my projects</Typography>
                </ThemeProvider>
            </Grid>

            <Grid container item md={12} justify='center' className={classes.container}>
                {elements.map((element, index) =>
                    <Grid key={index} item md={3} className={classes.imgContainer}>
                        <Link href={element.githubLink} target='_blank'>
                            <Tooltip
                                placement='bottom'
                                TransitionComponent={Zoom}
                                TransitionProps={{ timeout: 600 }}
                                title={element.textInfo}
                            >
                                <Image
                                    src={element.image}
                                    className={classes.img}
                                    fluid
                                />
                            </Tooltip>
                        </Link>
                    </Grid>
                )}
            </Grid>
        </Grid>

    );
}