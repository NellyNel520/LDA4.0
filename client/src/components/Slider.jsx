import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CircleIcon from '@mui/icons-material/Circle';



const Slider = () => {
  const slides = [
    {
      url: 'https://i.postimg.cc/6pTZSp5D/1.png',
    },
    {
      url: 'https://i.postimg.cc/rppyg6X7/tee-mockup-of-a-trendy-girl-lying-on-the-grass-a11736.png',
    },
    {
      url: 'https://i.postimg.cc/nzZjnR6k/t-shirt-mockup-featuring-a-man-with-sunglasses-at-a-vintage-records-store-30452.png',
    },

    {
      url: 'https://i.postimg.cc/SKr8CJy5/t-shirt-mockup-of-a-woman-shopping-with-a-friend-44395-r-el2.png',
    },
    {
      url: 'https://i.postimg.cc/Dyg8cP4J/tattooed-man-wearing-a-tshirt-mockup-while-showing-his-knuckles-a17018.png',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
    <div
      style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
    ></div>
    {/* Left Arrow */}
    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-blue-500 cursor-pointer'>
      <ArrowBackIosIcon onClick={prevSlide} size={30} />
    </div>
    {/* Right Arrow */}
    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-blue-500 cursor-pointer'>
      <ArrowForwardIosIcon onClick={nextSlide} size={30} />
    </div>
    <div className='flex top-4 justify-center py-2'>
      {slides.map((slide, slideIndex) => (
        <div
          key={slideIndex}
          onClick={() => goToSlide(slideIndex)}
          className='text-2xl cursor-pointer'
        >
          <CircleIcon className='text-blue-300'

          />
        </div>
      ))}
    </div>
  </div>
  )
}

export default Slider