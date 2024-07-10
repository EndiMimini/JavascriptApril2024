import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

export default function MultiActionAreaCardProducts(props) {
  const navigate = useNavigate()
  const {title, description,price, image, _id} = props
  const navigateToUserDetails = () => {
    axios.patch(`http://localhost:8000/api/products/view/${_id}`)
        .then(res => {
          navigate(`/products/${_id}`)
        })
      
    }
  return (
    <Card sx={{ }}>
      
      <CardActionArea onClick={navigateToUserDetails}>
        <div className="d-flex align-items-center">
        <img style={{width:'80px', height:'80px', borderRadius:'50%', padding:'4px', border:'1px solid gainsboro'}} src={image} alt={title}/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title} selling for ${price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </div>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link onClick={navigateToUserDetails}>See more details</Link>
        </Button>
      </CardActions>
    </Card>
  );
}