import profile from '../assets/profile.png'
import { TiThMenu } from "react-icons/ti";
import { MdClose } from "react-icons/md";

import { useState } from 'react';
//import { useDispatch } from 'react-redux';
//import { changeActiveAction, changeNameAction } from '../store/productSlice';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NavBarComponent(){

    let imageUrl = localStorage.getItem('image');

    const {cart} = useSelector(state => state.productStore)
   
    const [toggle, setToggle] = useState(false);
    //const dispatch = useDispatch();



    function handelToggle(){
        setToggle(!toggle)
    }

    // function handleCard(){
    //     dispatch(changeActiveAction())
    // }

    return<>
    <div className='h-[120px] flex items-center justify-between px-[20px]'>
        <img src={profile} alt="" className='w-[100px] h-[100px]'/> 
        {/* DESKTOP VIEW */}
        <ul className='items-center gap-[10px] hidden lg:flex'>
            <Link to="/" className='text-[20px] text-blue-500'>Home</Link>
            <Link to="/products" className='text-[20px] text-blue-500'>Products</Link>
            <Link to="/register" className='text-[20px] text-blue-500'>Register</Link>
        </ul>

        <div>
            <span>{cart.length}</span>
            <img src={imageUrl} alt="dsds" className='w-[100px] h-[100px] object-cover rounded'/>
        </div>

        {/* <button onClick={handleCard}>Show Card</button> */}
        
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