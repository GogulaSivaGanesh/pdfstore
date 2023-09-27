import { Outlet } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';

import { Link } from 'react-router-dom';
import React, { useEffect , useRef} from "react";

import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Cardview from "../Cardview";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Cardview1 from '../Cardview1';
import Cardview2 from '../Cardview2';
import a1 from '../images/bg.png';


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
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import WebViewer from '@pdftron/pdfjs-express';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(name, calories, fat, carbs, protein, price) {
    return {
      name,
      calories,
      fat,
      carbs,
      protein,
      price,
      history: [
        {
          date: '1.Water',
          customerId: 
          <Button variant="contained" sx={{marginTop:0,padding:0}} >
            <a style={{textDecoration: "none" ,color:'white'}}  href="https://aec.edu.in/thubzone/syllabus/10.%20AR20_AIML%20_(I-IV)syllabus%20)revised%2020th%20July%202022.pdf" target="_blank">
                View</a> 
          </Button>,
          
          questions:
          <Button variant="contained" sx={{marginTop:0,padding:0}} >
            <a style={{textDecoration: "none" ,color:'white'}}  href="https://aec.edu.in/thubzone/syllabus/10.%20AR20_AIML%20_(I-IV)syllabus%20)revised%2020th%20July%202022.pdf" target="_blank">
                View</a> 
          </Button>
        },
        {
          date: '2',
          customerId: 
          <Button variant="contained" sx={{marginTop:0,padding:0}} >
          <a style={{textDecoration: "none" ,color:'white'}}  href="https://aec.edu.in/thubzone/syllabus/10.%20AR20_AIML%20_(I-IV)syllabus%20)revised%2020th%20July%202022.pdf" target="_blank">
              View</a> 
        </Button>,
          
          questions:
          <Button variant="contained" sx={{marginTop:0,padding:0}} >
            <a style={{textDecoration: "none" ,color:'white'}}  href="https://aec.edu.in/thubzone/syllabus/10.%20AR20_AIML%20_(I-IV)syllabus%20)revised%2020th%20July%202022.pdf" target="_blank">
                View</a> 
          </Button>
        },
        {
            date: '3',
            customerId:
            <Button variant="contained" sx={{marginTop:0,padding:0}} >
            <a style={{textDecoration: "none" ,color:'white'}}  href="https://aec.edu.in/thubzone/syllabus/10.%20AR20_AIML%20_(I-IV)syllabus%20)revised%2020th%20July%202022.pdf" target="_blank">
                View</a> 
          </Button>,
            
            questions:
          <Button variant="contained" sx={{marginTop:0,padding:0}} >
            <a style={{textDecoration: "none" ,color:'white'}}  href="https://aec.edu.in/thubzone/syllabus/10.%20AR20_AIML%20_(I-IV)syllabus%20)revised%2020th%20July%202022.pdf" target="_blank">
                View</a> 
          </Button>
          },
          {
            date: '4',
            customerId:
            <Button variant="contained" sx={{marginTop:0,padding:0}} >
            <a style={{textDecoration: "none" ,color:'white'}}  href="https://aec.edu.in/thubzone/syllabus/10.%20AR20_AIML%20_(I-IV)syllabus%20)revised%2020th%20July%202022.pdf" target="_blank">
                View</a> 
          </Button>,
            
            questions:
          <Button variant="contained" sx={{marginTop:0,padding:0}} >
            <a href="whatsapp://send?text=https://www.freepnglogos.com/uploads/whatsapp-png-image-9.png"  rel="nofollow noopener" target="_blank" className="share-icon">
                <img src="https://www.freepnglogos.com/uploads/whatsapp-png-image-9.png" style={{height:'36px'}}/>
            Share via Whatsapp</a> 
          </Button>
          },
          {
            date: '5',
            customerId:
            <Button variant="contained" sx={{marginTop:0,padding:0}} >
            <a style={{textDecoration: "none" ,color:'white'}}  href="https://aec.edu.in/thubzone/syllabus/10.%20AR20_AIML%20_(I-IV)syllabus%20)revised%2020th%20July%202022.pdf" target="_blank">
                View</a> 
          </Button>,
            
            questions:
          <Button variant="contained" sx={{marginTop:0,padding:0}} >
            <a style={{textDecoration: "none" ,color:'white'}}  href="https://aec.edu.in/thubzone/syllabus/10.%20AR20_AIML%20_(I-IV)syllabus%20)revised%2020th%20July%202022.pdf" target="_blank">
                View</a> 
          </Button>
          }
      ],
    };
  }
  
  function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
  
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="right">{row.calories}</TableCell>
          <TableCell align="right">{row.fat}</TableCell>
          <TableCell align="right">{row.carbs}</TableCell>
          <TableCell align="right">{row.protein}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
               
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell><h2>Units</h2></TableCell>
                      <TableCell><h2>Sub Topics</h2></TableCell>
                      <TableCell align="right"><h2>Material</h2></TableCell>
                      <TableCell align="right"><h2>Important Questions</h2></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.history.map((historyRow) => (
                      <TableRow key={historyRow.date}>
                        <TableCell component="th" scope="row">
                          {historyRow.date}
                        </TableCell>
                        <TableCell>{historyRow.customerId}</TableCell>
                        <TableCell align="right">{historyRow.questions}</TableCell>
                        <TableCell align="right">{historyRow.questions}</TableCell>
                        {/* <TableCell align="right">{historyRow.amount}</TableCell> */}
                        
                        
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  
  Row.propTypes = {
    row: PropTypes.shape({
      calories: PropTypes.number.isRequired,
      carbs: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      history: PropTypes.arrayOf(
        PropTypes.shape({
          amount: PropTypes.number.isRequired,
          customerId: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
          questions:PropTypes.string.isRequired,
        }),
      ).isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      protein: PropTypes.number.isRequired,
    }).isRequired,
  };
  
  const rows2 = [
    createData(<h3>English</h3>),
    createData(<h3>Maths</h3>),
    createData(<h3>Chemistry</h3>),
    createData(<h3>C Programming</h3>),
    createData(<h3>Workshop</h3>),
  ];
  
  


function createData2(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(<h3>English</h3>, 159,<Box sx={{marginTop:10,padding:2}} >
  <a href="https://aec.edu.in/thubzone/syllabus/1.AR20_CE_I%20to%20VIII_09.07.2022.pdf" target="_blank">Read more</a> 

 </Box> , <a  href="https://drive.google.com/uc?export=download&amp;id=13gQaqdq_9OvqC6eA63ncF1shNjr3YFrg" download='image'>
                                <button class="btn_download">Download
                                </button>
                            </a>   , 4.0),
  createData(<h3>Maths</h3>, 237, 9.0, 37, 4.3),
  createData(<h3>Chemistry</h3>, 262, 16.0, 24, 6.0),
  createData(<h3>C Programming</h3>, 305, 3.7, 67, 4.3),
  createData(<h3>Workshop</h3>, 356, 16.0, 49, 3.9),
];


const Item2 = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
  }));
  
  const darkTheme = createTheme({ palette: { mode: 'dark' } });
  const lightTheme = createTheme({ palette: { mode: 'light' } });

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

