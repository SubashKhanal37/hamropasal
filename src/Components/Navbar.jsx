import React from 'react'

const Navbar = () => {
   return (
      <>
      <nav className='flex bg-orange-400 space-x-96'>
         <div className=''>Hamro Pasal</div>
         <div>Logo</div>
         <div className='w-fit'>
            <div>Login</div>
            <div>ContactUs</div>
            <div>signup</div>
         </div>
         
      </nav>
      </>
   )
}

export default Navbar