import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { blue, orange } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Cardview1 from '../Cardview1';
import Cardview2 from '../Cardview2';
import Cardview from "../Cardview";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';



import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import { Link } from 'react-router-dom';
import a1 from '../images/s1.1.jpg';
import a2 from '../images/bg.png';
import e1 from '../images/e1.png';
import e2 from '../images/e2.png';
import e3 from '../images/e3.png';


import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Cardd = () => {
    const myStyle=
    {
      // backgroundImage: `url(${a2})` , 
      Width: '100%',height:'550px',
      position:'relative',
      marginTop:"-60px"
     
    };
    
  return (
    <>
      {/* <Box sx={myStyle} > */}
        <div style={{width:"100%",height:"500px",alignContent:'center',marginTop:'50px'}}>
          <div style={{width:"50%",height:"400px",float:'left'}} >
          <img
            src={e1}
            alt="Info"
            style={{
              marginTop:'-60px',
              marginLeft:'120px',
              width: '520px',
              height:"520px",
              
            }}
          />

          </div>
          <div style={{width:"50%",height:"480px",float:'right'}}>
            <div class="fakepara" style={{height:'400px',color:'orange',width:'700px'}}>
              <br/><br/><br/><br/>
                          <h2>Amazon AWS</h2>
                          <br/><br/>
                          <h3>What is AWS used for?</h3>
                          <br/>
                          <h4>Image result for about aws
                              AWS is architected to be the most flexible and secure cloud computing environment available today. 
                              Our core infrastructure is built to satisfy the security requirements for the military, 
                              global banks, and other high-sensitivity organizations.
                          </h4>
              </div>
          </div>
        </div>  
        
      {/* </Box> */}
      {/* <Box sx={myStyle} > */}
        
      <div style={{width:"100%",height:"500px",alignContent:'center',marginTop:'0px'}}>
          <div style={{width:"520px",height:"400px",float:'right',marginLeft:'10px'}} >
          <img
            src={e2}
            alt="Info"
            style={{
              marginTop:'-60px',
              marginLeft:'-120px',
              width: '520px',
              height:"520px",
              
            }}
          />

          </div>
          <div style={{width:"50%",height:"480px",float:'right',marginLeft:'-120px'}}>
            <div class="fakepara" style={{height:'400px',color:'orange',width:'700px',marginLeft:'-120px'}}>
              <br/><br/>
                          <h2>Amazon AWS</h2>
                          <br/><br/>
                          <h3>What is AWS used for?</h3>
                          <br/>
                          <h4>Image result for about aws
                              AWS is architected to be the most flexible and secure cloud computing environment available today. 
                              Our core infrastructure is built to satisfy the security requirements for the military, 
                              global banks, and other high-sensitivity organizations.
                          </h4>
              </div>
          </div>
        </div>  
        
      
    {/* </Box> */}
    {/* <Box sx={myStyle} > */}
        
    <div style={{width:"100%",height:"500px",alignContent:'center',marginTop:'50px'}}>
          <div style={{width:"50%",height:"400px",float:'left'}} >
          <img
            src={e3}
            alt="Info"
            style={{
              marginTop:'-60px',
              marginLeft:'120px',
              width: '520px',
              height:"520px",
              
            }}
          />

          </div>
          <div style={{width:"50%",height:"480px",float:'right',marginTop:'-40px'}}>
            <div class="fakepara" style={{height:'400px',color:'orange',width:'700px'}}>
              <br/><br/><br/><br/>
                          <h2>Amazon AWS</h2>
                          <br/><br/>
                          <h3>What is AWS used for?</h3>
                          <br/>
                          <h4>Image result for about aws
                              AWS is architected to be the most flexible and secure cloud computing environment available today. 
                              Our core infrastructure is built to satisfy the security requirements for the military, 
                              global banks, and other high-sensitivity organizations.
                          </h4>
              </div>
          </div>
        </div>  
    {/* </Box> */}
    </>
    
     
  )
}

export default Cardd
 {/* <Stack direction="row" spacing={0}>
        <Item><img
                  src={e1}
                  alt="Info"
                  style={{
                    width: "500px",
                    height:"500px",
                    
                    verticalAlign: "center"
                  }}
                /></Item>
        <Item><img
                  src={e1}
                  alt="Info"
                  style={{
                    width: "500px",
                    height:"500px",
                    
                    verticalAlign: "center"
                  }}
                /></Item>
        
      </Stack> */}