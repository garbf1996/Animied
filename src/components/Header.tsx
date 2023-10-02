import React from "react";

const Header = () => {
  return (
    <header className='bg-slate-700 w-full'>
      <nav className='flex justify-between items-center h-16 mx-auto px-32'>
        <img
          src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/908df9ea-7ae7-4380-8162-72a8274dc18c/d5gepkn-828b046d-c362-4806-a603-a89f82eaeb44.png/v1/fill/w_900,h_438/concurso__animeid_logo_terminado__by_crizaros_d5gepkn-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDM4IiwicGF0aCI6IlwvZlwvOTA4ZGY5ZWEtN2FlNy00MzgwLTgxNjItNzJhODI3NGRjMThjXC9kNWdlcGtuLTgyOGIwNDZkLWMzNjItNDgwNi1hNjAzLWE4OWY4MmVhZWI0NC5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.TD3Nlo-MbtO4VRhfUaaF5a3sV2tV3z5VKUM2dgMTp9g'
          alt='logo'
          className='w-36 '
        />
        <ul className='md:flex items-center gap-3 font-poppins hidden text-xl text-white'>
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
      </nav>
    </header>
  );
};

export default Header;
