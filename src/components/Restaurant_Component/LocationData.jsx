import { cardItem,BiSolidTimeFive,AiFillStar,BsArrowRight,BiLeftArrowAlt } from "../../utils"
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';

import ChangeRegion from './ChangeRegion';
import { GlobalProvider } from '../../contexts/AuthContext';


const LocationData = () => {


  

  return (
    <>
<ChangeRegion/>
<div className="my-24 w-[90%] m-auto">
  {/* <div className="flex justify-between py-7 px-3">
  <h1 className='text-xl sm:text-2xl font-semibold'>Hasil Pencarian</h1>
  </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          400:{
            slidesPerView: 2
          },
          460: {
            slidesPerView: 2,
          },
          512: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        className="mySwiper"
      >
    {getLocation && getLocation.map(outlet => (
          <SwiperSlide key={outlet._id}>
          <div className="restaurant__item group cursor-pointer shadow-sm">
              <div className="restaurant__item__image overflow-hidden rounded-md">
                  <img src={outlet.foodImage} alt="" className='h-48 w-56 min-[512px]:w-full group-hover:scale-105 object-cover duration-300 transition-all group-hover:brightness-75 brightness-100' />
              </div>
              <div className="restaurant__item__content mt-3 ">
                  <div className="status flex justify-between items-center">
                      <div className="statusOulet flex items-center gap-1">
                          <BiSolidTimeFive className='text-green-500' />
                          <span className='text-sm text-gray-500 font-karla'>{outlet.status}</span>
                      </div>
                      <div className="review flex items-center gap-1 ">
                          <AiFillStar className='text-yellow-400 text-lg ' />
                          <span className=' text-gray-500 font-karla text-[14px] font-bold block'>4,5</span>
                      </div>
                  </div>
                  <h1 className='text-lg font-outfits font-bold mt-2'>{outlet.foodName}</h1>
                  <p className='text-xs text-gray-500 mt-1 font-outfits'>{outlet.foodType.join(", ")}</p>
                  <div className="platform flex justify-end items-center pt-3 gap-3">
                    <Link to={outlet.goFoodLink}>
                    <img src={outlet.goFoodLink ? GoFood : ""} alt="" className='w-6 h-6'/>
                    </Link>
                    <Link to={outlet.grabFoodLink}>
                    <img src={outlet.grabFoodLink ? GrabFood : ""} alt="" className='w-6 h-6'/>
                    </Link>
                  </div>
                  <div className="checkOut flex items-center gap-6 mt-3  ">
                      <div className="buy">
                      </div>
                      <div className="heart ">
                      </div>
                  </div>
              </div>
          </div>
</SwiperSlide>
        ))}

      </Swiper> */}

      <div>
        <Link to="/" className='text-blue-600 mt-10 underline flex items-center'>
          <span><BiLeftArrowAlt className='text-xl'/></span>
          <span>Kembali Ke Halaman Home</span>
        </Link>
      </div>
</div>
    </>
  )
}

export default LocationData

