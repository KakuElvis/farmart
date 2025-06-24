import React from 'react'
import { Link } from 'react-router-dom';


const Products = () => {
  return (
    <>
    
    <section class="py-20 bg-gray-50">
        <div class="container mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="p-6 bg-white rounded-lg shadow-md text-center">
              <Link to="/Single_produce" className="text-green-800 :bg-hover-text ease-in duration-200 px-4 py-2 rounded-md cursor-pointer">
                <div class="relative">
                  <img src="./src/assets/pepper.jpg" alt="Pepper" class="w-full h-48 object-cover mb-4 rounded-md" />
                  <hr class="my-2 border-t-1 border-gray-400 w-1/2 mx-auto" />
                  <span class="absolute top-0 right-0 bg-green-800 text-white text-xs font-bold px-2 py-1 rounded-bl-md">Available</span>
                </div>
                <h2 class="text-xl font-bold">Pepper</h2>
                <p class="text-gray-700 mt-2">Price: GHS 15.00</p>
                <p class="text-gray-500">Weight: 1kg</p>
                </Link>
              {/* </a> */}
            </div>
            <div class="p-6 bg-white rounded-lg shadow-md text-center">
              <div class="relative">
                <img src="./src/assets/tomatoes.webp" alt="tomatoes" class="w-full h-48  object-cover mb-4 rounded-md" />
                <hr class="my-2 border-t-1 border-gray-400 w-1/2 mx-auto" />
                <span class="absolute top-0 right-0 bg-red-800 text-white text-xs font-bold px-2 py-1 rounded-bl-md">Sold Out</span>
              </div>
              <h2 class="text-xl font-bold">Tomatoes</h2>
              <p class="text-gray-700 mt-2">Price: GHS 250.00</p>
              <p class="text-gray-500">Weight: 5kg</p>
            </div>
            <div class="p-6 bg-white rounded-lg shadow-md text-center">
                    <div class="relative">
                        <img src="./src/assets/okra.png" alt="Pepper" class="w-full h-48 object-cover mb-4 rounded-md"/>
                        <hr class="my-2 border-t-1 border-gray-400 w-1/2 mx-auto"/>
                        <span class="absolute top-0 right-0 bg-red-800 text-white text-xs font-bold px-2 py-1 rounded-bl-md">Sold Out</span>
                    </div>
                    <h2 class="text-xl font-bold">Okra</h2>
                    <p class="text-gray-700 mt-2">Price: GHS 15.00</p>
                    <p class="text-gray-500">Weight: 1kg</p>
                </div>
                <div class="p-6 bg-white rounded-lg shadow-md text-center">
                    <div class="relative">
                        <img src="./src/assets/maize.jpg" alt="Pepper" class="w-full h-48 object-cover mb-4 rounded-md"/>
                        <hr class="my-2 border-t-1 border-gray-400 w-1/2 mx-auto"/>
                        <span class="absolute top-0 right-0 bg-green-800 text-white text-xs font-bold px-2 py-1 rounded-bl-md">Available</span>
                    </div>
                    <h2 class="text-xl font-bold">Maize</h2>
                    <p class="text-gray-700 mt-2">Price: GHS 15.00</p>
                    <p class="text-gray-500">Weight: 1kg</p>
                </div>
                <div class="p-6 bg-white rounded-lg shadow-md text-center">
                    <div class="relative">
                        <img src="./src/assets/pepper.jpg" alt="Pepper" class="w-full h-48 object-cover mb-4 rounded-md"/>
                        <hr class="my-2 border-t-1 border-gray-400 w-1/2 mx-auto"/>
                        <span class="absolute top-0 right-0 bg-green-800 text-white text-xs font-bold px-2 py-1 rounded-bl-md">Available</span>
                    </div>
                    <h2 class="text-xl font-bold">Pepper</h2>
                    <p class="text-gray-700 mt-2">Price: GHS 15.00</p>
                    <p class="text-gray-500">Weight: 1kg</p>
                </div>
                <div class="p-6 bg-white rounded-lg shadow-md text-center">
                    <div class="relative">
                        <img src="./src/assets/maize.jpg" alt="Pepper" class="w-full h-48 object-cover mb-4 rounded-md"/>
                        <hr class="my-2 border-t-1 border-gray-400 w-1/2 mx-auto"/>
                        <span class="absolute top-0 right-0 bg-green-800 text-white text-xs font-bold px-2 py-1 rounded-bl-md">Available</span>
                    </div>
                    <h2 class="text-xl font-bold">Maize</h2>
                    <p class="text-gray-700 mt-2">Price: GHS 15.00</p>
                    <p class="text-gray-500">Weight: 1kg</p>
                </div>
                <div class="p-6 bg-white rounded-lg shadow-md text-center">
                    <div class="relative">
                        <img src="./src/assets/pepper.jpg" alt="Pepper" class="w-full h-48 object-cover mb-4 rounded-md"/>
                        <hr class="my-2 border-t-1 border-gray-400 w-1/2 mx-auto"/>
                        <span class="absolute top-0 right-0 bg-green-800 text-white text-xs font-bold px-2 py-1 rounded-bl-md">Available</span>
                    </div>
                    <h2 class="text-xl font-bold">Pepper</h2>
                    <p class="text-gray-700 mt-2">Price: GHS 15.00</p>
                    <p class="text-gray-500">Weight: 1kg</p>
                </div>
                <div class="p-6 bg-white rounded-lg shadow-md text-center">
                    <div class="relative">
                        <img src="./src/assets/okra.png" alt="Pepper" class="w-full h-48 object-cover mb-4 rounded-md"/>
                        <hr class="my-2 border-t-1 border-gray-400 w-1/2 mx-auto"/>
                        <span class="absolute top-0 right-0 bg-red-800 text-white text-xs font-bold px-2 py-1 rounded-bl-md">Sold Out</span>
                    </div>
                    <h2 class="text-xl font-bold">Okra</h2>
                    <p class="text-gray-700 mt-2">Price: GHS 15.00</p>
                    <p class="text-gray-500">Weight: 1kg</p>
                </div>
          </div>
        </div>
      </section>
      </>
    







  )
}

export default Products