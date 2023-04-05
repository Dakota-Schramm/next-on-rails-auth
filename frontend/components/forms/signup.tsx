import React from 'react'

const Signup = () => {
  return (
    <form action="" method="post" className="flex flex-col p-3 space-y-2 bg-gray-500 rounded-md">
      <FormHeader />
      <FormBody />
      <FormFooter />
    </form>
  )
}

const FormHeader = () => (
  <header className='mb-4 space-y-4 text-3xl'>
    <section className='flex items-center'>
      <img src='/favicon.ico' alt='Company logo' />
      <h2>Untitled App</h2>
    </section>
    <h3>Sign up</h3>
  </header> 
)

const FormBody = () => (
  <section className='flex flex-col space-y-2'>
    <label>
      <input className='border border-black border-solid rounded-lg' 
        type="text" 
        name="name" 
        id="name" 
        placeholder="Name"
        required 
      />
    </label>
    <label>        
      <input className='border border-black border-solid rounded-lg' 
        type="email" 
        name="email" 
        id="email" 
        required 
        placeholder="Email"
      />
    </label>
    <label className='w-[250px]'>
      <input
        type='checkbox'
        name='updates'
        id='updates'
        className='mr-2'
      />
      Sign up for emails to get updates from Untitled App products, offers and your Member benefits.
    </label>
  </section>
)

const FormFooter = () => (
  <footer className='space-y-[10px] flex flex-col items-center text-center'>
    <button className='p-1 bg-blue-600 border border-black border-solid rounded-lg'>
      Create an account
    </button>
    <p className='w-[250px]'>
      By continuing, you are indicating that you have read and agree to the <a href='/tos'>Terms of Service</a> and <a href='/privacy'>Privacy Policy.</a>
    </p>
    <p>
      Already a member? <a href='/sign-in'>Sign in</a>
    </p>
  </footer>
)

export default Signup