import profile from '../assets/profile.png'
import { TiThMenu } from "react-icons/ti";
import { MdClose } from "react-icons/md";

import { useState } from 'react';

function NavBarComponent(){
   
    const [toggle, setToggle] = useState(false);

    function handelToggle(){
        setToggle(!toggle)
    }

    return<>
    <div className='h-[120px] flex items-center justify-between px-[20px]'>
        <img src={profile} alt="" className='w-[100px] h-[100px]'/> 
        {/* DESKTOP VIEW */}
        <ul className='items-center gap-[10px] hidden lg:flex'>
            <li className='text-[20px] text-blue-500'>Home</li>
            <li className='text-[20px] text-blue-500'>About Us</li>
            <li className='text-[20px] text-blue-500'>Contacts</li>
        </ul>
        
        {/* FORM MOBILE VIEW */}
        <div className='flex lg:hidden '>
            <TiThMenu onClick={handelToggle} className='size-[40px] cursor-pointer'/>
            {toggle && <div className='absolute bg-blue-500 top-0 bottom-[50%] right-0 left-0 z-10'>
                    <MdClose onClick={handelToggle} size={40} className='position absolute top-[20px] right-[20px]'/>
                    <ul className='items-center gap-[10px] flex flex-col mt-[100px]'>
                        <li className='text-[20px] text-white'>Home</li>
                        <li className='text-[20px] text-white'>About Us</li>
                        <li className='text-[20px] text-white'>Contacts</li>
                    </ul>
                </div>}
        </div>

    </div>
    </>
}

export default NavBarComponent;