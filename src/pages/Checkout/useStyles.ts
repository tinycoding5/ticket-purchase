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
      fontSize: 24
    }
  },
  iconComponent: {
    color: '#33d375',
    '&&': {
      fontSize: 32
    }
  },
});

export const CardComponent = styled('div')(({ theme }) => ({
  border: '1px solid rgb(192, 192, 192)',
  padding: theme.spacing(2.5),
  margin: theme.spacing(2, 0),
  borderRadius: 8
}));


export default useStyles;
