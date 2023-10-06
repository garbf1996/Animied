import React from "react";

const Header = () => {
  return (
    <header className='bg-slate-700 w-full'>
      <nav className='flex  justify-between md:justify-between items-center h-16 mx-auto md:px-32 p-7'>
        <img
          src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/908df9ea-7ae7-4380-8162-72a8274dc18c/d5gepkn-828b046d-c362-4806-a603-a89f82eaeb44.png/v1/fill/w_900,h_438/concurso__animeid_logo_terminado__by_crizaros_d5gepkn-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDM4IiwicGF0aCI6IlwvZlwvOTA4ZGY5ZWEtN2FlNy00MzgwLTgxNjItNzJhODI3NGRjMThjXC9kNWdlcGtuLTgyOGIwNDZkLWMzNjItNDgwNi1hNjAzLWE4OWY4MmVhZWI0NC5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.TD3Nlo-MbtO4VRhfUaaF5a3sV2tV3z5VKUM2dgMTp9g'
          alt='logo'
          className='w-36 '
        />
        <button
          data-collapse-toggle='navbar-default'
          type='button'
          className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          aria-controls='navbar-default'
          aria-expanded='false'
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className='w-5 h-5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 17 14'
          >
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M1 1h15M1 7h15M1 13h15'
            />
          </svg>
        </button>
        <div className='hidden'>
          <ul className='md:flex items-center gap-4 font-poppins  text-xl text-white'>
            <li>
              <a
                className='hover:scale-105 hover:text-blue-500 duration-150'
                href=''
              >
                INICIO
              </a>
            </li>
            <li>
              <a
                className='hover:scale-105 hover:text-blue-500 duration-150'
                href=''
              >
                NEW
              </a>
            </li>
            <li>
              <a
                className='hover:scale-105 hover:text-blue-500 duration-150'
                href=''
              >
                POST
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
