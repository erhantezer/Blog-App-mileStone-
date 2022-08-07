import { Box, Button, Container, createTheme, CssBaseline, TextField, ThemeProvider, Typography } from '@mui/material';
import React from 'react'





const theme = createTheme();

// const inputValues = {
//   title: "",
//   content: "",
//   imageUrl: "",

// }

const NewBlog = () => {
  return (
    <div  style={{
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor: (t) =>
        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      height: "91vh",

    }}> 
    <div  style={{display: 'flex', flexDirection: 'column',alignItems: 'center',justifyContent: 'center',height:"80vh"}}>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'bisque',
            borderRadius: '10px',
            padding: '20px',
            
          }}
        >
          
          <Box component="form" /* onSubmit={(e)=>handleFormSubmit(e)} */ noValidate sx={{ mt: 1 }}>
          <Typography component="h1" variant="h5" sx={{color: 'darkslategray',letterSpacing:"3px",fontFamily: 'fantasy',marginTop:"10px"}}>
            New Blog
    </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              autoComplete="title"
              autoFocus
              
              color="success"
              
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="imageUrl"
              label="Image URL"
              type="url"
              id="imageUrl"
              
              color="success"
              
            />
            
            <TextField
              placeholder="Content"
              multiline
              rows={8}
              margin="normal"
              required
              fullWidth
              name="content"
              label="Content"
              id="content"
              
              sx={{}}
              color="success"
              
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,backgroundColor:"darkslategrey" }}
              
            >
              Add Blog
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
    </div>
  );
}

export default NewBlog