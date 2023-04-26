import React from 'react'

function Footer() {
  return (

<footer class="mt-6 text-center bg-blue-600  text-gray-50">
  <div class="container p-6">
    <div class="">
      <p class="flex items-center justify-center">
        <span class="mr-4 text-lg font-semibold">E-learning platform</span>
        <button
          type="button"
          class="inline-block rounded-full border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
          data-te-ripple-init
          data-te-ripple-color="light">
          Get Started
        </button>
      </p>
    </div>
  </div>

  <div
    class="p-4 text-center text-xl bg-gray-950 bg-opacity-25">
    ©{new Date().getFullYear()} E-nyasa Academia
   
  </div>
</footer>
  )
}

export default Footer