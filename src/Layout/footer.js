import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from "styled-components";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MailIcon from '@material-ui/icons/Mail';
const Footer = () =>{
    const Container = styled.div`
      justify-content: center;
      align-items: center;
      text-align: center;
      padding:50px 150px;
      margin: 0;
      background: #89a0cf;
      @media only screen and (max-width: 750px) {
        padding:50px 0px;       
}  
`

const A = styled.a`
text-decoration:none;
text-decoration-color:none;
color:#2a3c76;
:hover{
    color:#f1f2f6;
}

 `
    return(
        <Container>
            <Grid container   direction="row"
  justify="center"
  alignItems="center"
  spacing={0} >
      <Grid item   xs={12} sm={2}  style={{marginTop:5}} >
          <A href="#">Home</A>
    
        </Grid>
        <Grid item xs={12} sm={2} style={{marginTop:5}} >
       <A href="#" > Get Involved</A>
        </Grid>
        <Grid item  xs={12} sm={2} style={{marginTop:5}} >
        <A href="#" >Our Causes</A>
        </Grid>
        <Grid item  xs={12} sm={2} style={{marginTop:5}} >
        <A href="#" >Our Programs</A>
        </Grid>
        <Grid item  xs={12} sm={2} style={{marginTop:5}} >
       <A href="#" > News & Features</A>
        </Grid>
        <Grid item  xs={12} sm={2} style={{marginTop:5}} >
        <A href="#" >About</A>
        </Grid>

</Grid>
<Grid container    justify="center"
  alignItems="center" spacing={2} style={{marginTop:20}} >
<Grid item><A href="#" >Contact Us</A></Grid>
<Grid item ><A href="#" >Change Language</A></Grid>
    </Grid>     




    <Grid container justify="center"  alignItems="center"  spacing={1} style={{marginTop:20}}>
    <Grid item   ><A href="#" ><FacebookIcon style={{ fontSize: 35 }} /></A></Grid>
    <Grid item  ><A href="#" ><InstagramIcon style={{ fontSize: 35 }} /></A></Grid>
    <Grid item   ><A href="#" > <YouTubeIcon style={{ fontSize: 35 }} /></A></Grid>
    <Grid item   ><A href="#" ><MailIcon style={{ fontSize: 35 }} /></A></Grid>
        </Grid>      
        <p style={{color:"#2a3c76"}}>© 2019 Name International. All rights reserved</p>
            </Container>
       
    )
}
export default Footer;