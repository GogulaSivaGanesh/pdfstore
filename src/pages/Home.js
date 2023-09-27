import { Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';

import { Link } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Cardview from "../Cardview";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Cardview1 from '../Cardview1';
import Cardview2 from '../Cardview2';
import a1 from '../images/bg.png';
import e1 from '../images/e1.png';
import e2 from '../images/e2.png';
import e3 from '../images/e3.png';
import Cardd from '../cards/Cardd';


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { orange } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Records from '../data.json';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Slider from "./Slider";
import Footer from "./Footer";

import "./home.css";
// src\assets\home\iphone_12_updated_large.jpg

const Thumbnail = ({ arr, image, index }) => {
  return (<div className="tumbnail">
    {
      arr.map((imgsrc, i) => (
        <img
          key={i}
          height="50"
          src={imgsrc}
          onClick={() => image(i)}
          className={index === i ? 'active' : ''}
        />
      ))
    }
  </div>)
}

const Slideshow = ({ imgs }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
  }, [])

  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }
  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1)
    } else {
      setIndex(index - 1)
    }
  }


  return (
    <div className="slideshow">
      <img className="mainImg" src={imgs[index]} />
      <div className="actions">
        <button onClick={prev}>👈</button>
        <button onClick={next}>👉</button>
      </div>
      <Thumbnail arr={imgs} image={setIndex} index={index} />
    </div>
  )
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
}
function Cardview3()
{
  return(
    <div className='cardview'>

      {
        Records.map(data => {
          return(
            <Stack direction="row" spacing={2}  >
                <Card className='c1' sx={{ minWidth: 275,height:'500px',justifyContent:"center",marginBottom:3,justifyItems:"center" }}>
                  <CardContent sx={{ alignContent:"center",alignItems:"center",textAlign:"center",alignSelf:"center",alignTracks:"center"}}>
                      <Typography sx={{ fontSize: 35 ,alignContent:"center",marginTop:5}} component="div">
                        <AssuredWorkloadIcon sx={{ fontSize: 70,color: orange[500],alignContent:"center" }}/>
                      </Typography>
                      
                      <Typography sx={{ fontSize: 25 }}  gutterBottom>
                          <h2>{data.title}</h2>
                      </Typography>
                            
                      <Typography sx={{padding:1}}variant="body2">
                        <h3>{data.content}</h3>
                      </Typography>
                  </CardContent>

                  <CardActions sx={{marginLeft:20,marginTop:3,alignItems:"center",alignContent:"center" ,justifyItems:"center" }}>
                        <Box
                        marginLeft={20}
                        m={1}
                        display="flex"
                        justifyItems={"center"}
                        justifyContent="center"
                        alignItems="center"
                            
                      >
                        <Link style={{textDecoration: 'none',color:"white"}} to={data.nav}>
                          <Button variant="contained" alignContent="center" color="primary" sx={{ height: 40 }}>
                            Read More
                          </Button>
                        </Link>
                        
                      </Box>
                  </CardActions>
                </Card>
            </Stack>
          )
        })
      }


    </div>
    
  )
}
const Home = () => {

  const myStyle=
  {
    // backgroundImage: `url(${a1})` , 
    height: '500',
    marginTop:0,
    marginBottom:0,
    position:'relative',
    flexdirection:"row",
    display:"flex",flexdirection: "row",
    width:'100%',
    padding:2,
    display:'flex'
  };
  return (
    <>
      <Navbar />
      <Slider />
      <Cardd/>
      

      

      <Box sx={myStyle} >
        <Grid container spacing={4}>
          <Grid item xs={4}>

            <Cardview/>
          </Grid>
          <Grid item xs={4}>
          <Cardview1/>
            {/* {
              Records.map(data => {
                return(
                  <Box sx={{display:"flex"}} className='box1' key={data.id}>
                      <Card className='c1' sx={{ minWidth: 275,height:'500px',justifyContent:"center",marginBottom:3,justifyItems:"center" }}>
                        <CardContent sx={{ alignContent:"center",alignItems:"center",textAlign:"center",alignSelf:"center",alignTracks:"center"}}>
                            <Typography sx={{ fontSize: 35 ,alignContent:"center",marginTop:5}} component="div">
                              <AssuredWorkloadIcon sx={{ fontSize: 70,color: orange[500],alignContent:"center" }}/>
                            </Typography>
                            
                            <Typography sx={{ fontSize: 25 }}  gutterBottom>
                                <h2>{data.title}</h2>
                            </Typography>
                                  
                            <Typography sx={{padding:1}}variant="body2">
                              <h3>{data.content}</h3>
                            </Typography>
                        </CardContent>
      
                        <CardActions sx={{marginLeft:20,marginTop:3,alignItems:"center",alignContent:"center" ,justifyItems:"center" }}>
                              <Box
                              marginLeft={20}
                              m={1}
                              display="flex"
                              justifyItems={"center"}
                              justifyContent="center"
                              alignItems="center"
                                  
                            >
                              <Link style={{textDecoration: 'none',color:"white"}} to={data.nav}>
                                <Button variant="contained" alignContent="center" color="primary" sx={{ height: 40 }}>
                                  Read More
                                </Button>
                              </Link>
                              
                            </Box>
                        </CardActions>
                      </Card>
                  </Box>
                )
              })

            } */}
          
          </Grid>
          
          <Grid item xs={4}>
            <Cardview2/>
          </Grid>
        </Grid> 
      </Box>
     
      <Footer />
    </>
  );
};
export default Home;