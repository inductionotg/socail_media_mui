
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { memo } from 'react';
import PostCardList from '../PostCardList/PostCardList';
import UserList from '../UserList/UserList';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function MainContainer() {
  return (
    <Box display="flex" justifyContent="center" sx={{ width: '100%', mt: '3rem' }}>
      <Grid container alignItems="start" justifyContent="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={0} md={3}>
          <UserList/>
        </Grid>
        <Grid item xs={12} md={9}>
          <PostCardList />
        </Grid>
      </Grid>
    </Box>
  );
}

export default memo(MainContainer);
