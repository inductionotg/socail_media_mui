
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import React from "react"
import { useState } from 'react';


function PostCard({content,image,authorName, publishedDate}) {
  const [isLike,setLiked]=useState(false)
  const [year, month, day] = new Date(publishedDate).toISOString().split('T')[0].split('-');

  return (
    <Card sx={{ maxWidth: 345 ,mb:'3rem'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {authorName.charAt(0).toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={authorName}
        subheader={`${day}-${month}-${year}`}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={()=>setLiked(!isLike)}>
          {isLike?<FavoriteIcon sx={{backgroundColor:red}} />:<FavoriteBorderOutlinedIcon  sx={{color:red}}/>}
        </IconButton>
      </CardActions>
    </Card>
  );
}
export default  React.memo(PostCard)