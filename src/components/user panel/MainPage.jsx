import AdminNavbar from '../AdminNavbar';
import UserNavbar from '../UserNavbar';

import one from './1.jpg'
import two from './2.jpg'
import three from './3.jpg'
import four from './4.jpg'
import five from './5.webp'
import six from './6.jpg'
import React, { useState, useEffect } from 'react';
import AllDishesUser from './AllDishesUser';
import FoodCart from './FoodCart';
import CateCards from './CateCards';
import logo from "./logo.svg"
// AdminNavbar

const MainPage = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slides = [one, two, three,four,five, six,'/docs/images/carousel/carousel-5.svg'];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <UserNavbar></UserNavbar>
    {/* <AdminNavbar></AdminNavbar> */}
    <div id="default-carousel" className="relative w-[80.9%] left-64 h-[80%]" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div key={index} className={`duration-700 ease-in-out ${index === currentSlide ? '' : 'hidden'}`} data-carousel-item>
            <img 
   src={slide ? slide : 'https://www.allrecipes.com/thmb/gDJ1S6ETLfWGyyWw_4A_IGhvDYE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/9295_red-velvet-cake_ddmfs_4x3_1129-a8ab17b825e3464a9a53ceeda54ff461.jpg'}
           className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"  />
          </div>
        ))}
      </div>
      {/* Slider controls */}
      <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev onClick={prevSlide}>
        {/* Previous button content */}
      </button>
      <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next onClick={nextSlide}>
        {/* Next button content */}
      </button>
    </div>
    <AllDishesUser></AllDishesUser>
    <div className='w-[100%] bg-gray-200'>

    <div class="flex flex-col justify-between p-4 leading-normal ">
        <h5 class="mb-2 text-2xl font-bold tracking-tight ml-64 text-gray-900 dark:text-white">Explore new flavors and cuisines from around the world!</h5>
        <p class="mb-3 font-normal text-gray-700 ml-64 dark:text-gray-400">Find delicious and healthy Dish for every meal of the day . We Care about our Customers</p>
    </div>

    </div>
    <CateCards></CateCards>
    
    

<footer class="bg-white ml-64 rounded-lg shadow dark:bg-gray-900 m-4">
    <div class="w-[94%]  max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex  items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={logo} class="h-20" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">TastyGrill</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 pl-36 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">TastyGrill™</a>. All Rights Reserved.</span>
    </div>
</footer>






    </>
  );
};



export default MainPage
