import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { BiSolidTimeFive, AiFillStar, HiLocationMarker } from "../utils"
import 'swiper/css';
import 'swiper/css/pagination';
import axios from 'axios';
import { cardItem } from '../utils';

import GrabFood from '../assets/grabfood.png'
import GoFood from '../assets/gofood.png'
import { Link, useParams } from 'react-router-dom';

import { getByLocation } from '../api';

import { useQuery } from '@tanstack/react-query';
import CardSkeleton from '../components/CardSkeleton';

export default function Carousel() {

    const { region } = useParams();
    const [data, setData] = useState([]);
    // const [shuffle, setshuffle] = useState([]);

    const { data: shuffle, isLoading, isError, error, refetch } = useQuery(["data", region], () => getByLocation(region));


    useEffect(() => {
        // Mengecek apakah shuffle memiliki data sebelum melakukan operasi filter
        if (shuffle && shuffle.data) {
            const shuffleItems = shuffle.data.filter(item => item.rating > 4);
            // Lakukan sesuatu dengan shuffleItems jika diperlukan
        }
    }, [shuffle]);

    // Fungsi untuk mengacak array
    const shuffleArray = array => {
        let currentIndex = array.length,
            randomIndex;
        // Selama masih ada elemen yang belum diacak
        while (currentIndex !== 0) {
            // Mengambil elemen tersisa secara acak
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // Menukar elemen terpilih dengan elemen saat ini
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex],
            ];
        }
        return array;
    };

    // Mengacak data shuffle sebelum ditampilkan
    const shuffledData = shuffleArray(shuffle ? shuffle.data : []);

    return (
        <>
            {isLoading ? (
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {/* Render the CardSkeleton component */}
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CardSkeleton key={index} />
                    ))}
                </div>
            ) : (
                <Swiper
                    slidesPerView={2}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
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

                    {shuffledData && shuffledData.map(outlet => (
                        <SwiperSlide key={outlet._id}>
                            <div className="restaurant__item group cursor-pointer shadow-sm">
                                <div className="restaurant__item__image overflow-hidden rounded-md">
                                    <img src={outlet.foodImage} alt="" className='h-48 w-56 min-[512px]:w-full group-hover:scale-105 object-cover duration-300 transition-all group-hover:brightness-75 brightness-100' />
                                </div>
                                <div className="restaurant__item__content mt-3 ">
                                    <div className="status flex justify-between items-center">
                                        <div className="statusOulet flex items-center gap-1">
                                            <BiSolidTimeFive className={outlet.status.toLowerCase() == "open" ? 'text-green-500' : 'text-red-500'} />
                                            <span className='text-sm text-gray-500 font-karla'>{outlet.status}</span>
                                        </div>
                                        <div className="review flex items-center gap-1 ">
                                            <AiFillStar className='text-yellow-400 text-lg ' />
                                            <span className=' text-gray-500 font-karla text-[14px] font-bold block'>{outlet.rating}</span>
                                        </div>
                                    </div>
                                    <h1 className='text-lg font-outfits font-bold mt-2'>{outlet.foodName}</h1>
                                    <p className='text-xs text-gray-500 mt-1 font-outfits'>{outlet.foodType.join(", ")}</p>
                                    <div className="flex justify-between pt-6 items-center">
                                        <div className='location text-gray-600 flex gap-2 items-center'>
                                            <span className='text-red-600 text-xl'><HiLocationMarker /></span>
                                            <span className='text-sm'>{outlet.region}</span>
                                        </div>
                                        <div className="platform flex gap-3">
                                            <Link to={outlet.goFoodLink}>
                                                <img src={outlet.goFoodLink ? GoFood : ""} alt="" className='w-6 h-6' />
                                            </Link>
                                            <Link to={outlet.grabFoodLink}>
                                                <img src={outlet.grabFoodLink ? GrabFood : ""} alt="" className='w-6 h-6' />
                                            </Link>
                                        </div>
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
                </Swiper>
            )}
        </>
    );
}
