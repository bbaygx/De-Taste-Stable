import { HiLocationMarker } from '../../utils'
import { useNavigate, useParams } from 'react-router-dom'

const SearchByRegion = () => {
    const {name} = useParams()
    const navigate = useNavigate()


    const handleSelectKulinerRegion =  (e) =>{
        navigate(`/search/by/${name}/${e.target.textContent}`)
    }
    return (
        <>
            <div className="dropdown dropdown-bottom dropdown-end">
                <label tabIndex={0} className="btn m-1">
                    <HiLocationMarker className='text-xl text-red-700' />
                    <span>Pilih Region</span></label>
                <ul tabIndex={0} className="dropdown-content z-[10] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a onClick={handleSelectKulinerRegion}>Jakarta</a></li>
                    <li><a onClick={handleSelectKulinerRegion}>Bogor</a></li>
                    <li><a onClick={handleSelectKulinerRegion}>Depok</a></li>
                    <li><a onClick={handleSelectKulinerRegion}>Tangerang</a></li>
                    <li><a onClick={handleSelectKulinerRegion}>Bekasi</a></li>
                </ul>
            </div>
        </>
    )
}

export default SearchByRegion