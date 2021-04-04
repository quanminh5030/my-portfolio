import React from 'react';
import { Container, createMuiTheme, Grid, responsiveFontSizes, ThemeProvider, Typography } from '@material-ui/core';
import { useStyles, BorderLinearProgress } from '../style/skillsStyle';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default function Skills() {
    const classes = useStyles();
    const skills = [
        { name: 'HTML5 & CSS3', topMargin: 0, percent: 50 },
        { name: 'JAVASCRIPT', topMargin: 100, percent: 65 },
        { name: 'REACTJS', topMargin: 200, percent: 60 },
        { name: 'MATERIAL-UI', topMargin: 300, percent: 65 },
        { name: 'JAVA', topMargin: 400, percent: 75 },
        { name: 'C#', topMargin: 500, percent: 50 },
        { name: 'GIT', topMargin: 600, percent: 70 },
        { name: 'MYSQL', topMargin: 700, percent: 75 },
    ];

    return (
        <Grid container>
            <Grid item md={1}></Grid>
            <Grid container item md={4} justify='center'>
                <ThemeProvider theme={theme}>
                    <Typography variant='h4' className={classes.title}>SKILLS</Typography>
                </ThemeProvider>
            </Grid>

            <Grid container justify='center' item md={6} style={{ marginBottom: 1150, marginLeft: 20 }}>
                {skills.map((skill, index) => (
                    <Container key={index} disableGutters style={{ position: 'absolute', marginTop: skill.topMargin, width: '50%' }}>
                        <ThemeProvider theme={theme}>
                            <Typography
                                className={classes.heading}
                                variant='h6'
                            >{skill.name}
                            </Typography>
                        </ThemeProvider>
                        <BorderLinearProgress
                            variant='determinate'
                            value={skill.percent}
                        />
                    </Container>
                ))}
            </Grid>


        </Grid>
    );
}