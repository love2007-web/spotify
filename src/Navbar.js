import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            <div>
                <div>
                    <div className='my-2 mx-2'>
                        <ul className='text-white w-3/12 px-4 py-1 text-base font-medium rounded-xl top'>
                            <li className='flex items-center px-4 py-4 leading-6 w-full cursor-pointer'>
                                <i class="bi bi-house-door-fill text-2xl"></i>
                                <p className='mx-2 font-bold text-base mx-8'>Home</p>
                            </li>
                            <li className='flex items-center px-4 py-3 leading-6 w-full cursor-pointer'>
                                <i class="bi bi-search text-2xl"></i>
                                <p className='mx-2 font-bold text-base mx-8'>Search</p>
                            </li>
                        </ul>
                    </div>
                    {/* <div></div> */}
                </div>
                <div className='next w-3/12 mx-2 rounded-xl pl-4 pr-4'>
                    <header className='text-white px-4 py-1 text-base font-medium'>
                        <div className='flex items-center  py-3 leading-6 w-full cursor-pointer'>
                            <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 haNxPq text-white">
                                <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
                            </svg>
                            <p className='text-base font-bold ml-7'>Your Library</p>
                            <div className='ml-24'>
                                <button>
                                    <i className="bi bi-plus-lg text-xl px-1 rounded-full hover:bg-gray-800"></i>
                                </button>
                                <button className='ml-3'>
                                    <i className="bi bi-arrow-right-short text-2xl rounded-full px-1 hover:bg-gray-800"></i>
                                </button>
                            </div>
                        </div>
                    </header>
                    <div className='text-white py-1 drop-shadow-2xl'>
                        <button className='rounded-full px-3 py-1 btn1'>Playlists</button>
                        <button className='rounded-full px-3 py-1 mx-3 btn1'>Artists</button>
                        <button className='rounded-full px-3 py-1 btn1'>Albums</button>
                    </div>
                    <div className='pl-2 flex justify-between text-white items-center cursor-pointer'>
                        <i class="bi bi-search text-lg text-white"></i>
                        <div className='flex'>
                            <p>Recents</p><span><i class="bi bi-caret-down-fill"></i></span>
                        </div>
                    </div>
                    <div>
                        <ul class="max-h-[315px] overflow-y-scroll text-white p-4">
                            <li></li>
                        </ul>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar