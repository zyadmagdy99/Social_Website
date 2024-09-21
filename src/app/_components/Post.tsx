"use client"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { grey, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Posts , comment } from '../_interfaces/posts';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Box, TextField } from '@mui/material';
import imgo from "../../assits/images.jpeg"


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function Poster({postObj} :{postObj:Posts}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let route = useRouter()
  function hundleimg(src:string){
  let srcparts = src.split("/")
  let last = srcparts[srcparts.length-1]
  if(last =="undefined"){
    return imgo
  }else{
    return src
  }
    }
 function handleNavigation(id:string){
    route.push(`/user/${id}`)
  }

  function handlecomment(id:string){
    route.push(`/post/${id}`)
  }

  return (
    <Card style={{marginBlock:"30px"}} sx={{ width: "100%" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500],cursor:"pointer" }} aria-label="recipe">
             <Image
             onClick={()=>{handleNavigation(postObj.user._id)}}
      src={postObj.user.photo}
      width={150}
      height={150}
      alt="Picture of the author"
    />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={postObj.user.name}
        onClick={()=>{handleNavigation(postObj.user._id)}}

        titleTypographyProps={{
            sx: {cursor:"pointer"}
        }}
        subheader={postObj.createdAt}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {postObj.body}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="220"
        image={postObj.image}
        alt="Paella dish"
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <ThumbUpIcon />
        </IconButton>
        <IconButton aria-label="share">
          <CommentIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
         {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
      </CardActions>
      <TextField fullWidth placeholder='Enter your Comment...'  id="outlined-basic"  variant="outlined" />
      {postObj.comments.length > 0 ?       <Box       style={{backgroundColor:"grey"}}
      >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500],cursor:"pointer" }} aria-label="recipe">
             <Image
             onClick={()=>{handleNavigation(postObj.comments[0].commentCreator._id)}}
      src={hundleimg(postObj.comments[0].commentCreator.photo)}
      width={150}
      height={150}
      alt="Picture of the author"
    />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }
        title={postObj.comments[0].commentCreator.name}
        onClick={()=>{handleNavigation(postObj.comments[0].commentCreator._id)}}

        titleTypographyProps={{
            sx: {cursor:"pointer"}
        }}
        subheader={postObj.comments[0].createdAt}
      />
         <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {postObj.comments[0].content}
        </Typography>
      </CardContent>
      </Box> : ""}
      {postObj.comments.length > 1 ?  <Typography onClick={()=>{handlecomment(postObj._id)}} style={{cursor:"pointer",margin:"10px"}} variant='h6' component="p" >show more comments ..</Typography> : ""    }
   



      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>  */}
    </Card>
  );
}