const Cse = () => {

const viewer = useRef(null);

useEffect(() => {
    WebViewer(
      {
        path: '/webviewer/lib',
        initialDoc: '/files/pdftron_about.pdf',
      },
      viewer.current,
    ).then((instance) => {

      });
}, []);
    
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
        padding: theme.spacing(2),
        borderTop: '1px solid rgba(0, 0, 0, .125)',
}));
      
const [expanded, setExpanded] = React.useState(false);

const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

const myStyle=
  {
    backgroundImage: `url(${a1})` , 
    height: '500',
    marginTop:8.15,
    marginBottom:0,
    flexdirection:"row",
    display:"flex",flexdirection: "row",
    width:'97.9%',
    padding:2,
    display:'flex'
  };
  return (
    <>
      <Navbar />
      {/* <div className="MyComponent">
      <div className="header">React sample</div>
      <div className="webviewer" ref={viewer}></div>
    </div> */}
    
    


        <Box sx={{marginTop:10,padding:2}}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        <h2>Semester - 1</h2> 
                    </Typography>
                    
                </AccordionSummary>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">

                            <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                        <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell><h1>SUBJECTS</h1></TableCell>
                            {/* <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows2.map((row) => (
                            <Row key={row.name} row={row} />
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                                {/* <TableHead>
                                    <TableRow>
                                        <TableCell><h3>SUBJECTS</h3></TableCell>
                                        <TableCell align="right"><h3>SYLLABUS</h3></TableCell>
                                        <TableCell align="right"><h3>MATERIALS</h3></TableCell>
                                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                    </TableRow>
                                </TableHead> */}
                                {/* <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.calories}</TableCell>
                                        <TableCell align="right">{row.fat}</TableCell>
                                         <TableCell align="right">{row.carbs}</TableCell>
                                        <TableCell align="right">{row.protein}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody> */}
                                
                            </Table>
                        </TableContainer>
                
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
                >
                <Typography sx={{ width: '33%', flexShrink: 0 }}><h2>Semester - 2</h2> </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                    You are currently not an owner
                </Typography>
                </AccordionSummary>

                <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                        <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows2.map((row) => (
                            <Row key={row.name} row={row} />
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <AccordionDetails>
                <Typography>
                    Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                    varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                    laoreet.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
                >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                <h2>Semester - 3</h2> 
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                    Filtering has been entirely disabled for whole web server
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
                >
                <Typography sx={{ width: '33%', flexShrink: 0 }}><h2>Semester - 4</h2> </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    <h2>Semester - 5</h2> 
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Link style={{textDecoration: 'none',color:"white"}} to="./Products">
                        <Button variant="contained" alignContent="center" color="primary" sx={{ height: 40 }}>
                            Read More
                        </Button>
                    </Link>
                    <Link style={{textDecoration: 'none',color:"white"}} to="./Products">
                        <Button variant="contained" alignContent="center" color="primary" sx={{ height: 40 }}>
                            Read More
                        </Button>
                    </Link>
                    <Typography>
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                        Aliquam eget maximus est, id dignissim quam.
                    </Typography>

                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
                >
                <Typography sx={{ width: '33%', flexShrink: 0 }}><h2>Semester - 6</h2> </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                    You are currently not an owner
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                    varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                    laoreet.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
                >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                <h2>Semester - 7</h2> 
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                    Filtering has been entirely disabled for whole web server
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
                >
                <Typography sx={{ width: '33%', flexShrink: 0 }}><h2>Semester - 8</h2> </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    
    </>
  );
};
export default Cse;

// function Cardview3()
// {
//   return(
//     <div className='cardview'>

//       {
//         Records.map(data => {
//           return(
//             <Stack direction="row" spacing={2}  >
//                 <Card className='c1' sx={{ minWidth: 275,height:'500px',justifyContent:"center",marginBottom:3,justifyItems:"center" }}>
//                   <CardContent sx={{ alignContent:"center",alignItems:"center",textAlign:"center",alignSelf:"center",alignTracks:"center"}}>
//                       <Typography sx={{ fontSize: 35 ,alignContent:"center",marginTop:5}} component="div">
//                         <AssuredWorkloadIcon sx={{ fontSize: 70,color: orange[500],alignContent:"center" }}/>
//                       </Typography>
                      
//                       <Typography sx={{ fontSize: 25 }}  gutterBottom>
//                           <h2>{data.title}</h2>
//                       </Typography>
                            
//                       <Typography sx={{padding:1}}variant="body2">
//                         <h3>{data.content}</h3>
//                       </Typography>
//                   </CardContent>

//                   <CardActions sx={{marginLeft:20,marginTop:3,alignItems:"center",alignContent:"center" ,justifyItems:"center" }}>
//                         <Box
//                         marginLeft={20}
//                         m={1}
//                         display="flex"
//                         justifyItems={"center"}
//                         justifyContent="center"
//                         alignItems="center"
                            
//                       >
//                         <Link style={{textDecoration: 'none',color:"white"}} to={data.nav}>
//                           <Button variant="contained" alignContent="center" color="primary" sx={{ height: 40 }}>
//                             Read More
//                           </Button>
//                         </Link>
                        
//                       </Box>
//                   </CardActions>
//                 </Card>
//             </Stack>
//           )
//         })
//       }


//     </div>
    
//   )
// }