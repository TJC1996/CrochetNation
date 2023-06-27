import { styled } from '@mui/system';
import { Card, CardMedia, CardActions, CardContent } from '@mui/material';



export const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: '100%',
}));

export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 0,
  paddingTop: '56.25%',
}));

export const StyledCardActions = styled(CardActions)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
}));

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
}));
