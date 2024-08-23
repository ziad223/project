import React, { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";
import { SlPlus } from "react-icons/sl";
import { PiStarHalf } from "react-icons/pi";
import { FaEllipsis } from "react-icons/fa6";
import { IoChevronForwardSharp } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";

const Assessments = () => {
    const [tab, setTap] = useState(1);


    return (
        <div className='px-2 md:px-4 lg:px-8'>
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px">
                    <li className="me-2" onClick={() => setTap(1)}>
                        <a href="#" className={`inline-block p-4 ${tab === 1 ? 'text-blue-600 border-b-2 border-blue-600' : ''} rounded-t-lg active dark:text-blue-500 dark:border-blue-500`}>
                            Assessments
                        </a>
                    </li>
                    <li className="me-2" onClick={() => setTap(2)}>
                        <a href="#" className={`inline-block p-4 ${tab === 2 ? 'text-blue-600 border-b-2 border-blue-600' : ''} rounded-t-lg active dark:text-blue-500 dark:border-blue-500`} aria-current="page">
                            Dashboard
                        </a>
                    </li>
                    <li className="me-2" onClick={() => setTap(3)}>
                        <a href="#" className={`inline-block p-4 ${tab === 3 ? 'text-blue-600 border-b-2 border-blue-600' : ''} rounded-t-lg active dark:text-blue-500 dark:border-blue-500 flex items-center gap-1`}>
                            Library <FaChevronDown className='mt-1 ml' />
                        </a>
                    </li>
                    <li className="me-2" onClick={() => setTap(4)}>
                        <a href="#" className={`inline-block p-4 ${tab === 4 ? 'text-blue-600 border-b-2 border-blue-600' : ''} rounded-t-lg active dark:text-blue-500 dark:border-blue-500 flex items-center gap-1`}>
                            More <FaChevronDown className='mt-1 ml' />
                        </a>
                    </li>
                </ul>
            </div>
            <div className='mt-5 flex justify-between'>
                <h2 className='text-lg font-bold'>Assessments <span className='text-gray-11 font-medium text-gray-400 text-sm ml-1'>(32 assessments)</span></h2>
                <div className='flex gap-2'>
                    <button class="bg-green-800 text-sm hover:bg-green-700 flex gap-2 items-center text-white font-bold py-1 px-4 rounded">
                       Create assessments <SlPlus className='  '/>
                   </button>
                    <button class="bg-tansparent border-2 border-gray-200 flex gap-2 items-center text-slate-900 hover:bg-green-700 hover:text-gray-100 duration-300 transition font-bold py-1 text-sm px-4 rounded">
                       Generate Using Ai <PiStarHalf/>
                   </button>
                </div>
            </div>

 <div className='flex items-center gap-5'>
    <div class="flex px-4 py-2 rounded-md border-2  overflow-hidden w-[300px] my-5">
        <input type="email" placeholder="Search Something..."
          class="w-full outline-none bg-transparent text-gray-600 text-sm" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" class="fill-gray-600">
          <path
            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
          </path>
        </svg>
      </div>
      <form class="max-w-sm ">
  <select id="countries" class="border border-gray-300 text-gray-900 text-sm rounded-md w-[200px] block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
    <option selected>Status</option>
    <option value="">Status 1</option>
    <option value="">Status 2</option>
    <option value="">Status 3</option>
    <option value="">Status 4</option>
  </select>
</form>
 </div>
<div class="relative overflow-x-auto  sm:rounded-lg">
    
<div class="relative overflow-x-auto shadow-md sm:rounded-lg overflow-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3 flex gap-5">
              <input type="checkbox" class="accent-green-800 text-xl focus:accent-green-800 p-4 w-4 h-4 cursor-pointer" />
                <h2 className='text-gray-500'>Name</h2>
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        <h2 className='text-gray-500'>Status</h2>
                        <a href="#">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3 h-3">
  <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" class="text-gray-500"/>
</svg>
  </a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        <h2 className='text-gray-500'>TOTAL CADIDATES</h2>
                    </div>
                </th>
                 <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        <h2 className='text-gray-500'>CREATED ON</h2>
                        <a href="#">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3 h-3">
  <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" class="text-gray-500"/>
</svg>
  </a>
                    </div>
                </th>
                 <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        <h2 className='text-gray-500'>CREATED By</h2>
                        <a href="#">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3 h-3">
  <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" class="text-gray-500"/>
</svg>
  </a>
                    </div>
                </th>
            </tr>
        </thead>
        <tbody>
          <tr>
                <th scope="col" class="px-6 py-3 flex gap-5 items-center">
              <input type="checkbox" class="accent-green-800 text-xl focus:accent-green-800 p-4 w-4 h-4 cursor-pointer" />
                <h2 className='text-gray-500'>SQL</h2>
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        <h2 className='text-gray-700 font-semibold'>Draft</h2>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                 -
                </th>
                 <th scope="col" class="px-6 py-3">
                    <h2 className='text-gray-700 font-semibold'>Jul 30, 4:22 PM</h2>
                </th>
                <th scope="col" class="px-6 py-3">
                </th>
                <th>
                    <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md text-sm px-3 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        <FaEllipsis className='text-lg' />
                    </button>
                      <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md text-sm px-3 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        <IoChevronForwardSharp className='text-lg' />
                    </button>

                </th>
         </tr>
          <tr>
                <th scope="col" class="px-6 py-3 flex gap-5 items-center">
              <input type="checkbox" class="accent-green-800 text-xl focus:accent-green-800 p-4 w-4 h-4 cursor-pointer" />
                <h2 className='text-gray-500'>المعرفة بنظام الذكاة والدخل</h2>
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        <h2 className='text-gray-700 font-semibold'>Draft</h2>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                 -
                </th>
                 <th scope="col" class="px-6 py-3">
                    <h2 className='text-gray-700 font-semibold'>Jul 17, 3:25 PM</h2>
                </th>
                <th scope="col" class="px-6 py-3">
                </th>
                <th>
                    <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md text-sm px-3 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        <FaEllipsis className='text-lg' />
                    </button>
                      <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md text-sm px-3 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        <IoChevronForwardSharp className='text-lg' />
                    </button>

                </th>
         </tr>
          <tr>
                <th scope="col" class="px-6 py-3 flex gap-5 items-center">
              <input type="checkbox" class="accent-green-800 text-xl focus:accent-green-800 p-4 w-4 h-4 cursor-pointer" />
                <h2 className='text-gray-500'>التواصل</h2>
                </th>
                <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">
                        <h2 className='text-gray-700 font-semibold'>Active</h2>
                    </div>
                </th>
                <th scope="col" className="px-6 py-3 ">
                 <div className='flex items-center gap-2'>
                 <div className="w-[75%] bg-gray-200 rounded-full  dark:bg-gray-700">
                 <div className="bg-[#32a46d] h-2.5 rounded-full dark:bg-gray-300" style={{width : '100%'}}></div>
                 </div>
                 <IoMdInformationCircleOutline className='text-lg'/>
                 <h5>1/1</h5>
                 </div>
                </th>
                 <th scope="col" class="px-6 py-3">
                    <h2 className='text-gray-700 font-semibold'>Jul 8, 4:11 PM</h2>
                </th>
                <th scope="col" class="px-6 py-3 text-gray-700">
                    Fahad Alsaadi
                </th>
                <th>
                    <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md text-sm px-3 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        <FaEllipsis className='text-lg' />
                    </button>
                      <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md text-sm px-3 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        <IoChevronForwardSharp className='text-lg' />
                    </button>

                </th>
         </tr>
          <tr>
                <th scope="col" class="px-6 py-3 flex gap-5 items-center">
              <input type="checkbox" class="accent-green-800 text-xl focus:accent-green-800 p-4 w-4 h-4 cursor-pointer" />
                <h2 className='text-gray-500'>المعرفة بنظام الذكاة والدخل</h2>
                </th>
                <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">
                        <h2 className='text-gray-700 font-semibold'>Active</h2>
                    </div>
                </th>
                <th scope="col" className="px-6 py-3 ">
                -
                </th>
                 <th scope="col" class="px-6 py-3">
                    <h2 className='text-gray-700 font-semibold'>Jul 8, 4:10 PM</h2>
                </th>
                <th scope="col" class="px-6 py-3 text-gray-700">
                    Fahad Alsaadi
                </th>
                <th>
                    <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md text-sm px-3 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        <FaEllipsis className='text-lg' />
                    </button>
                      <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md text-sm px-3 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        <IoChevronForwardSharp className='text-lg' />
                    </button>

                </th>
         </tr>
         <tr>
                <th scope="col" class="px-6 py-3 flex gap-5 items-center">
              <input type="checkbox" class="accent-green-800 text-xl focus:accent-green-800 p-4 w-4 h-4 cursor-pointer" />
                <h2 className='text-gray-500'> Test Enginner</h2>
                </th>
                <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">
                        <h2 className='text-gray-700 font-semibold'>Active</h2>
                    </div>
                </th>
                <th scope="col" className="px-6 py-3 ">
                -
                </th>
                 <th scope="col" class="px-6 py-3">
                    <h2 className='text-gray-700 font-semibold'>Jul 8, 10:2 PM</h2>
                </th>
                <th scope="col" class="px-6 py-3 text-gray-700">
                    Fahad Alsaadi
                </th>
                <th>
                    <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md text-sm px-3 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        <FaEllipsis className='text-lg' />
                    </button>
                      <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md text-sm px-3 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        <IoChevronForwardSharp className='text-lg' />
                    </button>

                </th>
         </tr>
          <tr>
                <th scope="col" class="px-6 py-3 flex gap-5 items-center">
              <input type="checkbox" class="accent-green-800 text-xl focus:accent-green-800 p-4 w-4 h-4 cursor-pointer" />
                <h2 className='text-gray-500'> مدير تكنولوجيا المعلومات والخدمات الرقمية</h2>
                </th>
                <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">
                        <h2 className='text-gray-700 font-semibold'>Draft</h2>
                    </div>
                </th>
                <th scope="col" className="px-6 py-3 ">
                -
                </th>
                 <th scope="col" class="px-6 py-3">
                    <h2 className='text-gray-700 font-semibold'>Jul 4, 12:25 PM</h2>
                </th>
                <th scope="col" class="px-6 py-3 text-gray-700">
                    Support Team
                </th>
                <th>
                    <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md text-sm px-3 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        <FaEllipsis className='text-lg' />
                    </button>
                      <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md text-sm px-3 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        <IoChevronForwardSharp className='text-lg' />
                    </button>

                </th>
         </tr>
          <tr>
                <th scope="col" class="px-6 py-3 flex gap-5 items-center">
              <input type="checkbox" class="accent-green-800 text-xl focus:accent-green-800 p-4 w-4 h-4 cursor-pointer" />
                <h2 className='text-gray-500'>الوعي بنظام الزكاة والدخل</h2>
                </th>
                <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">
                        <h2 className='text-gray-700 font-semibold'>Draft</h2>
                    </div>
                </th>
                <th scope="col" className="px-6 py-3 ">
                -
                </th>
                 <th scope="col" class="px-6 py-3">
                    <h2 className='text-gray-700 font-semibold'>Jul 4, 12:23 PM</h2>
                </th>
                <th scope="col" class="px-6 py-3 text-gray-700">
                    Support Team
                </th>
                <th>
                    <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md text-sm px-3 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        <FaEllipsis className='text-lg' />
                    </button>
                      <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md text-sm px-3 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        <IoChevronForwardSharp className='text-lg' />
                    </button>

                </th>
         </tr>
          <tr>
                <th scope="col" class="px-6 py-3 flex gap-5 items-center">
              <input type="checkbox" class="accent-green-800 text-xl focus:accent-green-800 p-4 w-4 h-4 cursor-pointer" />
                <h2 className='text-gray-500'>CFO (المدير المالي)</h2>
                </th>
                <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">
                        <h2 className='text-gray-700 font-semibold'>Active</h2>
                    </div>
                </th>
                <th scope="col" className="px-6 py-3 ">
                <div className='flex items-center gap-2'>
                 <div className="w-[75%] bg-[#efa21c] rounded-full  dark:bg-gray-700">
                 <div className="bg-[#32a46d] h-2.5 rounded-full dark:bg-gray-300" style={{width : '70%'}}></div>
                 </div>
                 <IoMdInformationCircleOutline className='text-lg'/>
                 <h5>3/4</h5>
                 </div>
                </th>
                 <th scope="col" class="px-6 py-3">
                    <h2 className='text-gray-700 font-semibold'>Jul 25, 6:08 PM</h2>
                </th>
                <th scope="col" class="px-6 py-3 text-gray-700">
                    
                </th>
                <th>
                    <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md text-sm px-3 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        <FaEllipsis className='text-lg' />
                    </button>
                      <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md text-sm px-3 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        <IoChevronForwardSharp className='text-lg' />
                    </button>

                </th>
         </tr>
           <tr>
                <th scope="col" class="px-6 py-3 flex gap-5 items-center">
              <input type="checkbox" class="accent-green-800 text-xl focus:accent-green-800 p-4 w-4 h-4 cursor-pointer" />
                <h2 className='text-gray-500'>Test Engineer</h2>
                </th>
                <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">
                        <h2 className='text-gray-700 font-semibold'>Active</h2>
                    </div>
                </th>
                <th scope="col" className="px-6 py-3 ">
                -
                </th>
                 <th scope="col" class="px-6 py-3">
                    <h2 className='text-gray-700 font-semibold'>Jul 24, 6:18 PM</h2>
                </th>
                <th scope="col" class="px-6 py-3 text-gray-700">
                    
                </th>
                <th>
                    <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md text-sm px-3 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        <FaEllipsis className='text-lg' />
                    </button>
                      <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md text-sm px-3 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        <IoChevronForwardSharp className='text-lg' />
                    </button>

                </th>
         </tr>
        <tr>
                <th scope="col" class="px-6 py-3 flex gap-5 items-center">
              <input type="checkbox" class="accent-green-800 text-xl focus:accent-green-800 p-4 w-4 h-4 cursor-pointer" />
                <h2 className='text-gray-500'>Test Analyst</h2>
                </th>
                <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">
                        <h2 className='text-gray-700 font-semibold'>Active</h2>
                    </div>
                </th>
                <th scope="col" className="px-6 py-3 ">
                  <div className='flex items-center gap-2'>
                 <div className="w-[75%] bg-[#efa21c] rounded-full  dark:bg-gray-700">
                 <div className="bg-[#32a46d] h-2.5 rounded-full dark:bg-gray-300" style={{width : '0%'}}></div>
                 </div>
                 <IoMdInformationCircleOutline className='text-lg'/>
                 <h5>0/2</h5>
                 </div>
                </th>
                 <th scope="col" class="px-6 py-3">
                    <h2 className='text-gray-700 font-semibold'>Jul 24, 5:18 PM</h2>
                </th>
                <th scope="col" class="px-6 py-3 text-gray-700">
                    Support Team
                </th>
                <th>
                    <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md text-sm px-3 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        <FaEllipsis className='text-lg' />
                    </button>
                      <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md text-sm px-3 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        <IoChevronForwardSharp className='text-lg' />
                    </button>

                </th>
         </tr>
          <tr>
                <th scope="col" class="px-6 py-3 flex gap-5 items-center">
              <input type="checkbox" class="accent-green-800 text-xl focus:accent-green-800 p-4 w-4 h-4 cursor-pointer" />
                <h2 className='text-gray-500'>Data Analyst</h2>
                </th>
                <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">
                        <h2 className='text-gray-700 font-semibold'>Active</h2>
                    </div>
                </th>
                <th scope="col" className="px-6 py-3 ">
                 -
                </th>
                 <th scope="col" class="px-6 py-3">
                    <h2 className='text-gray-700 font-semibold'>Jul 24, 6:18 PM</h2>
                </th>
                <th scope="col" class="px-6 py-3 text-gray-700">
                    Fahad Alsaadi
                </th>
                <th>
                    <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md text-sm px-3 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        <FaEllipsis className='text-lg' />
                    </button>
                      <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md text-sm px-3 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        <IoChevronForwardSharp className='text-lg' />
                    </button>

                </th>
         </tr>
          <tr>
                <th scope="col" class="px-6 py-3 flex gap-5 items-center">
              <input type="checkbox" class="accent-green-800 text-xl focus:accent-green-800 p-4 w-4 h-4 cursor-pointer" />
                <h2 className='text-gray-500'>English Language Skills</h2>
                </th>
                <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">
                        <h2 className='text-gray-700 font-semibold'>Active</h2>
                    </div>
                </th>
                <th scope="col" className="px-6 py-3 ">
                 -
                </th>
                 <th scope="col" class="px-6 py-3">
                    <h2 className='text-gray-700 font-semibold'>Jul 24, 6:18 PM</h2>
                </th>
                <th scope="col" class="px-6 py-3 text-gray-700">
                    Fahad Alsaadi
                </th>
                <th>
                    <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md text-sm px-3 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        <FaEllipsis className='text-lg' />
                    </button>
                      <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md text-sm px-3 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        <IoChevronForwardSharp className='text-lg' />
                    </button>

                </th>
         </tr>
         
        </tbody>
    </table>
</div> 


</div>


        </div>
        
    );
}

export default Assessments;
