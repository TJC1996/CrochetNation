import React from 'react';
import { MDBFooter, MDBContainer, MDBBtn } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import logo from '../Images/Stripe Climate Badge.svg';
import styles from './styles.css';

export default function Footer() {
  return (
    <div style={{maxWidth: '100%', margin: '0 auto'}}>
      <MDBFooter className='text-center text-white' style={{ backgroundColor: '#D1E9FA' }}>
        <MDBContainer className='pt-4'>
          <section className='mb-4'>
            <MDBBtn rippleColor='dark' color='link' floating size='lg' className='text-dark m-1 instagram-button' href='https://www.instagram.com/crochetsocial/?utm_source=ig_embed&amp;utm_campaign=loading' target='_blank' rel='noopener noreferrer' role='button'>
              <FontAwesomeIcon icon={faInstagram} />
            </MDBBtn>
          </section>
        </MDBContainer>

        <div className='text-center text-light p-3' style={{ backgroundColor: '#0077B6' }}>
          © 2023 Copyright:
          <a className='text-light' href='/'>
            Crochet Nation
          </a>
          <img src={logo} alt="Logo" style={{width: '20px', height: '20px', marginLeft: '10px'}}/>
        </div>
      </MDBFooter>
    </div>
  );
}