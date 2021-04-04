import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        marginBottom: 50, 
        marginTop: 50 
    },

    title: {
        marginTop: 100,
        fontWeight: 'bold',
        color: '#5e5e5e',
        marginBottom: 50
    },

    imgContainer: {
        marginBottom: 50, 
        textAlign: 'center' 
    },

    img: {
        width: '70%', 
        height: '70%' 
    },
}))

export default useStyles;
