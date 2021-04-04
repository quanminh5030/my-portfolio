import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    mypic: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        marginTop: 100,
    },

    content: {
        color: 'white',
        marginBottom: 100,
        marginLeft: 20
    },

    title: {
        fontWeight: 'bold',
        marginTop: 100,
        marginBottom: 20,
    },

    text: {
        color: '#9e9b9b',
    }
}))

export default useStyles;