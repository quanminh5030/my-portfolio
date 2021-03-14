import { Box, Divider, Grid, Link, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: 100,
    },

    body: {
        margin: 50,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#878787',

    },

    info: {
        width: 900,
        margin: 'auto'
    },

    iconSection: {
        width: 10,
        margin: 'auto',
        marginTop: 20,

        '&:hover $icon': {
            color: 'red',
        }
    },

    icon: {
        color: 'white',
        fontSize: 50,
    },

    divider: {
        background: '#494a4a',
    }
}))

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.info}>
                <Grid container style={{ color: 'white' }}>
                    <Grid item md>
                        <Typography variant='h1' align='center' >
                            Hello! I'm Quan Dao
                        </Typography>
                    </Grid>
                </Grid>

                <Typography variant='body2' align='center' className={classes.body}>
                    I'm a student living in Helsinki now. At this moment, I am looking for an internship as a web developer.
                </Typography>


            </div>
            <Grid container>
                <Grid item md='6' style={{ margin: 'auto' }}>
                    <Divider variant='middle' classes={{ root: classes.divider }} />
                </Grid>
            </Grid>

            <Box className={classes.iconSection}>
                <Link href='https://www.linkedin.com/in/qu%C3%A2n-%C4%91%C3%A0o-7a8356195/'>
                    <LinkedInIcon fontSize='large' className={classes.icon} />
                </Link>
            </Box>
            <Box className={classes.iconSection} style={{ marginBottom: 400 }}>
                <Link href='https://github.com/quanminh5030'>
                    <GitHubIcon fontSize='large' className={classes.icon} />
                </Link>
            </Box>
        </div>

    );

}
