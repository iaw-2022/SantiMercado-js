import { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link as RouteLink, useHistory} from "react-router-dom";
import { auth } from "../../firebase";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Todos los derechos reservados © BahiaComputacion '}
      {new Date().getFullYear()}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {

  const [email, setEmail] = useState("");
  const [password, setPaswword] = useState("");
  const history = useHistory();

  const signup = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then((auth) => {
        console.log(auth);
        if (auth){
            history.push("/");
        }
    }).catch(err => alert(err.message))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      
      <Container component="main" maxWidth="xs">
        
        <CssBaseline />
        
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Registrar cuenta
          </Typography>

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            
            <Grid container spacing={2}>
              
              <Grid item xs={12}>
                <TextField
                 value = {email}
                 onChange = {e => setEmail(e.target.value)}
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                value = {password}
                onChange = {e => setPaswword(e.target.value)}
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>

            </Grid>
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick = {signup}
            >
            Registrar

            </Button>

            <Grid container justifyContent="flex-end">
              
              <Grid item>
                <RouteLink to="/signin" >
                  Ya tienes una cuenta? Iniciar sesion
                </RouteLink>
              </Grid>

            </Grid>

          </Box>

        </Box>

        <Copyright sx={{ mt: 5 }} />

      </Container>
      
    </ThemeProvider>
  );
}