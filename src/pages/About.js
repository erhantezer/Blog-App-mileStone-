import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, IconButton } from '@mui/material';
// import Anthony from ".././assets/anthony.png"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState } from 'react';



const About = () => {
  const [text,setText] = useState("erhantezer68@gmail.com")
  
  return (
    <div  style={{
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor: (t) =>
        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      height: "100vh",
    }}> 
      <div style={{display: 'flex', flexDirection: 'column',alignItems: 'center',justifyContent: 'center',height:"90vh", padding:"20px"}}>
      <Card sx={{ width: 345,height:"60vh", padding:"20px"}}>
      <CardActionArea sx={{padding:"5px"}}>
        <img src={[]} width="45%" height="35%" alt="erhan" />
        <CardContent sx={{marginTop:"25px"}}>
          <Typography gutterBottom variant="h2" component="div" sx={{fontFamily: "fantasy", marginTop:"20px"}}>
            Erhan TEZER
          </Typography >
          <Typography variant="p" >
          I'm a Frontend Web Developer with a passion for learning and building new things.
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{marginTop:"25px"}}>
          <a href={text} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none",color:"red"}}> {text}</a>
          </Typography >
          <IconButton onClick={()=>setText("www.linkedin.com/in/erhan-tezer")} >
            <LinkedInIcon sx={{color: "black",fontSize:35}}/>
            </IconButton>
            <IconButton onClick={()=>setText("erhantezer68@gmail.com")}>
            <GoogleIcon sx={{color: "black",fontSize:35}}/>
            </IconButton>
            <IconButton onClick={()=>setText("https://github.com/erhantezer")}>
            <GitHubIcon sx={{color: "black",fontSize:35}}/>
            </IconButton>
          

        </CardContent>
      </CardActionArea>
    </Card>
      </div>
    </div>
  )
}

export default About;