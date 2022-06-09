import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function TodoLayout() {
    return (
      <div>
        <Container maxWidth='sm'>
          <Outlet />
        </Container>
      </div>
    );
  }
  