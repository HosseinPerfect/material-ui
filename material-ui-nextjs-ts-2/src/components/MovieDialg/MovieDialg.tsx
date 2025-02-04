import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {FC} from "react";

import {MovieType} from "@/Types/movie.type";

type OwnProps = {
  data: MovieType
  isOpen: boolean
}

const MovieDialog: FC<OwnProps> = (data, isOpen) => {
  console.log(isOpen)

  return (
    <>
      <Dialog
        open={false}
        PaperProps={{
          component: 'form',
        }}
      >
      </Dialog>
    </>
  );
}

export default MovieDialog;
