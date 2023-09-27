import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { orange } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Records from './data.json';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import { Link } from 'react-router-dom';
import a1 from '../src/images/s1.2.jpg';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function Cardview()
{
  const myStyle=
    {
      backgroundImage: `url(${a1})` , 
      minWidth: 275,height:'550px',justifyContent:"center",marginBottom:3,justifyItems:"center" 
     
    };
  return(
    <Card  sx={myStyle}>
      <CardContent sx={{ alignContent:"center",alignItems:"center",textAlign:"center",alignSelf:"center",alignTracks:"center"}}>
          <Typography sx={{ fontSize: 35 ,alignContent:"center",marginTop:5}} component="div">
            <AssuredWorkloadIcon sx={{ fontSize: 70,color: orange[500],alignContent:"center" }}/>
          </Typography>
          
          <Typography sx={{ fontSize: 25  ,color:"white"}}  gutterBottom>
              <h2>AR 20</h2>
          </Typography>
                
          <Typography sx={{padding:1 ,color:"white"}}variant="body2">
            <h3>All semisters subjects pdf's of AR-20 regulation will be available here</h3>
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
            <Link style={{textDecoration: 'none',color:"white"}} to="./Products">
              <Button variant="contained" alignContent="center" color="primary" sx={{ height: 40 }}>
                Read More
              </Button>
            </Link>
            
          </Box>
      </CardActions>
    </Card>
  )
}

// function Cardview()
// {
//   return(
//     <div className='cardview'>

//       {
//         Records.map(data => {
//           return(
//             <div sx={{display:"flex"}} className='box1' key={data.id}>
//                 {/* <Container maxWidth="100%" >
//                   <Box sx={{ bgcolor: '#cfe8fc', height: '2000',marginRight:0,marginTop:10,width:'100%',padding:2,display:'flex' }} >
//                     <Grid container spacing={3}>
//                       <Grid item xs> */}
//                         <Card className='c1' sx={{ minWidth: 275,height:'500px',justifyContent:"center",marginBottom:3,justifyItems:"center" }}>
//                           <CardContent sx={{ alignContent:"center",alignItems:"center",textAlign:"center",alignSelf:"center",alignTracks:"center"}}>
//                               <Typography sx={{ fontSize: 35 ,alignContent:"center",marginTop:5}} component="div">
//                                 <AssuredWorkloadIcon sx={{ fontSize: 70,color: orange[500],alignContent:"center" }}/>
//                               </Typography>
                              
//                               <Typography sx={{ fontSize: 25 }}  gutterBottom>
//                                   <h2>{data.title}</h2>
//                               </Typography>
                                    
//                               <Typography sx={{padding:1}}variant="body2">
//                                 <h3>{data.content}</h3>
//                               </Typography>
//                           </CardContent>

//                           <CardActions sx={{marginLeft:20,marginTop:3,alignItems:"center",alignContent:"center" ,justifyItems:"center" }}>
//                                 <Box
//                                 marginLeft={20}
//                                 m={1}
//                                 display="flex"
//                                 justifyItems={"center"}
//                                 justifyContent="center"
//                                 alignItems="center"
                                    
//                               >
//                                 <Link style={{textDecoration: 'none',color:"white"}} to={data.nav}>
//                                   <Button variant="contained" alignContent="center" color="primary" sx={{ height: 40 }}>
//                                     Read More
//                                   </Button>
//                                 </Link>
                                
//                               </Box>
//                           </CardActions>
//                         </Card>
//                       {/* </Grid>
//                     </Grid>    
//                   </Box>
//                 </Container> */}
//             </div>
//           )
//         })
//       }


//     </div>
    
//   )
// }

// function Cardview()
// {
//   return(
//     <div className='cardview'>

//       {
//         Records.map(data => {
//           return(
//             <div className='box1' key={data.id}>
//               <Card sx={{ minWidth: 275,height:'500px',justifyContent:"center",marginBottom:3,justifyItems:"center" }}>
//                 <CardContent sx={{ alignContent:"center",alignItems:"center",textAlign:"center",alignSelf:"center",alignTracks:"center"}}>
//                     <Typography sx={{ fontSize: 35 ,alignContent:"center",marginTop:5}} component="div">
//                       <AssuredWorkloadIcon sx={{ fontSize: 70,color: orange[500],alignContent:"center" }}/>
//                     </Typography>
                    
//                     <Typography sx={{ fontSize: 25 }}  gutterBottom>
//                         <h2>{data.title}</h2>
//                     </Typography>
                          
//                     <Typography sx={{padding:1}}variant="body2">
//                       <h3>{data.content}</h3>
//                     </Typography>
//                 </CardContent>

//                 <CardActions sx={{marginLeft:20,marginTop:3,alignItems:"center",alignContent:"center" ,justifyItems:"center" }}>
//                       <Box
//                       marginLeft={20}
//                       m={1}
//                       display="flex"
//                       justifyItems={"center"}
//                       justifyContent="center"
//                       alignItems="center"
                          
//                     >
//                       <Link style={{textDecoration: 'none',color:"white"}} to={data.nav}>
//                         <Button variant="contained" alignContent="center" color="primary" sx={{ height: 40 }}>
//                           Read More
//                         </Button>
//                       </Link>
                      
//                     </Box>
//                 </CardActions>
//               </Card>
//             </div>
//           )
//         })
//       }


//     </div>
    
//   )
// }


