import React from "react";
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CheckoutCard  from "./CheckoutCard";
import products from "../product-data";
import Total from "./Total";



const CheckoutPage = () => {

    function FormRow(){
      return (
            <React.Fragment>
             {products.map((item) => (
              <Grid item xs={12} sm={8} md={6} lg={4}>
                 <CheckoutCard key={item.id} product={item} />
              </Grid>
             ))}
            </React.Fragment> 
      );  
    }

    return (
        <Box sx={{ flexGrow: 1 , padding: "2rem"}}>
         <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography align='center' gutterBottom variant='h4'>
                Shopping Cart
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={9} container spacing={2}>
                <FormRow />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
                <Typography align='center' gutterBottom variant='h4'>
                    <Total/>
                </Typography>
            </Grid>
         </Grid>
        </Box>
    );
};

export default CheckoutPage;