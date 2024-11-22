import * as React from 'react';
import {FC} from "react";

import Link from 'next/link'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';


import {MovieType} from "@/Types/movie.type";
import MovieDialog from "@/components/MovieDialg/MovieDialg";

const  MovieCard: FC<MovieType> = (movieData) => {

  const _movieData = movieData.data;

  const handleClick = () => {
    console.log(_movieData.title);
  }

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt={_movieData.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {_movieData.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <Link href={`/movies/${_movieData.id}`}>
        <CardActions>
          <Button size="small" color="primary">
            About
          </Button>
        </CardActions>
        </Link>
        
      </Card>
        
      <MovieDialog isOpen={false} />
    </Grid>
    
  );
}
export default MovieCard;