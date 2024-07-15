import React from 'react';
import { Link } from 'gatsby'

const NavBar =()=> {

    return (

        <section className='w-full bg-indigo-900 '>

            <ul className='flex flex-row flex-center items-center text-white w-full'>
                <li className='m-4 font-bold'>
                <Link to='/'>Home</Link>
                </li>

                <li className='m-4 font-bold'>

                <Link to='/About'>About</Link>

                </li>
                <li className='border-solid border-2 border-light-blue-300 p-2 float-right'>
                    Contact Me
                </li>


            </ul>

        </section>

    )
}
export default NavBar