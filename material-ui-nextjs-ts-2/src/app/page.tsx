
import * as React from 'react';
import Container from "@mui/material/Container";

import Appheader from "@/components/Appheder/Appheder";
import MovieList from '@/components/mid/MovieList';


export default function Home() {
  return (
    <>
      
      <Appheader/>
      
      <Container maxWidth="xl">
        <MovieList />
      </Container>
      

    </>
  );
}
