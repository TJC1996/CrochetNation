
import { styled } from '@mui/system';
import { Card, CardMedia, CardActions, CardContent } from '@mui/material';



export const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: '100%',
  height: '450px', // set fixed height
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: '250px', // set fixed height
  width: '100%',
  objectFit: 'scale-down',
}));

export const StyledCardActions = styled(CardActions)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flex: '1 0 auto',
}));

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  flex: '1 0 auto',
}));
