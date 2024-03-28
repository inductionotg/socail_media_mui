import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { LoadingButton } from '@mui/lab';
import axios from "axios"
import { usePost } from '../PostCardList/post-context';
 function InputField() {
    const [image,setImage] = React.useState('')
    const [text,setText] = React.useState('')
    const [loading,setLoading] = React.useState(false)
    const{post,setPost} = usePost()
    async function handlePost(){
        setLoading(true)
        const response = await axios.post('https://dummyapi.io/data/v1/post/create',{
            owner:'60d0fe4f5311236168a109ca',
            likes:50000,
            text:text,
            image:image,
            publishDate:new Date()
        },{
            headers:{'app-id':import.meta.env.VITE_KEY}
        })
        console.log(response.data)
        setPost([response.data,...post])
        setLoading(false)
        setText('')
        setImage('')
        
    }
  return (
    <Box>
      <TextField 
        fullWidth 
        sx={{mt:'1rem',mb:'1rem'}} 
        id="outlined-basic" 
        label="Enter the Post..." 
        variant="outlined" 
        value={text} 
        onChange={(e)=>setText(e.target.value)} 
    />
      <TextField 
        fullWidth 
        sx={{mt:'1rem',mb:'1rem'}} 
        id="outlined-basic" 
        label="Enter the image link..." 
        variant="outlined"
        value={image} 
        onChange={(e)=>setImage(e.target.value)}
    />
    {loading? <LoadingButton loading ></LoadingButton>:<Button loading onClick={handlePost} sx={{mt:'1rem',mb:'1rem'}} variant="contained">Contained</Button>}
     
    </Box>
  );
}
export default React.memo(InputField)