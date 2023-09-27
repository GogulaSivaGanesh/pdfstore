import { Link } from 'react-router-dom';
import products from '../data';
import Navbar from '../components/Navbar';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import a1 from '../images/s1.2.jpg';
import { orange } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  backgroundImage: `url(${a1})` ,
  height:350,
  color:'white',
  borderRadius:20,
  // color: theme.palette.text.secondary,
}));
function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
            
        <Item>
          <Typography sx={{ fontSize: 35 ,alignContent:"center",marginTop:5}} component="div">
                <AssuredWorkloadIcon sx={{ fontSize: 70,color: orange[500],alignContent:"center" }}/>
          </Typography><h1>CSE</h1>
          <h2>PDF Materials</h2>
          <Link style={{textDecoration: 'none',color:"white",marginTop:3}} to="/Cse">
                <Button variant="contained" alignContent="center" color="primary" sx={{ height: 40,marginTop:5 }}>
                    Read More
                </Button>
          </Link>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <Typography sx={{ fontSize: 35 ,alignContent:"center",marginTop:5}} component="div">
                <AssuredWorkloadIcon sx={{ fontSize: 70,color: orange[500],alignContent:"center" }}/>
          </Typography>
          <h1>ECE</h1>
          <h2>PDF Materials</h2>
          <Link style={{textDecoration: 'none',color:"white",marginTop:3}} to="/Ece">
                <Button variant="contained" alignContent="center" color="primary" sx={{ height: 40,marginTop:5 }}>
                    Read More
                </Button>
          </Link>
          </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <Typography sx={{ fontSize: 35 ,alignContent:"center",marginTop:5}} component="div">
                <AssuredWorkloadIcon sx={{ fontSize: 70,color: orange[500],alignContent:"center" }}/>
          </Typography>
          <h1>AIML</h1>
          <h2>PDF Materials</h2>
          <Link style={{textDecoration: 'none',color:"white",marginTop:3}} to="/Aiml">
                <Button variant="contained" alignContent="center" color="primary" sx={{ height: 40,marginTop:5 }}>
                    Read More
                </Button>
          </Link>
          </Item>
      </Grid>
    </React.Fragment>
  );
}
function FormRow2() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Item>
          <Typography sx={{ fontSize: 35 ,alignContent:"center",marginTop:5}} component="div">
                <AssuredWorkloadIcon sx={{ fontSize: 70,color: orange[500],alignContent:"center" }}/>
          </Typography>
          <h1>IT</h1>
          <h2>PDF Materials</h2>
          <Link style={{textDecoration: 'none',color:"white",marginTop:3}} to="/It">
                <Button variant="contained" alignContent="center" color="primary" sx={{ height: 40,marginTop:5 }}>
                    Read More
                </Button>
          </Link>
          </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <Typography sx={{ fontSize: 35 ,alignContent:"center",marginTop:5}} component="div">
                <AssuredWorkloadIcon sx={{ fontSize: 70,color: orange[500],alignContent:"center" }}/>
          </Typography>
          <h1>EEE</h1>
          <h2>PDF Materials</h2>
          <Link style={{textDecoration: 'none',color:"white",marginTop:3}} to="/Eee">
                <Button variant="contained" alignContent="center" color="primary" sx={{ height: 40,marginTop:5 }}>
                    Read More
                </Button>
          </Link>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <Typography sx={{ fontSize: 35 ,alignContent:"center",marginTop:5}} component="div">
                <AssuredWorkloadIcon sx={{ fontSize: 70,color: orange[500],alignContent:"center" }}/>
          </Typography>
          <h1>MECH</h1>
          <h2>PDF Materials</h2>
          <Link style={{textDecoration: 'none',color:"white",marginTop:3}} to="/Mech">
                <Button variant="contained" alignContent="center" color="primary" sx={{ height: 40,marginTop:5 }}>
                    Read More
                </Button>
          </Link>
        </Item>
      </Grid>
    </React.Fragment>
  );
}

function FormRow3() {
  return (
    <React.Fragment>
      <Grid item xs={4}>

        <Item>
          <Typography sx={{ fontSize: 35 ,alignContent:"center",marginTop:5}} component="div">
                <AssuredWorkloadIcon sx={{ fontSize: 70,color: orange[500],alignContent:"center" }}/>
          </Typography>
          <h1>CIVIL</h1>
          <h2>PDF Materials</h2>
          <Link style={{textDecoration: 'none',color:"white",marginTop:3}} to="/Civil">
                <Button variant="contained" alignContent="center" color="primary" sx={{ height: 40,marginTop:5 }}>
                    Read More
                </Button>
          </Link>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <Typography sx={{ fontSize: 35 ,alignContent:"center",marginTop:5}} component="div">
                <AssuredWorkloadIcon sx={{ fontSize: 70,color: orange[500],alignContent:"center" }}/>
          </Typography>
          <h1>AGRICULTURE</h1>
          <h2>PDF Materials</h2>
          <Link style={{textDecoration: 'none',color:"white",marginTop:3}} to="/Agriculture">
                <Button variant="contained" alignContent="center" color="primary" sx={{ height: 40,marginTop:5 }}>
                    Read More
                </Button>
          </Link>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <Typography sx={{ fontSize: 35 ,alignContent:"center",marginTop:5}} component="div">
                <AssuredWorkloadIcon sx={{ fontSize: 70,color: orange[500],alignContent:"center" }}/>
          </Typography>
          <h1>PETROLEUM</h1>
          <h2>PDF Materials</h2>
          <Link style={{textDecoration: 'none',color:"white",marginTop:3}} to="/Petroleum">
                <Button variant="contained" alignContent="center" color="primary" sx={{ height: 40,marginTop:5 }}>
                    Read More
                </Button>
          </Link>
        </Item>
      </Grid>
    </React.Fragment>
  );
}


const Products = () => {
  return (
    <><Navbar/>
    {/* <section className='section'>
      <h2>Contact</h2>
      <Link to='/' className='btn'>
        Back Home
      </Link>
    </section> */}
    
    <Box sx={{ flexGrow: 1 ,marginTop:10,marginLeft:2,marginRight:2,marginBottom:5}}>
      <Grid container spacing={2}>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow2 />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow3 />
        </Grid>
      </Grid>
    </Box>

    </>
    
    // <section className='section'>
    //   <div className='products'>
    //     {products.map((product) => {
    //       return (
    //         <article key={product.id}>
    //           <h5>{product.name}</h5>
    //           <Link to={`/products/${product.id}`}>more info</Link>
    //         </article>
    //       );
    //     })}
    //   </div>
    // </section>
  );
};

export default Products;