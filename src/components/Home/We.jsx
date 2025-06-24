import React from 'react'

const We = () => {
  return (
    <section class="py-10 bg-white">
        <div class="container mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="p-6 bg-green-100 rounded-lg shadow-md text-center">
                    <i class="fas fa-check-circle text-4xl text-green-500 mb-4"></i>
                    <h2 class="text-xl font-bold mb-2">Reliable</h2>
                    <p>Count on us for consistent quality and service.</p>
                </div>
                <div class="p-6 bg-green-100 rounded-lg shadow-md text-center">
                    <i class="fas fa-shipping-fast text-4xl text-green-500 mb-4"></i>
                    <h2 class="text-xl font-bold mb-2">Fast Delivery</h2>
                    <p>Quick and efficient delivery to your doorstep.</p>
                </div>
                <div class="p-6 bg-green-100 rounded-lg shadow-md text-center">
                    <i class="fas fa-clock text-4xl text-green-500 mb-4"></i>
                    <h2 class="text-xl font-bold mb-2">Timely</h2>
                    <p>Always on time, every time.</p>
                </div>
                <div class="p-6 bg-green-100 rounded-lg shadow-md text-center">
                    <i class="fas fa-lock text-4xl text-green-500 mb-4"></i>
                    <h2 class="text-xl font-bold mb-2">Secured Payment</h2>
                    <p>Safe and secure payment options.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default We