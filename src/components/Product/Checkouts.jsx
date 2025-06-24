import React from 'react'

const Checkout = () => {
  return (
    <>
    
    <div class="flex justify-center mt-10 py-20">
        <h1 class="font-bold text-2xl"> DELIVERY METHOD</h1>
    </div> 
    
    <section class="py-20 bg-gray-50">
        <div class="container mx-auto">
            <div class="grid grid-cols-3  gap-4">
                <div class=" col-span-2 p-6 bg-white rounded-lg shadow-md">
                    <div class="relative">
                        <h2 class="top-0 left-0 font-bold">CUSTOMER ADDRESS </h2>
                        <hr class="my-2 border-t-1 border-gray-200 w-full mx-auto"/>
                        <a href=""><span class="absolute top-0 right-0  text-blue-600 text-xl font-bold px-2 py-1">Change</span></a>
                    </div>
                    <div class="grid">
                        <div class="">
                            <h2 class="text-xl mt-2 font-bold">KwameKaku</h2>
                        </div>
                        <div class="">
                            <p class="text-gray-700 mt-2 text-justify">My home, at home - our house - off Kasoa-Dodowa road. | Greater Accra | +233 20 000 0000</p>
                        </div>
                    </div>
                </div>
                <div class="p-6 bg-white rounded-lg shadow-md text-center">
                    <h2 class="text-2xl font-bold mb-4">Order Summary</h2>
                    <hr class="my-2 border-t-1 border-gray-200 w-full mx-auto"/>

                    <div class="flex justify-between mb-2">
                        <span class="text-gray-700">Item's Total:</span>
                        <span class="text-gray-700">GHS 15.00</span>
                    </div>
                    <div class="flex justify-between mb-2">
                        <span class="text-gray-700">Delivery Fees:</span>
                        <span class="text-gray-700">GHS 5.00</span>
                    </div>
                    <div class="flex justify-between mb-4">
                        <span class="text-gray-700 font-bold">Total Amount:</span>
                        <span class="text-gray-700 font-bold">GHS 20.00</span>
                    </div>
                    <button class="bg-green-800 text-white px-5 py-3 rounded-md w-full hover:bg-green-700">
                       <a href="/pages/account.html">Confirm Order</a> 
                    </button>
                </div>
            </div>

            <div class="grid grid-cols-3  gap-4 py-5">
                <div class="col-span-2 p-6 bg-white rounded-lg shadow-md ">
                    <h2 class="text-2xl font-bold mb-4">DELIVERY DETAILS</h2>
                    <hr class="my-2 border-t-1 border-gray-200 w-full mx-auto"/>
                    <div class="flex justify-between mb-2">
                        <h2 class="text-gray-700 ">Pick Up Station: <span class="">Home Delivery</span></h2>
                    </div>
                    <div class="flex justify-between mb-2">
                        <h4 class="text-gray-700">Item Selected: <span class="">Tomatoes</span></h4>
                    </div>
                    <div class="flex items-center border border-gray-300 p-4 rounded-md mb-4">
                        <img src="./src/assets/tomatoes.webp" alt="Produce Image" class="w-20 h-20 object-cover rounded-md mr-4"/>
                        <div>
                            <h3 class="text-lg font-bold">Tomatoes</h3>
                            <div class="flex items-center mt-2">
                                <h3>QTY: 2Kg</h3>
                            </div>
                        </div>
                    </div>
                    <button class="bg-green-800 text-white px-5 py-3 rounded-md w-full hover:bg-green-700">
                        Confirm Delivery Details
                    </button>
                </div>
            </div>

            <div class="grid grid-cols-3  gap-4 py-5">
                <div class="col-span-2 p-6 bg-white rounded-lg shadow-md ">
                    <h2 class="text-2xl font-bold mb-4">PAYMENT METHOD</h2>
                    <hr class="my-2 border-t-1 border-gray-200 w-full mx-auto"/>
                    <div class="flex items-center mb-4">
                        <input type="radio" id="visa" name="payment-method" class="mr-2"/>
                        <label for="visa" class="text-gray-700">Visa</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input type="radio" id="mastercard" name="payment-method" class="mr-2"/>
                        <label for="mastercard" class="text-gray-700">MasterCard</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input type="radio" id="momo" name="payment-method" class="mr-2"/>
                        <label for="momo" class="text-gray-700">Mobile Money (Momo)</label>
                    </div>
                    <button class="bg-green-800 text-white px-5 py-3 rounded-md w-full hover:bg-green-700">
                        Confirm Payment Method
                    </button>
                </div>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default Checkout