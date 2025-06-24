import React from 'react'

const Single_product = () => {
  return (
    <>
        <section class="container mx-auto py-10">
        <div class="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
            <div class="md:w-1/2 p-6">
                <div class="p-6 bg-white rounded-lg shadow-md">
                    <img src="./src/assets/tomatoes.webp" alt="Produce Image" class="w-full h-full object-cover rounded-md"/>
                </div>
            </div>
            <div class="md:w-1/2 p-6">
                <h2 class="text-3xl font-bold mb-4">Tomatoes</h2>
                <p class="text-2xl text-gray-700 mb-4">Price: GHS 20.00</p>
                <div class="flex items-center mb-4">
                    <label for="size" class="mr-4">Size (kg):</label>
                    <select id="size" class="border border-gray-300 rounded-md p-2">
                        <option value="1">1 kg</option>
                        <option value="2">2 kg</option>
                        <option value="5">5 kg</option>
                    </select>
                </div>
                <a href="/pages/checkout.html">
                    <button class="bg-green-800 text-white px-5 py-3 rounded-md flex items-center hover:bg-green-700">
                        <i class="fas fa-shopping-cart mr-2"></i> Add to Cart
                    </button>
                </a>
                
            </div>
            <div class="md:w-1/2 p-6">
                
                <p class="text-gray-700 py-10 text-xl mb-4">Our farm-fresh tomatoes are grown organically and harvested at peak ripeness to ensure the best flavor and nutritional value. Perfect for salads, sauces, and cooking, these tomatoes are a staple in any kitchen.</p>
                
                
                
            </div>
        </div>
    </section>
    </>
  )
}

export default Single_product