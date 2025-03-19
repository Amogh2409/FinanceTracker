import React from 'react'

function Login() {
  return (
    <div className="pt-20 absolute inset-0 bg-gradient-to-r from-blue-800 via-purple-700 to-pink-600 flex justify-center h-[100vh] items-center">
        <div className='flex flex-col pl-6  rounded  justify-center w-[40%]  mt-8'>
        <h2 className='w-[100%] text-center mt-2'>Welcome Back</h2>
        <form action="#" className='w-[100%] p-4 flex flex-col gap-2 justify-center'>
          <label htmlFor="email">Email Address</label>
          <input type="email" className='border-1 rounded p-1 ' name="email" id="email" placeholder='example@gmail.com' />
          <label htmlFor="pswd">Password</label>
          <input type="password" className='border-1 rounded p-1  ' name="pswd" id="pswd" placeholder='Enter Password' />
          <div className='flex px-2 justify-between'>
            <div >
                <input className='mr-3' type="radio" name="remme" id="remme" />
                <label htmlFor="remme">Remember Me</label>
            </div>
            <span className=''>Forgot Password</span>
          </div>
          <button className='border-1 rounded-2xl bg-[#d4b8b8] p-1'>Login</button>
          <p className='w-[100%] text-center'>Didn't have an Account ? <span className='text-blue-600 hover:cursor-pointer'>Sign Up Here</span> </p>
        </form>
      </div>
    </div>
  )
}

export default Login