import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Container, Grid, LinearProgress, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    title: {
        // width: theme.spacing(20),
        height: theme.spacing(5),
        marginTop: 100,
        marginRight: 200,
        fontSize: 25,
        borderBottomStyle: 'solid',
        borderBottomColor: '#248591',
        BorderBottomWidth: 5
    },

    heading: {
        position: 'absolute',
        marginTop: 100,
        marginBottom: 20,
    },
}))

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        width: '100%',
        height: 40,
        borderRadius: 5,
        backgroundColor: '#bbbdbf',
        marginTop: 150
    },

    bar: {
        borderRadius: 5,
        backgroundColor: '#3b3939',
    },
}))(LinearProgress);


export default function Skills() {
    const classes = useStyles();
    const skills = [
        { name: 'HTML5 & CSS3', topMargin: 0, percent: 50 },
        { name: 'JAVASCRIPT', topMargin: 100, percent: 65},
        { name: 'REACTJS', topMargin: 200, percent: 60 },
        { name: 'MATERIAL-UI', topMargin: 300, percent: 65 },
        { name: 'JAVA', topMargin: 400, percent: 75 },
        { name: 'C#', topMargin: 500, percent: 50 },
        { name: 'GIT', topMargin: 600, percent: 70 },
        { name: 'MYSQL', topMargin: 700, percent: 75 },
    ];

    return (
        <>
            <Grid container item xs={5} justify='flex-end' style={{ marginBottom: 500 }}>
                <Typography variant='h3' className={classes.title} style={{ marginRight: 250 }}>SKILLS</Typography>
            </Grid>

            <Grid container item xs={4} style={{marginBottom: 1150}}>
                {skills.map((skill, index) => (
                    <Container disableGutters style={{ position: 'absolute', marginTop: skill.topMargin, width: '33.5%' }}>
                        <Typography

                            className={classes.heading}
                            variant='h6'
                        >{skill.name}
                        </Typography>

                        <BorderLinearProgress
                            variant='determinate'
                            value={skill.percent}
                        />
                    </Container>
                ))}
            </Grid>


        </>
    );
}