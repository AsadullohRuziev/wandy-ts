import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import search from '../assets/search.png';
import person from '../assets/person.png';
import bag from '../assets/bag.png';
import heart from '../assets/heart.png';

const Navbar = () => {
    return (
        <>
            <div className='flex justify-between items-center px-10 h-16'>
                <div>
                    <Link to={'/'}> <img src={logo} alt="logo" /></Link>
                </div>
                <nav>
                    <ul className='flex justify-between items-center text-blue-800 '>
                        <li className="group relative font-bold leading-4 py-3 px-8 text-xs ">

                            <span className=" py-4 rounded inline-flex items-center group ">магазин</span>

                            {/* menu list */}
                            <ul className="bg-blue-800 absolute hidden text-yellow-400  group-hover:block w-auto ">
                                <li className="hover:bg-blue-700 py-2 cursor-pointer px-5">
                                собственное производство
                                </li>
                                <li className=" hover:bg-blue-700 py-2 cursor-pointer px-5">
                                джинсы
                                </li>
                                <li className=" hover:bg-blue-700 py-2 cursor-pointer px-5">
                                обувь
                                </li>
                                <li className=" hover:bg-blue-700 py-2 cursor-pointer px-5">
                                Демисезон
                                </li>
                                <li className=" hover:bg-blue-700 py-2 cursor-pointer px-5">
                                Кроссовки и кеды 
                                </li>
                                <li className=" hover:bg-blue-700 py-2 cursor-pointer px-5">
                                летняя обувь
                                </li>
                            </ul>

                        </li>
                        <li className='font-bold leading-4 py-3 px-8 text-xs'><Link to={'/brend'}>о бренде</Link></li>
                        <li className='font-bold leading-4 py-3 px-8 text-xs'><Link to={'/reviews'}>отзывы</Link></li>
                        <li className='font-bold leading-4 py-3 px-8 text-xs'><Link to={'/contacts'}>контакты</Link></li>
                        <li className='font-bold leading-4 py-3 px-8 text-xs'><Link to={'/service'}>сервис и помощь</Link></li>
                    </ul>
                </nav>
                <div>
                    <button > <img src={search} alt="search" /></button>
                    <button> <img src={person} alt="person" /></button>
                    <button> <img src={heart} alt="heart" /></button>
                    <button> <img src={bag} alt="bag" /></button>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar