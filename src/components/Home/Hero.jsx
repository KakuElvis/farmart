import React from 'react'

const Hero = () => {
  return (
    <main class="bg-cover bg-center  opacity-100 bg-green-800">
        <section id="hero">
            <div class=" p-20">
                <div class="flex flex-col  items-center justify-between z-20 md:flex-row">
                    <div class="grid p-20">
                        <div class="py-5">
                            <h1 class="text-5xl font-medium text-white">"Fresh from the Farm to Your <br/> Table  – Order Nature’s Best, <br/> Delivered to  Your Doorstep!"</h1>
                        </div>
                        <div class="py-5 space-x-5">
                            <button class="text-white border-solid border-2 border-button-main px-9 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200">Explore Fresh Produce</button>
                        </div>
                    </div>

                        <div class="place-items-right px-5">
                            <img src="./src/assets/shop.svg" class="transform scale-x-[-1]" alt="" width="500" height="300" />
                        </div>
                    </div>
                </div>
        </section>
    </main>
  )
}

export default Hero