import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    textAlign: 'start',
    '& p': {
      padding: '8px 0',
    }
  },
  cardRoot: {
    padding: 16,
  },
  cardTitle: {
    '&&': {
      fontWeight: 700,
      fontSize: 20,
    }
  },
  noteRoot: {
    borderRadius: 16,
    marginTop: 8,
    '& legend': {
      marginLeft: 10,
    }
  },
  addToCart: {
    borderRadius: 8,
    padding: 16,
    width: '100%',
    height: '100%',
    border: '1px solid rgb(192, 192, 192)',
    '& .label': {
      fontWeight: 700,
      marginTop: 6,
    },
    '& button': {
      marginTop: 20,
    }
  }
})

export default useStyles;
