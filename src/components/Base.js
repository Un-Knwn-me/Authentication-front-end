import { AppBar, Box, Button, Container, Grid, Toolbar, Typography } from '@mui/material';
import React from 'react'
import {useHistory} from 'react-router-dom';

const Base = ( {title, description, children} ) => {

    const history = useHistory();

    const handleLogout = async()=>{
      sessionStorage.clear();
      history.push('/');
    }
    
  return (
    <div  className="main-division">
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Button color="inherit" onClick={()=>history.push("/")}>Login</Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AUTH App
          </Typography>
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>

<header>
<h1>{title}</h1>
</header>
<main>
<h2>{description}</h2>
<div>{children}</div>
</main>

<div className="footer">
  <Box
    sx={{
      width: "100%",
      height: "auto",
      backgroundColor: '#2196f3',
      paddingTop: "1rem",
      paddingBottom: "1rem",
    }}
  >
    <Container maxWidth="lg">
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12}>
          <Typography color="white" variant="h5">
            Auth-App
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography color="white" variant="subtitle1">
            {`${new Date().getFullYear()} | React | Material UI | React Router`}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </Box>
</div>
</div>
  )
}

export default Base