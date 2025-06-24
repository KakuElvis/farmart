import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <section className=" flex items-center justify-center h-screen" style={{ backgroundImage: `url('./src/assets/veg.jpg')`}} >
        <div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
            <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
            <form action="#" method="POST">
                <div class="mb-4">
                    <label for="email" class="block text-gray-700">Email</label>
                    <input type="email" id="email" name="email" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required/>
                </div>
                <div class="mb-6">
                    <label for="password" class="block text-gray-700">Password</label>
                    <input type="password" id="password" name="password" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required/>
                </div>
                <div class="flex items-center mb-4">
                        <input type="checkbox" id="remember-me" class="mr-2"/>
                        <label for="remember-me" class="text-sm">Remember Me</label>
                    </div>
                    <div class="text-left mb-4">
                        <a href="#" class="text-blue-500 text-sm hover:underline">Forgot Password?</a>
                    </div>
                <button type="submit" class="w-full bg-green-800 text-white py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">Login</button>
            </form>
            <div>
                <div>
                    <h3 class="text-center py-3">Or instead</h3>
                </div>
                <div>
                    <a href="https://www.google.com">
                        <button  class="flex items-center justify-center px-3   w-full bg-white text-gray-600 border border-gray-400 py-2 rounded-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"><img src="./src/assets/google.svg" 
                            alt="Google Logo" class="w-5 h-5 mr-2"/>Sign in with Google</button>
                    </a>
                </div>
                <div>
                    <h3 class="text-center py-3 text-gray-700">Don't have an account? <span class="text-green-800"><Link to="/signup">Signup</Link></span></h3>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Login