export default Cardview;
      {/* <Card sx={{ minWidth: 275,height:'500px',justifyContent:"center",justifyItems:"center" }}>
              <CardContent sx={{ alignContent:"center",alignItems:"center",textAlign:"center",alignSelf:"center",alignTracks:"center"}}>
                  <Typography sx={{ fontSize: 35 ,alignContent:"center",marginTop:5}} component="div">
                    <AssuredWorkloadIcon sx={{ fontSize: 70,color: orange[500],alignContent:"center" }}/>
                  </Typography>
                  data.map(record => {

                  })
                  <Typography sx={{ fontSize: 25 }}  gutterBottom>
                      <h2>AR 20</h2>
                  </Typography>
                        
                  <Typography sx={{padding:1}}variant="body2">
                    <h3>All semisters subjects pdf's of AR-20 regulation will be available here</h3>
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
                    <Button variant="contained" alignContent="center" color="primary" sx={{ height: 40 }}>
                      Read More
                    </Button>
                  </Box>
              </CardActions>

    </Card> */}


// const newdata=data.map((data)=>{
//   return(
//     <Card sx={{ minWidth: 275,height:'500px',justifyContent:"center",justifyItems:"center" }}>
//             <CardContent sx={{ alignContent:"center",alignItems:"center",textAlign:"center",alignSelf:"center",alignTracks:"center"}}>

//               <Typography sx={{ fontSize: 35 ,alignContent:"center",marginTop:5}} component="div">
//                 <AssuredWorkloadIcon sx={{ fontSize: 70,color: orange[500],alignContent:"center" }}/>
//               </Typography>

//               <Typography sx={{ fontSize: 25 }}  gutterBottom>
//                 <h2>{data.h1}</h2>
//               </Typography>
              
             
//               <Typography sx={{padding:1}}variant="body2">
//               <h3>{data.h2}</h3>
//               </Typography>

//             </CardContent>

//             <CardActions sx={{marginLeft:20,marginTop:3,alignItems:"center",alignContent:"center" ,justifyItems:"center" }}>
//                   <Box
//                   marginLeft={20}
//                   m={1}
//                   display="flex"
//                   justifyItems={"center"}
//                   justifyContent="center"
//                   alignItems="center"
                  
//                 >
//                   <Button variant="contained" alignContent="center" color="primary" sx={{ height: 40 }}>
//                     Read More
//                   </Button>
//                 </Box>
//             </CardActions>

//           </Card>

//   )
// }
// )

// function Cardview() 
// {
//   const [data , setData]=useState(null)

// // Fetch Function   
//   fetch("src/data.json").then(
//     function(res){
//     return res.json()
//   }).then(function(data){
//   // store Data in State Data Variable
//     setData(data)
//   }).catch(
//     function(err){
//       console.log(err, ' error')
//     }
//   )
//   return (
//     <div className="Cardview">
//       {
//         data? data.map(
//           function(data){
//             return(
//               <Card sx={{ minWidth: 275,height:'500px',justifyContent:"center",justifyItems:"center" }}>
//               <CardContent sx={{ alignContent:"center",alignItems:"center",textAlign:"center",alignSelf:"center",alignTracks:"center"}}>

//                 <Typography sx={{ fontSize: 35 ,alignContent:"center",marginTop:5}} component="div">
//                   <AssuredWorkloadIcon sx={{ fontSize: 70,color: orange[500],alignContent:"center" }}/>
//                 </Typography>

//                 <Typography sx={{ fontSize: 25 }}  gutterBottom>
//                   <h2>{data.title}</h2>
//                 </Typography>
                
              
//                 <Typography sx={{padding:1}}variant="body2">
//                 <h3>{data.content}</h3>
//                 </Typography>

//               </CardContent>

//               <CardActions sx={{marginLeft:20,marginTop:3,alignItems:"center",alignContent:"center" ,justifyItems:"center" }}>
//                     <Box
//                     marginLeft={20}
//                     m={1}
//                     display="flex"
//                     justifyItems={"center"}
//                     justifyContent="center"
//                     alignItems="center"
                    
//                   >
//                     <Button variant="contained" alignContent="center" color="primary" sx={{ height: 40 }}>
//                       Read More
//                     </Button>
//                   </Box>
//               </CardActions>

//             </Card>
//             )


//           }
//         ):""
//       }
//     </div>
    
   
    
//     // <Card sx={{ minWidth: 275,height:'500px',justifyContent:"center",justifyItems:"center" }}>
//     //         <CardContent sx={{ alignContent:"center",alignItems:"center",textAlign:"center",alignSelf:"center",alignTracks:"center"}}>

//     //           <Typography sx={{ fontSize: 35 ,alignContent:"center",marginTop:5}} component="div">
//     //             <AssuredWorkloadIcon sx={{ fontSize: 70,color: orange[500],alignContent:"center" }}/>
//     //           </Typography>

//     //           <Typography sx={{ fontSize: 25 }}  gutterBottom>
//     //             <h2>AR 20</h2>
//     //           </Typography>
              
             
//     //           <Typography sx={{padding:1}}variant="body2">
//     //           <h3>All semisters subjects pdf's of AR-20 regulation will be available here</h3>
//     //           </Typography>

//     //         </CardContent>

//     //         <CardActions sx={{marginLeft:20,marginTop:3,alignItems:"center",alignContent:"center" ,justifyItems:"center" }}>
//     //               <Box
//     //               marginLeft={20}
//     //               m={1}
//     //               display="flex"
//     //               justifyItems={"center"}
//     //               justifyContent="center"
//     //               alignItems="center"
                  
//     //             >
//     //               <Button variant="contained" alignContent="center" color="primary" sx={{ height: 40 }}>
//     //                 Read More
//     //               </Button>
//     //             </Box>
//     //         </CardActions>

//     //       </Card>
//   );
// };



