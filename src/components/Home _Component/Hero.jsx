import React from 'react'
import HeroHamburger from "../../assets/hero_hamburger_2.jpg"
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <>
      <div className="hero container m-auto min-h-[70vh] bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={HeroHamburger} className="max-w-xs sm:max-w-sm md:max-w-md rounded-lg shadow-2xl rotate-1 shadow-slate-500" />
          <div className='p-5'>
            <h1 className="text-3xl font-bold">Selamat Datang Di Website De Taste Food, Menemukan Kemewahan Kuliner</h1>
            <p className="py-6">Temukan pengalaman kuliner yang mewah dan tak terlupakan di outlet-outlet terbaik di kota ini. Mari jelajahi citarasa yang menggugah selera dan nikmati kelezatan yang tak terlupakan.</p>
            <button className="btn btn-primary">
            <Link to="/restaurant/region">Jelajahi Sekarang</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero