import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginTop: 60,
    },
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  label: {
  marginRight: '10px',
  fontSize: '12px',
  },

  attachments: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '80px',
    height: '150px',
    width: '150px',
    borderRadius: '40px',
  },

  clear: {
    color: '#04aaff',
    cursor: 'pointer',
    textAlign: 'center',
  },

}));
