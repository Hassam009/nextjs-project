import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div className='login'>
      <section>
        <form action="">
            <input type="email" placeholder='Enter Email'/>
            <input type="password" placeholder='Enter Password'/>
            <button type='submit'>Login</button>
       
       <p>Or</p>
       <Link href={"/register"}>New User</Link>
        </form>
      </section>
    </div>
  )
}

export default page
