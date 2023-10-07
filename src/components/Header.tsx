import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className='bg-slate-700 w-full'>
      <nav className='flex  justify-between md:justify-between items-center h-16 mx-auto md:px-32 p-7'>
        <img
          src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/908df9ea-7ae7-4380-8162-72a8274dc18c/d5gepkn-828b046d-c362-4806-a603-a89f82eaeb44.png/v1/fill/w_900,h_438/concurso__animeid_logo_terminado__by_crizaros_d5gepkn-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDM4IiwicGF0aCI6IlwvZlwvOTA4ZGY5ZWEtN2FlNy00MzgwLTgxNjItNzJhODI3NGRjMThjXC9kNWdlcGtuLTgyOGIwNDZkLWMzNjItNDgwNi1hNjAzLWE4OWY4MmVhZWI0NC5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.TD3Nlo-MbtO4VRhfUaaF5a3sV2tV3z5VKUM2dgMTp9g'
          alt='logo'
          className='w-36 '
        />
        <div className={`md:flex ${isMenuOpen ? "flex" : "hidden"}`}>
          <ul className='md:flex  items-center gap-4 font-poppins  text-xl text-white'>
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

        <button
          onClick={toggleMenu}
          data-collapse-toggle='navbar-default'
          type='button'
          className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          aria-controls='navbar-default'
          aria-expanded='false'
        >
          {isMenuOpen ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-full h-auto text-blue-500'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
              <path d='M18 6l-12 12'></path>
              <path d='M6 6l12 12'></path>
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-full h-auto text-blue-500'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
              <path d='M4 6l16 0'></path>
              <path d='M4 12l16 0'></path>
              <path d='M4 18l16 0'></path>
            </svg>
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
