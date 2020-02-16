import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';
const Form = ()=>{
return(
  <form >
<Grid
  container
  direction="column"
  justify="center"
  alignItems="center"
>
 <Grid item >USERNAME OR EMAIL</Grid>
 <Grid item > <input type="text" name="name" style={{ padding:"12px 0px", border:"1px solid #ccc" ,borderRadius:4,width:300,margin:"12px 0px",background:"#d5d7de"}}/></Grid>
 <Grid item >PASSWORD</Grid>
 <Grid item > <input type="text" name="name" style={{ padding:"12px 0px", border:"1px solid #ccc" ,borderRadius:4,width:300,margin:"12px 0px",background:"#d5d7de"}} /></Grid>
 <Grid item><Button variant="contained" style={{width:300,background:"#fe696e"}}  >
        Log In 
      </Button></Grid>
      </Grid>
</form>
)
}





const Connect =() => {
  return (
    <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
    spacing={3}
  >
    <Grid item  style={{marginTop:"20px"}}>
      <Button variant="contained" style={{background:"#fff",width:250}} startIcon={<MailIcon />}>
        Log In with Gmail
      </Button>
    </Grid>
    <Grid item >
      <Button variant="contained" style={{background:"#3b5998" ,width:250}}startIcon={<FacebookIcon />}>
        Log In with Facebook
      </Button>
    </Grid>
  </Grid>
  )
}

const Container = styled.div`
  background: #f1f2f6;
padding:12px 0px;
  h3 {
    font-size: 3.2rem;
    font-weight: 600;
  }
`;
const Login = () => {
  return (
    <Container>
      <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
  
  style={{padding:"0px 15%"}}
>
        <Grid item sm={12}>
          <h3>Login</h3>
        </Grid>
        <Grid item  xs={12} sm={6}><Form /></Grid>
        <Grid item xs={12} sm={6}><Connect /></Grid>
        <Grid item xs={12} sm={12} >
        <Paper style={{width:300,background:"#89a0cf",height:50,margin:"15px auto", textAlign:"center"}}>Need an account? <a href="/#">Sign up now!</a></Paper>
        </Grid>
        </Grid>
        
        </Container>
  );
};

export default Login;
