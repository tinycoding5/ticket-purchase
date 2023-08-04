import React from 'react'
import useStyles, { CardComponent } from './useStyles';
import PageTitle from '../../components/PageTitle';
import { Order } from './types';
import { Card, Grid, Typography } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material';

const Checkout: React.FC = () => {
  const classes = useStyles();
  const [order, setOrder] = React.useState<Order>();

  React.useEffect(() => {
    const jsonCart = localStorage.getItem('order');
    if (jsonCart) {
      const newOrder: Order = JSON.parse(jsonCart);
      setOrder(newOrder)
    }
  }, [])
  return (
    <div className={classes.root}>
      <PageTitle title={'Checkout'} />
      {order ? (
        <Grid container spacing={2}>
          <Grid item sm={7} xs={12}>
            <CardComponent>
              <div className={classes.titleRoot}>
                <Typography>Delivery</Typography>
                <CheckCircleOutline className={classes.iconComponent} />
              </div>
            </CardComponent>
          </Grid>
          <Grid item sm={5} xs={12}>

          </Grid>
        </Grid>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default Checkout;