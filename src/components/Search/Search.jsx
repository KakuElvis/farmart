import React from 'react'

const Search = () => {
  return (
    <div>
        <div class="flex justify-center mt-30">
      <input type="text" placeholder="Search for farm produce..." class="px-20 w-1/2 p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-600" />
      <button class="bg-green-800 text-white px-5 py-3 rounded-r-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600">
        Search
      </button>
    </div>
    </div>
  )
}

export default Search