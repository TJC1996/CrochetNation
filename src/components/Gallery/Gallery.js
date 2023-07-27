import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Box from '@mui/material/Box';
import { Masonry } from '@mui/lab';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
// Products 
import img1 from './Photos/Crown_of_Roses.jpeg';
import img2 from './Photos/Green_Kitty_Beret.jpeg';
import img3 from './Photos/Tidal_Wave.jpeg';
import img4 from './Photos/Tall_Boy.png';
import img5 from './Photos/OB_Beret.png';

//Customer Images

import customer1 from './Customers/Customer1.png';
import customer2 from './Customers/Customer2.png';
import customer3 from './Customers/Customer3.png';
import customer4 from './Customers/Customer4.png';
import customer5 from './Customers/Customer5.png';
import customer6 from './Customers/Customer6.png';

const Label = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

const itemData = [
  {
    img: customer1,
    title: 'SMAC',
  },
  {
    img: customer2,
    title: 'Greem Kitty',
  },
  {
    img: customer3,
    title: 'Pinky Pony',
  },
  {
    img: customer4,
    title: 'Tall Boy',
  },
  {
    img: customer5,
    title: 'Scarf',
  },
  {
    img: customer6,
    title: 'SMAC Scarf',
  },
  // {
  //   img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
  //   title: 'Basketball',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
  //   title: 'Breakfast',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d',
  //   title: 'Tree',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
  //   title: 'Burger',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
  //   title: 'Camera',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
  //   title: 'Coffee',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1627000086207-76eabf23aa2e',
  //   title: 'Camping Car',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
  //   title: 'Hats',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
  //   title: 'Tomato basil',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7',
  //   title: 'Mountain',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
  //   title: 'Bike',
  // },
];

const galleryData = [
  {
    id: 1,
    images: [
      { src: img1, title: "Crown of Roses" },
      { src: img2, title: "Green Kitty Beret" },
      { src: img3, title: "Tidal Wave" },
      { src: img4, title: "Tall Boy" },
      { src: img5, title: "OB Beret" },
    ],
  },
  // More gallery items can be added here
];

const GalleryContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  // Add some padding for spacing
});



const titleStyles = {
  position: 'absolute',
  top: '10%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'black',
  padding: '10px',
  textAlign: 'center'
};


const imageContainerStyles = {
  height: '450px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
};

const imageStyles = {
  maxHeight: '100%',
  maxWidth: '100%',
  objectFit: 'contain',
  borderRadius: '15px',
};

const galleryContainerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  // Add some padding for spacing
};

const carouselContainerStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%', // Use 100% width to occupy the full container on mobile
  maxWidth: '60%', // Add a maximum width to keep the carousel centered and avoid stretching on larger screens
  padding: '10px',
  margin: '20px auto', // Adds vertical spacing and centers the container
};


function Gallery() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate fetching data
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }


  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{
        textAlign: 'center',
        marginTop: '50px',
        fontFamily: 'Dancing Script',
      }}>Gallery</h1>
      {galleryData.map((item) => (
        <div key={item.id} style={carouselContainerStyles}>
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={6000}
          >
            {item.images.map((image, index) => (
              <div key={index} style={imageContainerStyles}>
                <img src={image.src} alt={`Carousel ${item.id}`} style={imageStyles} />
                <p style={titleStyles}>{image.title}</p>  {/* render title here */}
              </div>
            ))}
          </Carousel>
        </div>
      ))}
      <h2 style={{ color: 'black', marginTop: '50px', marginBottom: '50px',  fontFamily: 'Dancing Script', }}>"Making people smile since 2023"</h2>
      <Box sx={{ width: '100%', minHeight: 400, padding: '0 16px' }}>
        {/* Use '100%' width and add padding to make it responsive */}
        <Masonry columns={3} spacing={2}>
          {itemData.map((item, index) => (
            <div key={index}>
              {/* <Label>{index + 1}</Label> */}
              <img
                src={`${item.img}?w=500&auto=format`}
                srcSet={`${item.img}?w=500&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                  display: 'block',
                  width: '100%',
                  maxHeight: '400px',
                  objectFit: 'cover',
                  marginBottom: '20px',
                }}
              />
            </div>
          ))}
        </Masonry>
      </Box>
    </div>
  );
}

export default Gallery;
