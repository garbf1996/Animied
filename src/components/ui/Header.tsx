const Header = () => {
  return (
    <header>
      <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800'>
        <div className=' flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
          <a className=' flex items-center' href=''>
            <img
              src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/908df9ea-7ae7-4380-8162-72a8274dc18c/d5gepkn-828b046d-c362-4806-a603-a89f82eaeb44.png/v1/fill/w_900,h_438/concurso__animeid_logo_terminado__by_crizaros_d5gepkn-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDM4IiwicGF0aCI6IlwvZlwvOTA4ZGY5ZWEtN2FlNy00MzgwLTgxNjItNzJhODI3NGRjMThjXC9kNWdlcGtuLTgyOGIwNDZkLWMzNjItNDgwNi1hNjAzLWE4OWY4MmVhZWI0NC5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.TD3Nlo-MbtO4VRhfUaaF5a3sV2tV3z5VKUM2dgMTp9g'
              alt='Animied'
              className='mr-3 h-12 w-15 '
            />
          </a>
          <div className='hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1'>
            <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
              <li>
                <a
                  className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'
                  href=''
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href=''
                  className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'
                >
                  Animes
                </a>
              </li>
              <li>
                <a
                  href=''
                  className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'
                >
                  Mangas
                </a>
              </li>
              <li>
                <a
                  href=''
                  className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'
                >
                  Noticias
                </a>
              </li>
              <li>
                <a
                  href=''
                  className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'
                >
                  Foro
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
