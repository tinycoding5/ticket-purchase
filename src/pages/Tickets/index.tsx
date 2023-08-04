import React, { ChangeEvent } from 'react';
import PageTitle from '../../components/PageTitle';
import {
  Card,
  Grid,
  MenuItem,
  Select,
  Typography,
  SelectChangeEvent,
  TextField,
  FormControl,
  Button,
  FormHelperText
} from '@mui/material';
import { Tickets as Products, Deliveries } from '../../MockData';
import useStyles from './useStyles';
import { useNavigate } from 'react-router-dom';

const Tickets: React.FC = () => {
  const classes = useStyles();

  const navigate = useNavigate();

  const [delivery, setDelivery] = React.useState('');
  const [qty, setQty] = React.useState(0);
  const [error, setError] = React.useState({
    delivery: '',
    qty: ''
  })

  const handleChange = (event: SelectChangeEvent) => {
    let msg = '';
    if (!event.target.value) {
      msg = 'Please select delivery!'
    }
    setDelivery(event.target.value);
    setError(prev => ({
      ...prev,
      delivery: msg
    }));
  }

  const handleChagne = (event: ChangeEvent<HTMLInputElement>) => {
    let msg = '';
    if (!event.target.value || parseInt(event.target.value) === 0) {
      msg = 'Please add quantity!'
    }
    setQty(parseInt(event.target.value));
    setError(prev => ({
      ...prev,
      qty: msg
    }))
  }

  const validation = () => {
    let result = true;
    if (!delivery) {
      setError(prev => ({
        ...prev,
        delivery: "Please select delivery!"
      }));
      result = false;
    }

    if (!qty || qty === 0) {
      setError(prev => ({
        ...prev,
        qty: "Please add the quantity!"
      }));
      result = false;
    }

    return result;
  }

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    const valid = validation();
    if (valid) {
      const order = {
        qty: qty,
        product: Products[0],
        delivery: Deliveries.find(item => item.id === delivery)
      }
      localStorage.setItem("order", JSON.stringify(order));
      return navigate('/checkout')
    }
  }

  return (
    <div className={classes.root}>
      <PageTitle title='Tickets' />
      <div>
        {Products.map((ticket, index) => (
          <Card key={index} className={classes.cardRoot}>
            <Typography component='h3' className={classes.cardTitle}>
              {ticket.name}
            </Typography>
            <Grid container spacing={2}>
              <Grid item sm={6} xs={12}>
                <Typography>
                  <b>Price: </b>${ticket.price.toFixed(2)}
                </Typography>
                <Typography>
                  <b>Service Fee: </b>${ticket.serviceFee.toFixed(2)}
                </Typography>
                <fieldset className={classes.noteRoot}>
                  <legend><b>Notes From Seller</b></legend>
                  <Typography>
                    {ticket.note}
                  </Typography>
                </fieldset>
              </Grid>
              <Grid item sm={6} xs={12}>
                <div className={classes.addToCart}>
                  <form onSubmit={handleSubmit}>
                    <FormControl size="small" fullWidth >
                      <Grid container>
                        <Grid item sm={3}><div className='label'>Delivery: </div></Grid>
                        <Grid item sm={9}>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={delivery}
                            onChange={handleChange}
                            fullWidth
                            error={error.delivery ? true : false}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            {Deliveries.map((item) => (
                              <MenuItem key={item.id} value={item.id}>
                                {item.name}
                              </MenuItem>
                            ))}
                          </Select>
                          {error.delivery ? (
                            <FormHelperText error>{error.delivery}</FormHelperText>
                          ) : ''}

                        </Grid>
                      </Grid>
                      <Grid container marginTop={4} alignItems={'flex-start'}>
                        <Grid item sm={3}><div className='label'>Quantity: </div></Grid>
                        <Grid item sm={9}>
                          <TextField
                            type='number'
                            size="small"
                            fullWidth
                            value={qty}
                            onChange={handleChagne}
                            inputProps={{
                              min: 0,
                              step: 1
                            }}
                            error={error.qty ? true : false}
                            helperText={error.qty}
                          />
                        </Grid>
                      </Grid>
                      <Button type="submit" variant="contained">
                        Checkout
                      </Button>
                    </FormControl>
                  </form>
                </div>
              </Grid>
            </Grid>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Tickets;