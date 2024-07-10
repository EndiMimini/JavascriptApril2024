import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import FaceIcon from '@mui/icons-material/Face';
import FaceRetouchingOffIcon from '@mui/icons-material/FaceRetouchingOff';
import Face from '@mui/icons-material/Face';
export default function MultiActionAreaCard(props) {
  const navigate = useNavigate()
  const {first_name, email,age,  _id} = props
  const navigateToUserDetails = () => navigate(`/users/${_id}`)
  return (
    <Card sx={{ }}>
      
      <CardActionArea onClick={navigateToUserDetails}>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {first_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link to={`/users/${_id}`}>See more details</Link>
        </Button>
      </CardActions>
    </Card>
  );
}