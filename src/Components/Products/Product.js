import React from 'react';
import baby from '../../Assets/Icons/playtime.png';
import cooking from '../../Assets/Icons/cooking.png';
import fruits from '../../Assets/Icons/fruit.png';
import drinks from '../../Assets/Icons/soft-drink.png';
import home_care from '../../Assets/Icons/cleaning.png';
import beauty_baby from '../../Assets/Icons/shampoo.png';
const Product = () => {
    return (
        <div>
            <h2 className='text-2xl text-shadow lg:mt-5 lg:mb-3 font-bold'>ALL PRODUCTS</h2>


            <div class="grid ml-3 mr-3 lg:ml-10 lg:mr-10 grid-cols-2 lg:grid-cols-6 gap-2">

                <div class="flex justify-center w-full ">
                    <div class="rounded-lg shadow-xl hover:bg-[#e1f5fe] shadow-2xl  bg-white w-100 h-40 ">
                        <div class="flex justify-center w-100 mt-5 xl:w-48 lg:w-48 hover:scale-105 duration-1000'">
                            <a href="#!">
                                <img class="rounded-t-md w-20 h-20 text-center flex" src={baby} alt="" />
                            </a>
                        </div>
                        <h2 className='mt-3 text-md'>Baby Care</h2>


                    </div>
                </div>


                <div class="flex justify-center w-100">
                    <div class="rounded-lg shadow-xl hover:bg-[#e1f5fe] bg-white w-100 h-40">
                        <div class="flex justify-center w-100 mt-5 xl:w-48 lg:w-48">
                            <a href="#!">
                                <img class="rounded-t-md w-20 h-20 text-center flex" src={cooking} alt="" />
                            </a>
                        </div>
                        <h2 className='mt-3 text-md'>Kitchen and Cooking</h2>


                    </div>
                </div>

                <div class="flex justify-center w-100">
                    <div class="rounded-lg shadow-xl bg-white w-100 h-40 hover:bg-[#e1f5fe]">
                        <div class="flex justify-center w-100 mt-5 xl:w-48 lg:w-48">
                            <a href="#!">
                                <img class="rounded-t-md w-20 h-20 text-center flex" src={fruits} alt="" />
                            </a>
                        </div>
                        <h2 className='mt-3 text-md'>Fruits & Vagetables</h2>


                    </div>
                </div>
                <div class="flex justify-center w-100">
                    <div class="rounded-lg shadow-xl bg-white w-100 h-40 hover:bg-[#e1f5fe]">
                        <div class="flex justify-center w-100 mt-5 xl:w-48 lg:w-48">
                            <a href="#!">
                                <img class="rounded-t-md w-20 h-20 text-center flex" src={drinks} alt="" />
                            </a>
                        </div>
                        <h2 className='mt-3 text-md'>Drinks & Beverage</h2>


                    </div>
                </div>
                <div class="flex justify-center w-100">
                    <div class="rounded-lg shadow-xl bg-white w-100 h-40 hover:bg-[#e1f5fe]">
                        <div class="flex justify-center w-100 mt-5 xl:w-48 lg:w-48">
                            <a href="#!">
                                <img class="rounded-t-md w-20 h-20 text-center flex" src={home_care} alt="" />
                            </a>
                        </div>
                        <h2 className='mt-3 text-md'>Home Care & Cleaning</h2>


                    </div>
                </div>
                <div class="flex justify-center w-100">
                    <div class="rounded-lg shadow-xl bg-white w-100 h-40 hover:bg-[#e1f5fe]">
                        <div class="flex justify-center w-100 mt-5 xl:w-48 lg:w-48">
                            <a href="#!">
                                <img class="rounded-t-md w-20 h-20 text-center flex" src={beauty_baby} alt="" />
                            </a>
                        </div>
                        <h2 className='mt-3 text-md'>Beauty & Body Care</h2>


                    </div>
                </div>

            </div>
            <div class="grid mt-4 ml-3 mr-3 lg:ml-10 lg:mr-10 grid-cols-2 lg:grid-cols-6 gap-2">

                <div class="flex justify-center w-full ">
                    <div class="rounded-lg shadow-xl hover:bg-[#e1f5fe] shadow-2xl  bg-white w-100 h-40 ">
                        <div class="flex justify-center w-100 mt-5 xl:w-48 lg:w-48 hover:scale-105 duration-1000'">
                            <a href="#!">
                                <img class="rounded-t-md w-20 h-20 text-center flex" src={baby} alt="" />
                            </a>
                        </div>
                        <h2 className='mt-3 text-md'>Baby Care</h2>


                    </div>
                </div>


                <div class="flex justify-center w-100">
                    <div class="rounded-lg shadow-xl hover:bg-[#e1f5fe] bg-white w-100 h-40">
                        <div class="flex justify-center w-100 mt-5 xl:w-48 lg:w-48">
                            <a href="#!">
                                <img class="rounded-t-md w-20 h-20 text-center flex" src={cooking} alt="" />
                            </a>
                        </div>
                        <h2 className='mt-3 text-md'>Kitchen and Cooking</h2>


                    </div>
                </div>

                <div class="flex justify-center w-100">
                    <div class="rounded-lg shadow-xl bg-white w-100 h-40 hover:bg-[#e1f5fe]">
                        <div class="flex justify-center w-100 mt-5 xl:w-48 lg:w-48">
                            <a href="#!">
                                <img class="rounded-t-md w-20 h-20 text-center flex" src={fruits} alt="" />
                            </a>
                        </div>
                        <h2 className='mt-3 text-md'>Fruits & Vagetables</h2>


                    </div>
                </div>
                <div class="flex justify-center w-100">
                    <div class="rounded-lg shadow-xl bg-white w-100 h-40 hover:bg-[#e1f5fe]">
                        <div class="flex justify-center w-100 mt-5 xl:w-48 lg:w-48">
                            <a href="#!">
                                <img class="rounded-t-md w-20 h-20 text-center flex" src={drinks} alt="" />
                            </a>
                        </div>
                        <h2 className='mt-3 text-md'>Drinks & Beverage</h2>


                    </div>
                </div>
                <div class="flex justify-center w-100">
                    <div class="rounded-lg shadow-xl bg-white w-100 h-40 hover:bg-[#e1f5fe]">
                        <div class="flex justify-center w-100 mt-5 xl:w-48 lg:w-48">
                            <a href="#!">
                                <img class="rounded-t-md w-20 h-20 text-center flex" src={home_care} alt="" />
                            </a>
                        </div>
                        <h2 className='mt-3 text-md'>Home Care & Cleaning</h2>


                    </div>
                </div>
                <div class="flex justify-center w-100">
                    <div class="rounded-lg shadow-xl bg-white w-100 h-40 hover:bg-[#e1f5fe]">
                        <div class="flex justify-center w-100 mt-5 xl:w-48 lg:w-48">
                            <a href="#!">
                                <img class="rounded-t-md w-20 h-20 text-center flex" src={beauty_baby} alt="" />
                            </a>
                        </div>
                        <h2 className='mt-3 text-md'>Beauty & Body Care</h2>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default Product;