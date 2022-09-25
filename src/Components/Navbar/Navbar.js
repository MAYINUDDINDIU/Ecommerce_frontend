import React from 'react';
import baby from '../../Assets/Icons/playtime.png';
import cooking from '../../Assets/Icons/cooking.png';
import fruits from '../../Assets/Icons/fruit.png';
import drinks from '../../Assets/Icons/soft-drink.png';
import home_care from '../../Assets/Icons/cleaning.png';
import beauty_baby from '../../Assets/Icons/shampoo.png';
import health_care from '../../Assets/Icons/aid-kit.png';
import milk from '../../Assets/Icons/dairy.png';
import snaks from '../../Assets/Icons/snack.png';
import office from '../../Assets/Icons/stationery.png';
import kitchen from '../../Assets/Icons/kitchen.png';
import car from '../../Assets/Icons/hybrid-car.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <div class=" my-0 px-0 mx-auto">

                {/* <!-- Section: Design Block -->sticky top-0 z-50 */}
                <section class="mb-0  ">
                    <nav class="navbar  navbar-expand-lg shadow-lg py-3 bg-[#4b830d] relative flex items-center w-full justify-between">
                        <div class="lg:px-24 flex">

                            <button
                                class="navbar-toggler border-0 py-3 px-5 lg:hidden leading-none text-xl bg-transparent text-white hover:text-white focus:text-white
                                transition-shadow duration-300 ease-in-out"
                                type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContentX"
                                aria-controls="navbarSupportedContentX" aria-expanded="false" aria-label="Toggle navigation">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-5" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor"
                                        d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                                    </path>
                                </svg>

                            </button>
                            <div class="navbar-collapse collapse grow items-center" id="navbarSupportedContentX">

                                <li class="nav-item shadow-blue-600/50 static lg:mr-20 ml-5 text-white list-none font-bold lg:text-2xl" >EASY <span className='text-[#ffc107] shadow-blue-600/50'>BAZAR</span> </li>

                                <Link to={"/"}><li class="nav-item static text-white list-none font-bold text-lg" >HOME</li></Link>
                                <ul class="navbar-nav mr-auto flex flex-row">

                                    <li class="nav-item dropdown static text-white text-lg  lg:mx-5">
                                        <a class="nav-link block pr-2 lg:px-2 py-2 text-white hover:text-white  focus:text-white  transition duration-300 ease-in-out dropdown-toggle flex items-center whitespace-nowrap"
                                            href="#" data-mdb-ripple="true" data-mdb-ripple-color="light" type="button" id="dropdownMenuButtonX"
                                            data-bs-toggle="dropdown" aria-expanded="false">All Products
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="w-2 ml-2"
                                                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                <path fill="currentColor"
                                                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z">
                                                </path>
                                            </svg>
                                        </a>
                                        <div class="dropdown-menu w-full mt-0 hidden shadow-lg bg-white absolute left-0 top-full rounded-b-lg"
                                            aria-labelledby="dropdownMenuButtonX">
                                            <div class="px-6 lg:px-8 py-5">
                                                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                                    <ul>
                                                        <li>
                                                            <a class="dropdown-item text-sm py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                                                                href="#">
                                                                <img
                                                                    src={baby}
                                                                    alt="" class="w-6 mr-3" />
                                                                <span>Baby Care</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item text-sm py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                                                                href="#">
                                                                <img
                                                                    src={cooking}
                                                                    alt="" class="w-6 mr-3" />
                                                                <span>Kitchen and Cooking</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item text-sm py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                                                                href="#">
                                                                <img
                                                                    src={fruits}
                                                                    alt="" class="w-6 mr-3" />
                                                                <span>Fruits & Vagetables</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item text-sm py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                                                                href="#">
                                                                <img
                                                                    src={drinks}
                                                                    alt="" class="w-6 mr-3" />
                                                                <span>Drinks & Beverage</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item text-sm py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                                                                href="#">
                                                                <img
                                                                    src={home_care}
                                                                    alt="" class="w-6 mr-3" />
                                                                <span>Home Care & Cleaning</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <a class="dropdown-item text-sm py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                                                                href="#">
                                                                <img
                                                                    src={beauty_baby}
                                                                    alt="" class="w-6 mr-3" />
                                                                <span>Beauty & Body Care</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item text-sm py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                                                                href="#">
                                                                <img
                                                                    src={health_care}
                                                                    alt="" class="w-6 mr-3" />
                                                                <span>Health & Adult Care</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item text-sm py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                                                                href="#">
                                                                <img
                                                                    src={milk}
                                                                    alt="" class="w-6 mr-3" />
                                                                <span>Milk & Dairy</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item text-sm py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                                                                href="#">
                                                                <img
                                                                    src={snaks}
                                                                    alt="" class="w-6 mr-3" />
                                                                <span>Snacks & Spread</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item text-sm py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                                                                href="#">
                                                                <img
                                                                    src={office}
                                                                    alt="" class="w-6 mr-3" />
                                                                <span>Office & Schooling</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <a class="dropdown-item text-sm py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                                                                href="#">
                                                                <img
                                                                    src={kitchen}
                                                                    alt="" class="w-6 mr-3" />
                                                                <span>Kitchen Appliance</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item text-sm py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                                                                href="#">
                                                                <img
                                                                    src={car}
                                                                    alt="" class="w-6 mr-3" />
                                                                <span>Automotive Essentials</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item text-sm py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                                                                href="#">
                                                                <img
                                                                    src={health_care}
                                                                    alt="" class="w-6 mr-3" />
                                                                <span>Health & Adult Care</span>
                                                            </a>

                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item text-sm py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                                                                href="#">
                                                                <img
                                                                    src={health_care}
                                                                    alt="" class="w-6 mr-3" />
                                                                <span>Health & Adult Care</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item text-sm py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                                                                href="#">
                                                                <img
                                                                    src={health_care}
                                                                    alt="" class="w-6 mr-3" />
                                                                <span>Health & Adult Care</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <a class="dropdown-item text-sm py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                                                                href="#">
                                                                <img
                                                                    src={health_care}
                                                                    alt="" class="w-6 mr-3" />
                                                                <span>Health & Adult Care</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item text-sm py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                                                                href="#">
                                                                <img
                                                                    src={health_care}
                                                                    alt="" class="w-6 mr-3" />
                                                                <span>Health & Adult Care</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item text-sm py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                                                                href="#">
                                                                <img
                                                                    src={health_care}
                                                                    alt="" class="w-6 mr-3" />
                                                                <span>Health & Adult Care</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>


                                </ul>

                                <li class="nav-item static text-white list-none font-bold text-lg" >

                                    <div class="flex justify-center">
                                        <div class="mb-0 sm:w-full lg:w-96 xl:w-96">
                                            <div class="input-group relative flex flex-wrap items-stretch w-full mb-0">
                                                <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                                                <button class="btn inline-block px-6 lg:py-2.5 bg-[#003300] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#005005] hover:shadow-lg focus:bg-[#003300]   focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#003300]  active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                            </div>

                        </div>

                        <div className='px-24'>
                            <div class="navbar-collapse collapse grow items-center" id="navbarSupportedContentX">

                            </div>
                        </div>
                    </nav>
                </section>
                {/* <!-- Section: Design Block --> */}

            </div>
            {/* <!-- Container for demo purpose */}
        </div >
    );
};

export default Navbar;