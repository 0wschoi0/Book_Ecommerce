import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',
    fontSize: '30px',
    textAlign: 'center'
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '5px',
    },
    border:'none',
    background: '#527578',
    color: '#fff',
    texttransform: 'uppercase',
    textdecoration: 'none',
    letterspacing: '0.11px',
  },
  checkoutButton: {
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '5px',
    },
    minWidth: '150px',
    border:'none',
    background: '#47423f',
    color: '#fff',
    texttransform: 'uppercase',
    textdecoration: 'none',
    letterspacing: '0.11px',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
  cardTotal: {
    padding: '24px 19px',
    background: '#f5d5d5',
    marginTop: '30px'
  },
  cardTotal_1: {
    display: 'flex',
    justifyContent: 'space-between',
    textTransform: 'uppercase',
    color: '#9b9b9b',
  },
  cardTotal_2: {
    padding: "58px 0 0px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",
      boxSizing: "border-box",
  },
 
}));


