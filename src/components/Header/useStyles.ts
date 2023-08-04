import { AppBar } from "@mui/material";
import { styled } from '@mui/material/styles';

export const AppBarComponent = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(1, 0),
}));

