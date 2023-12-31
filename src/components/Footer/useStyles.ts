import { styled } from '@mui/material/styles';

export const Root = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  color: theme.palette.common.black,
  padding: theme.spacing(3, 0),
  borderTop: `1px solid ${theme.palette.grey[600]}`,
  marginTop: theme.spacing(2.5),
}));
