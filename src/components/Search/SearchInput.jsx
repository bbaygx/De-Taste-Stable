import React,{useRef, useState} from 'react'
import {AiOutlineSearch} from "../../utils"
import { useNavigate } from 'react-router-dom'


const SearchInput = ({ openSearch }) => {

    const navigate = useNavigate()
    const [searchItem, setSearchItem] = useState('')
    

    const getSearchItem = (e) => {
        e.preventDefault()
        navigate(`/search/by/${searchItem}`)
    }
    


    return (
        <>
            <div className="flex justify-end px-4 py-3">
                <div className={`w-full max-w-sm ${openSearch ? "block md:hidden" : "hidden"}`}>
                    <label className="label">
                        <span className="label-text">Mau makan apa hari ini ?</span>
                    </label>
                    <div className="flex justify-start border-2 p-3 rounded-xl">
                    <input type="text" placeholder="Cari disini..." value={searchItem} className="w-full outline-none max-w-xs input-key" onChange={(e) => setSearchItem(e.target.value)}/>
                    <button type='submit' id='search' onClick={getSearchItem}>
                        <AiOutlineSearch className='w-5 h-5' id='search'/>
                    </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchInput