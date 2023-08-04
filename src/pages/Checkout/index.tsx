import React from 'react'
import useStyles, { CardComponent } from './useStyles';
import PageTitle from '../../components/PageTitle';
import { Order } from './types';
import { Button, Checkbox, FormControl, FormHelperText, Grid, Typography } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material';
import { getTimeFormat } from '../../utils';
import CreditCard from '../../components/CreditCard';
import { useNavigate } from 'react-router-dom';

const Checkout: React.FC = () => {
  const classes = useStyles();
  const [order, setOrder] = React.useState<Order>();
  const [agree, setAgree] = React.useState(false);

  const navigate = useNavigate();

  React.useEffect(() => {
    const jsonCart = localStorage.getItem('order');
    if (jsonCart) {
      const newOrder: Order = JSON.parse(jsonCart);
      setOrder(newOrder)
    }
  }, [])

  const total = React.useMemo(() => {
    if (order) {
      return order.qty * (order.product.price + order.product.serviceFee) + 2.95
    }
    return 0;
  }, [order])

  const cancelOrder = () => {
    navigate('/')
  }

  const handlCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgree(event.target.checked)
  }

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
              <h3>Use Credit / Debit Card</h3>
              <CreditCard />
              <h3>Or Pay With</h3>
              <Typography>
                <b>
                  By using a digital wallet and continuing past this page, you have read and are accepting the <a href='#'>Terms of Use</a>
                </b>
              </Typography>
            </CardComponent>
          </Grid>
          <Grid item sm={5} xs={12}>
            <CardComponent>
              <FormControl fullWidth>
                <div className={classes.titleRoot} style={{ justifyContent: 'space-between' }}>
                  <Typography>Total</Typography>
                  <div>
                    <Typography>${total.toFixed(2)}</Typography>
                  </div>
                </div>
                <h3>Tcikets</h3>
                <div className={classes.itemRoot}>
                  <Typography>
                    {order.product.name}:
                    ${order.product.price.toFixed(2)} X 2
                  </Typography>
                  <Typography>
                    ${(order.product.price * order.qty).toFixed(2)}
                  </Typography>
                </div>
                <h3>Notes From Seller</h3>
                <Typography>
                  {order.product.note}
                </Typography>
                <h3>Fees</h3>
                <div className={classes.itemRoot}>
                  <Typography>
                    {'Service Fee: $'} {order.product.serviceFee.toFixed(2)} X 2
                  </Typography>
                  <Typography>
                    ${(order.product.serviceFee * order.qty).toFixed(2)}
                  </Typography>
                </div>
                <div className={classes.itemRoot}>
                  <Typography>
                    {'Order Processing Fee'}
                  </Typography>
                  <Typography>
                    {'$2.95'}
                  </Typography>
                </div>
                <div className={classes.cancelOrder} onClick={cancelOrder}>Cancel Order</div>
                <h4>{'* All Sales Final - No Refunds'}</h4>
                <div className={classes.agreement}>
                  <Checkbox
                    checked={agree}
                    onChange={handlCheckBox}
                  />
                  <Typography>
                    <b>I have read and agree t the current <a href='#'>Terms of Use</a></b>
                  </Typography>
                </div>
                <Button variant='contained' color='success'>Place Order</Button>
              </FormControl>
              <FormHelperText>
                {'*Exceptions may apply, see our Terms of Use.'}
              </FormHelperText>
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