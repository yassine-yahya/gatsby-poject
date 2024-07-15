import * as React from 'react'
import { Link } from 'gatsby'
import NavBar from '../Components/Navbar'
import Layout from '../Components/Layout'

const IndexPage = () => {
  return (
    
<>
    <NavBar />
    <main className= ' flex-col align-center justify-center padding p-8 h-screen bg-indigo-700 '>
<div className='mx-12 my-12'>
      <h1 className='text-white text-6xl'>Welcome to my Page!</h1>
      <p className='text-white text-5xl'>I'm making this with Javascript Framework, like React and Gatsby.</p>
      
      <p className='text-white text-3xl'>Contact me to make one for you :)</p>

    </div>
    </main>
    </>
  )
}

export const Head = () => <title>Home Page</title>

export const wrapRootElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};
export default IndexPage
