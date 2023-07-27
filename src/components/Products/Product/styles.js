
import { styled } from '@mui/system';
import { Card, CardMedia, CardActions, CardContent, DialogContent } from '@mui/material';



// export const StyledCard = styled(Card)(({ theme }) => ({
//   maxWidth: '100%',
  
// }));

export const DialogImage = styled(DialogContent)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& img': {
    maxWidth: '100%',
    height: 'auto',
  },
}));

export const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: '100%',
  height: '600px', // this should be adjusted according to your requirements
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

// export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
//   height: 0,
//   paddingTop: '56.25%',
// }));

export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: '300px', // this should be adjusted according to your requirements
  width: '100%',
  objectFit: 'cover',
}));

export const StyledCardActions = styled(CardActions)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
}));

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
}));
