import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import Records from './data.json';
import { orange } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import { Link } from 'react-router-dom';
import a1 from '../src/images/s1.2.jpg';
import { FaGraduationCap } from "react-icons/fa";


function Cardview2()
{
    const myStyle=
    {
      backgroundImage: `url(${a1})` , 
      minWidth: 275,height:'550px',justifyContent:"center",marginBottom:3,justifyItems:"center" 
     
    };
  return(
        <Card sx={myStyle}>
        <CardContent sx={{ alignContent:"center",alignItems:"center",textAlign:"center",alignSelf:"center",alignTracks:"center"}}>
            <Typography sx={{ fontSize: 35 ,alignContent:"center",marginTop:5}} component="div">
                <AssuredWorkloadIcon sx={{ fontSize: 70,color: orange[500],alignContent:"center" }}/>
            </Typography>
            
            <Typography sx={{ fontSize: 25 ,color:"white"}}  gutterBottom>
                <h2>AR 17</h2>
            </Typography>
                    
            <Typography sx={{padding:1,color:"white"}}variant="body2">
                <h3>All semisters subjects pdf's of AR-17 regulation will be available here</h3>
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
                <Link style={{textDecoration: 'none',color:"white"}} to="./About">
                <Button variant="contained" alignContent="center" color="primary" sx={{ height: 40 }}>
                    Read More
                </Button>
                </Link>
                
            </Box>
        </CardActions>
        </Card>
  )
}

export default Cardview2