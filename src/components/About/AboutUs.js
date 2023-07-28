import React from 'react';
import { Avatar, Typography, Box } from '@mui/material';
import mom from '../../assets/Mom.jpeg';

const AboutUs = () => {
  return (
    <div 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '80vh' 
      }}
    >
      <div 
        style={{ 
          flexGrow: 1, 
          marginTop: '30px', 
          marginBottom: '30px', 
          maxWidth: '90%', 
          marginLeft: 'auto', 
          marginRight: 'auto', 
          padding: '0 10px', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center' 
        }}
      >
        <h1 style={{ textAlign: 'center' }}>About Us</h1>
        <Box 
          sx={{
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            marginBottom: '30px', 
            marginTop: "20px"
          }}
        >
          <Avatar 
            alt="Profile Picture" 
            src={mom} 
            sx={{ width: 256, height: 256 }}
          />
          <Typography variant="body1">Susan SMAC</Typography>
        </Box>

        <h3 style={{ textAlign: 'center' }}>Our Origin Story</h3>

        <p>
          In the heart of 2023, the seed for Crochet Nation took root and blossomed, driven by the vision of infusing the world with beauty and individuality, underpinned by a spirit of contemplation and intent.
        </p>
        <p>
          Our story is a tapestry woven from the rich threads of lives that have touched and shaped my own. My mother, a vibrant colorist who introduced me to the textile doyenne, Iris Apfel, instilled in me a profound appreciation for hue and texture.
        </p>
        <p>
          Yet, the heart of Crochet Nation pulses in rhythm with my grandmother Sophie, a skilled seamstress who journeyed across the seas from Czechoslovakia.
        </p>
        <p>
          Sophie's intricate handiwork was a marvel to behold. Her skills in crochet and knitting were second only to her adeptness at egg decoration and farming canning. I had the privilege of learning the art of crochet from her in my early years, a gift that I rediscovered and nurtured as an adult.
        </p>


        <h3>Materials and Values</h3>
        <p>We believe in transforming yarn and fibers into beautifully crafted garments that embody both function and style. With an emphasis on repurposing materials destined for recycling, we aim to breathe new life into discarded fabrics, underscoring our commitment to environmental responsibility. </p>
        <p>Our environmental commitment extends beyond our materials. We've partnered with Stripe Climate, a renowned initiative dedicated to reducing CO2 emissions. We contribute 0.5% of all our sales to this cause, actively supporting efforts to combat climate change with each purchase made by our valued customers.</p>
        <p>We prefer using sustainable materials such as bamboo yarn, with its natural softness and durability, and organic cotton yarns. When these are not available, we opt for luxurious chenille and velvet yarns, still adhering to our eco-friendly ethos.</p>
        <p>We pride ourselves on our adaptability, offering our clients the freedom to choose between premade garments or custom-made ones, tailored to individual color and design preferences. With each piece we create, we strive to balance unique aesthetic appeal with the sustainable practices that underpin our brand. Together with our customers and partners, we're crafting a greener future, one beautiful garment at a time.</p>
         
        <h3>Ordering & Delivery Details</h3>
        <p>
          Every garment birthed by Crochet Nation is a tangible embodiment of thoughtfulness and positive energy. Our items often feature bamboo yarn, although we also frequently use organic cotton, hand-dyed cotton, velvet, and chenille. In our mission to contribute to a sustainable future, some of our creations are spun from recycled, carefully cleansed clothing items transformed into yarn.
        </p>
        <p>
          Whether you prefer to specify your color scheme or make a selection from our website, rest assured that each piece you receive is uniquely crafted just for you. Please anticipate a creation period of approximately 2-4 weeks for each order.
        </p>


      </div>
    </div>
  );
};

export default AboutUs;


