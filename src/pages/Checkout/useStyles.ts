import { makeStyles } from "@mui/styles";
import { styled } from '@mui/material/styles';

const useStyles = makeStyles({
  root: {
    textAlign: 'start'
  },
  titleRoot: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    '& p': {
      fontSize: 28
    }
  },
  iconComponent: {
    color: '#33d375',
    '&&': {
      fontSize: 32
    }
  },
  itemRoot: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cancelOrder: {
    color: '#2196f3',
    cursor: 'pointer',
    padding: '12px 0',
    fontWeight: 700,
  },
  agreement: {
    display: 'flex',
    alignItems: 'center'
  }
});

export const CardComponent = styled('div')(({ theme }) => ({
  border: '1px solid rgb(192, 192, 192)',
  padding: theme.spacing(2.5),
  margin: theme.spacing(2, 0),
  borderRadius: 8,  
  '& button': {
    marginTop: theme.spacing(1),
    textTransform: 'none',
  }
}));


export default useStyles;
