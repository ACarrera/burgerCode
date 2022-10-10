import React from 'react';
import {BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs';
import {FaHamburger} from 'react-icons/fa'
import {images} from '../../constants/images';
import Carousel from 'react-bootstrap/Carousel';

import './Gallery.css';


  const galleryImages = [images.burger1, images.burger2, images.burger3];


 const Gallery =() => {
    const scrollRef = React.useRef(null);

    const scroll =(direction) =>{
        const {current} = scrollRef;

        if(direction === "left"){
          current.scrollLeft -= 300;
        }else{
          current.scrollLeft += 300;
        }
    }

  return (
    <div className='app-gallery flex-center'>
      <div className='app-gallery-content'>
        <p className='hambu-gallery'><FaHamburger/></p>
        <h1 className='logo-text'>Dejate</h1>
        <h1 className='logo-text'>tentar</h1>
        <p className='card-text' style={{color:'var(--dark-red)', marginTop:'0', fontSize:"25px", fontWeight:"bold"}}>Con nuestras BurgersCode</p>
      </div>
      <div className='app-gallery-images'>
          <div className='app-gallery-images-container' ref={scrollRef}>
              {galleryImages.map((image, index)=>(
                  <div className='app-gallery-images-card flex-center' key={`gallery-image-${index +  1}`}>
                      <img src={image} alt="gallery"/>
                  </div>
              ))}
          </div>
          <div className='app-gallery-images-arrow'>
              <BsArrowLeftShort className='gallery-arrow-icons' onClick={()=> scroll('left')}  />
              <BsArrowRightShort className='gallery-arrow-icons' onClick={()=> scroll('right')} />
          </div>
      </div>
    </div>
 );

 }

 export default Gallery;