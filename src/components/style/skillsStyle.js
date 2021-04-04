import { LinearProgress, makeStyles, withStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    title: {
        height: theme.spacing(5),
        marginTop: 100,
        borderBottomStyle: 'solid',
        borderBottomColor: '#248591',
        BorderBottomWidth: 5,
        fontWeight: 100
    },

    heading: {
        position: 'absolute',
        marginTop: 100,
        marginBottom: 20,
    },
}))

export const BorderLinearProgress = withStyles((theme) => ({
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