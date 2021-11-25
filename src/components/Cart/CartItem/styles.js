import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    display: "flex",
    position: "relative",
    padding: "150px 0",
    borderBottom: "1px solid #F5F5F5",
  },

  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: "8px",
    flex: 1,
    marginLeft: '21px'
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center'
  },
  delButton: {
    border:'none',
    background: '#47423f',
    alignItems: 'right'
  }
}));
