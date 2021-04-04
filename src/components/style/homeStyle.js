import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
       
    },

    info: {
        margin: 50,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#878787',

    },

    link: {
        '&:hover $icon': {
            color: 'red',
        },

        marginTop: 20
    },

    icon: {
        color: 'white',
        fontSize: 50,
    },

}))

export default useStyles;












