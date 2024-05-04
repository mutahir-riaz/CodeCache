import React from 'react'
import FoodCart from './FoodCart'
import CateCart from './CateCart'

function CateCards() {
  return (
    
      <div className='ml-[20%] mt-[1%] flex flex-wrap'>
      <CateCart title ='Pakistani Cusine' img=
      {'https://royalmahal.co.uk/wp-content/uploads/2023/01/indian-restaurant-scaled-e1670322083921.jpg'}
      ></CateCart>
      <CateCart title ='Chinese Cusine' img={'https://thumbs.dreamstime.com/b/assorted-chinese-food-set-noodles-fried-rice-dumplings-peking-duck-dim-sum-spring-rolls-famous-cuisine-dishes-74023556.jpg'}></CateCart>
      <CateCart title ='Italian Cusine' img={'https://www.favfamilyrecipes.com/wp-content/uploads/2021/06/Italian-Spaghetti-13-480x270.jpg'}
      ></CateCart>
      <CateCart title ='Best beverages' img={'https://img.freepik.com/free-photo/colorful-soda-drinks-macro-shot_53876-18225.jpg'}></CateCart>
      <CateCart title ='Sweet Dishes' img={'https://lh3.googleusercontent.com/DxnNlf1zbhP3Ip5VL0Ma-5-uUb5JTwmXAZyXUwesD8zc8eV4Q6xpExyntwFOvuMenEf422KjHRZZjNOIyLiOPw=w1280-h960-c-rj-v1-e365'}></CateCart>
      



    </div>
    
  )
}

export default CateCards
