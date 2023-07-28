
const Footer = () => {
  return (
    <>
      <footer className="">
      
      {/* <div className="relative">
      <svg xmlns="http://www.w3.org/2000/svg" className="opacity-70" viewBox="0 0 1440 320"><path fill="#ffc31f" fillOpacity="1" d="M0,96L40,101.3C80,107,160,117,240,101.3C320,85,400,43,480,58.7C560,75,640,149,720,160C800,171,880,117,960,96C1040,75,1120,85,1200,101.3C1280,117,1360,139,1400,149.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
          <svg  xmlns="http://www.w3.org/2000/svg" className="absolute top-0 opacity-70"  viewBox="0 0 1440 320"><path fill="#ff5503" fillOpacity="1" d="M0,160L40,138.7C80,117,160,75,240,85.3C320,96,400,160,480,165.3C560,171,640,117,720,90.7C800,64,880,64,960,90.7C1040,117,1120,171,1200,160C1280,149,1360,75,1400,37.3L1440,0L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
          </div>
          <div className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" className="opacity-70" viewBox="0 0 1440 320"><path fill="#ffc31f" fillOpacity="1" d="M0,32L60,42.7C120,53,240,75,360,112C480,149,600,203,720,202.7C840,203,960,149,1080,154.7C1200,160,1320,224,1380,256L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="absolute -top-1 opacity-70" viewBox="0 0 1440 320"><path fill="#ff5503" fillOpacity="1" d="M0,288L80,250.7C160,213,320,139,480,138.7C640,139,800,213,960,229.3C1120,245,1280,203,1360,181.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
          </div>
           */}
        <div className="container mx-auto px-6 pt-10 pb-6 mt-20">

          <div className="flex flex-wrap justify-between">
            <ul className="mb-4">
              <li className="mt-2">
                <a href="/search/by/type/Makanan" className="text-sm  duration-300 font-outfits text-gray-600 hover:text-orange-500">Makanan</a>
              </li>
              <li className="mt-2">
                <a href="/search/by/type/Cemilan" className="text-sm  duration-300 font-outfits text-gray-600 hover:text-orange-500">Cemilan</a>
              </li>
              <li className="mt-2">
                <a href="/search/by/type/Minuman" className="text-sm  duration-300 font-outfits text-gray-600 hover:text-orange-500">Minuman</a>
              </li>

            </ul>
            <ul className="mb-4">
              <li className="mt-2">
                <a href="/search/by/type/Grosery" className="text-sm  duration-300 font-outfits text-gray-600 hover:text-orange-500">Jajanan</a>
              </li>
              <li className="mt-2">
                <a href="/search/by/type/Sweets" className="text-sm  duration-300 font-outfits text-gray-600 hover:text-orange-500">Sweets</a>
              </li>
              <li className="mt-2">
                <a href="/search/by/type/Ayam & Bebek" className="text-sm  duration-300 font-outfits text-gray-600 hover:text-orange-500">Ayam & Bebek</a>
              </li>
            </ul>

            <ul className="mb-4">
              <li className="mt-2">
                <a href="/search/by/type/Roti" className="text-sm  duration-300 font-outfits text-gray-600 hover:text-orange-500">Roti</a>
              </li>
              <li className="mt-2">
                <a href="/search/by/type/Cepat saji" className="text-sm  duration-300 font-outfits text-gray-600 hover:text-orange-500">Cepat Saji</a>
              </li>
              <li className="mt-2">
                <a href="/search/by/type/Jepang" className="text-sm  duration-300 font-outfits text-gray-600 hover:text-orange-500">Jepang</a>
              </li>

            </ul>
            <ul className="mb-4">
              <li className="mt-2">
                <a href="/search/by/type/Daging" className="text-sm  duration-300 font-outfits text-gray-600 hover:text-orange-500">Daging</a>
              </li>
              <li className="mt-2">
                <a href="/search/by/type/Soto & Bakso" className="text-sm  duration-300 font-outfits text-gray-600 hover:text-orange-500">Soto & Bakso</a>
              </li>
              <li className="mt-2">
                <a href="/search/by/type/Roti" className="text-sm  duration-300 font-outfits text-gray-600 hover:text-orange-500">Roti</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright ring-1 ring-gray-200 ">
          <div className="container ">
            <div className="mt-4 flex flex-col items-center">
              <div className="menuBottom flex gap-2  mt-2">
                <a href="" className='text-sm duration-500 text-slate-900 transition-colors hover:bg-blue-400 px-4 py-2 rounded-md hover:text-white'>Shiping and Payment</a>
                <a href="" className='text-sm duration-500 text-slate-900 transition-colors hover:bg-blue-400 px-4 py-2 rounded-md hover:text-white'>Suppliers</a>
                <a href="" className='text-sm duration-500 text-slate-900 transition-colors hover:bg-blue-400 px-4 py-2 rounded-md hover:text-white'>Testimonial</a>
                <a href="https://yumasnidacorp.wixsite.com/detastecorp/" className='text-sm duration-500 text-slate-900 transition-colors hover:bg-blue-400 px-4 py-2 rounded-md hover:text-white'>Companies</a>
              </div>
              <div className="sm:w-2/3 text-center ">
                <p className="text-sm text-gray-500 py-2  font-outfits mb-2">
                  © 2023 by <a href="https://yumasnidacorp.wixsite.com/detastecorp/">De Taste Food</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </footer>
            <div className="relative">
      <svg xmlns="http://www.w3.org/2000/svg" className="opacity-70" viewBox="0 0 1440 320"><path fill="#ffc31f" fillOpacity="1" d="M0,96L40,101.3C80,107,160,117,240,101.3C320,85,400,43,480,58.7C560,75,640,149,720,160C800,171,880,117,960,96C1040,75,1120,85,1200,101.3C1280,117,1360,139,1400,149.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
          <svg  xmlns="http://www.w3.org/2000/svg" className="absolute top-0 opacity-70"  viewBox="0 0 1440 320"><path fill="#ff5503" fillOpacity="1" d="M0,160L40,138.7C80,117,160,75,240,85.3C320,96,400,160,480,165.3C560,171,640,117,720,90.7C800,64,880,64,960,90.7C1040,117,1120,171,1200,160C1280,149,1360,75,1400,37.3L1440,0L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
          </div>
    </>
  )
}

export default Footer