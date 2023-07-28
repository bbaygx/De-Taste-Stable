import React, { useState, useRef } from "react";
import { SearchInput } from "..";
import { useNavigate, Link, NavLink } from "react-router-dom";

import {
  IoCall,
  BsMenuApp,
  HiOutlineMenuAlt2,
  AiOutlineSearch,
  AiOutlineHeart,
  AiFillHeart,
  MdDiscount,
  FiSearch,
  FiShoppingCart,
  HiOutlineMenuAlt4,
  BiLogoGmail,

  // Kuliner Data
  dataKuliner,
} from "../../utils";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


const Navbar = () => {
  
  const navigate = useNavigate();
  
  const [openSearch, setOpenSearch] = useState(false);
  const [input, setInput] = useState([]);
  const [like, setLike] = useState(false);


  const openSearchToogle = () => {
    setOpenSearch((prev) => !prev);
  };
  const likeToogle = () => {
    setLike((prev) => !prev);
  };


  const handleSubmit = () => {
    navigate(`/search/by/${input}`);
  };


  const handleDataKuliner = (e) => {
    navigate(`/search/by/${e.target.innerText}`)
    
  }
  return (
    <>
      {/* Alert Info */}
      <div className="bg-gradient-to-r m-2 rounded-md shadow-md from-purple-500 to-pink-500  flex justify-center items-center gap-3 py-1">
        <MdDiscount className="text-xl text-yellow-400" />
        <span className="text-sm font-bold text-slate-200">Mengungkap Kelezatan Tersembunyi</span>
      </div>

      {/* Contact Info */}
      <div className="bg-base-100  flex justify-between items-center gap-3 py-2 px-4">
        <div className="contact-app flex gap-3">
          <a href="#">
            <IoCall className="text-xl " />
          </a>
          <a href="#">
            <BiLogoGmail className="text-xl " />
          </a>
        </div>
        <div className="flex-none hidden sm:block">
        </div>
        <div className="flex gap-6">
          <span className="text-sm font-bold text-gray-400 hover:text-slate-800 cursor-pointer"></span>
          <span className="text-sm font-bold text-gray-400 hover:text-slate-800 cursor-pointer"></span>
        </div>
      </div>

      <nav className=" bg-base-100 shadow-md">
        <div className="navbar m-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <HiOutlineMenuAlt2 className="w-5 h-5" />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[4] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/restaurant/region">Pilih Region</Link>
                </li>
                {/* <li>
                  <Link to="/restaurant/">Restaurants</Link>
                </li> */}
              </ul>
            </div>
            <a className="font-bold normal-case text-base lg:text-xl" href="/">
              De Taste Food
            </a>
          </div>
          <div className="navbar-center">
            <div
              className="rounded-full py-1 px-3 border-2 border-gray-200 hidden sm:inline-flex gap-3 sm:ml-6"
            >

              <input
                type="text"
                placeholder="Mau makan apa hari ini?"
                className=" outline-none w-full max-w-xs text-sm  py-1 input-key"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
                <button type="submit" id="search" onClick={handleSubmit}>
                <FiSearch className="w-5 h-5 text-gray-600" id="search" />
              </button>
            </div>
          </div>
          <div className="navbar-end">
            <button
              className="btn btn-ghost btn-circle sm:hidden"
              onClick={openSearchToogle}
            >
              <AiOutlineSearch className="w-6 h-6" />
            </button>
            <button className="btn btn-ghost btn-circle" onClick={likeToogle}>
              <div className="indicator">
                {like ? (
                  <AiFillHeart className="w-5 h-5" />
                ) : (
                  <AiOutlineHeart className="w-5 h-5" />
                )}
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <FiShoppingCart className="w-5 h-5" />
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
          </div>
        </div>
      </nav>
      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          350: {
            slidesPerView: 3,
            spaceBetween: 10,
          },

          400: {
            slidesPerView: 3,
            spaceBetween: 10,
          },

          512: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
        className="mySwiper flex py-5 space-x-3 overflow-x-hidden smooth-scroll scale-x-90 duration-300 justify-center"
      >
        {dataKuliner.map((item, i) => (
          <SwiperSlide className="my-5 m-auto" key={i}>
            <NavLink
              to={`search/by/type/${item.id}`}
              className="px-8 py-8 text-center text-sm rounded-full font-medium"
              key={item.id}
              onClick={handleDataKuliner}
            >
              {item.nama_kuliner}
            </NavLink>
          </SwiperSlide>
        ))}
      </Swiper>
      <SearchInput openSearch={openSearch} />
    </>
  );
};

export default Navbar;
