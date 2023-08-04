import React from 'react'
import useStyles, { CardComponent } from './useStyles';
import PageTitle from '../../components/PageTitle';
import { Order } from './types';
import { Grid, Typography } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material';
import { getTimeFormat } from '../../utils';

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
              <h3>Mobile Entry - {order.delivery.price > 0 ? `$${order.delivery.price}` : 'Free'}</h3>
              <Typography>
                Tickets Available by {getTimeFormat(order.delivery.estimated)}
              </Typography>
              <Typography>
                {order.delivery.description}
              </Typography>
            </CardComponent>
            <CardComponent>
              <div className={classes.titleRoot}>
                <Typography>Payment</Typography>
                <CheckCircleOutline className={classes.iconComponent} />
              </div>
            </CardComponent>
          </Grid>
          <Grid item sm={5} xs={12}>
            <CardComponent>
              <div className={classes.titleRoot}>
                <Typography>Total</Typography>
                <div></div>
              </div>
            </CardComponent>
          </Grid>
        </Grid>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default Checkout;