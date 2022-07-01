import React, { useEffect, useState } from "react";
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CheckoutCard  from "./CheckoutCard";
import Button from '@mui/material/Button';
import Total from "./Total";
import { Link } from "react-router-dom";



const CheckoutPage = () => {

      // Hooks

      const [cart, setCart] = useState([]);

      // Fetch
      
      const getDataFromAPI = async() => {
        const URL_CART = "https://serviciowebecommerce.herokuapp.com/cart";
          //const URL_productos = process.env.REACT_APP_API_URL+"/products";
          const response_cart = await fetch(URL_CART);
          const dataCart = await response_cart.json();
          setCart(dataCart);
  
      }

      const deleteProductCart = async (id) => {
        const URL_DELETE_PRODUCTO = "https://serviciowebecommerce.herokuapp.com/cart/delete/"+id;
        await fetch(URL_DELETE_PRODUCTO, { method: 'DELETE' });
        await getDataFromAPI();
      }
  
      useEffect( () => {
          getDataFromAPI();
      }, []);

    function FormRow(){
      return (
            <React.Fragment>
             {cart.map((item) => (
              <Grid item xs={12} sm={8} md={6} lg={4}>
                 <CheckoutCard key={item.id} product={item} deleteProductCart={deleteProductCart} />
              </Grid>
             ))}
            </React.Fragment> 
      );  
    }

  if(cart.length > 0){ 
    return (
        <Box sx={{ flexGrow: 1 , padding: "2rem"}}>
         <Grid container spacing={3}>
            <Grid item xs={12}>           
              <Typography align='center' gutterBottom variant='h4'>
                Mi carrito
              </Typography>          
            </Grid>
            <Grid item xs={12} sm={8} md={9} container spacing={2}>
                <FormRow />
            </Grid>

            <Grid item xs={12} sm={4} md={3}>
                <Typography align='center' gutterBottom variant='h4'>
                    <Total cart= {cart}/>
                </Typography>
            </Grid>
         </Grid>
        </Box>
    );
  }
  else{
    return (
      <Box sx={{ flexGrow: 1 , padding: "2rem"}}>
       <Grid container spacing={2}>
          <Grid item xs={12}>           
            <Typography align='left' gutterBottom variant='h4'>
              No hay productos en tu carrito
            </Typography>         
          </Grid>
          <Grid item xs={12}> 
             <Link to= "/">
              <Button marginTop= "2rem" variant="contained" color="success" > Volver a la tienda  </Button>
             </Link>
          </Grid> 
       </Grid>
      </Box>
   );
  }
};

export default CheckoutPage;