import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        color: '#757474',
        marginBottom: 100,
        marginLeft: 20
    },

    title: {
        // width: theme.spacing(20),
        height: theme.spacing(5),
        marginTop: 100,
        borderBottomStyle: 'solid',
        borderBottomColor: '#248591',
        BorderBottomWidth: 5,
        fontWeight: 100
    },

    heading: {
        fontWeight: 'bold',
        marginTop: 100,
        marginBottom: 20,
        color: 'black'
    },
}))

export default useStyles;