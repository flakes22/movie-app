import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import StarIcon from '@mui/icons-material/Star';
import Icon from '@mui/material/Icon';

export default function MovieCard({ movie }) {
  const { Title, Poster, Director, Writer,Genre,imdbRating,Runtime } = movie;

  return (
    <Grid item xs={3}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={Poster || "https://via.placeholder.com/300x140?text=No+Image"}
        title={Title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Title || "Untitled"}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Directed by: {Director || 'N/A'}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Written by: {Writer || 'N/A'}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <Chip label={Genre} />
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Duration: {Runtime || 'NA'}
        </Typography>
        
        
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <Icon>
          <StarIcon></StarIcon>
        </Icon>{imdbRating || 'NA'}
        </Typography>
        
      </CardActions>
    </Card>
    </Grid>
  );
}
