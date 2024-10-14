import { NavLink } from 'react-router-dom';

const Headers = () => {
  return (

    <header className="bg-gray-800 p-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-lg font-bold text-white">TankstackReactQuery</h1>
      <nav>
        <ul className="flex space-x-6">
          <li>
          
            <NavLink to="/react-query" className="hover:text-gray-400 text-white" >Home</NavLink>
          </li>
          <li>
           
            <NavLink to="/react-query/fetch-new" className="hover:text-gray-400 text-white">Fetch New</NavLink>
          </li>
          <li>
           
            <NavLink to="/react-query/fetch-old" className="hover:text-gray-400 text-white">Fetch Old</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  );
};

export default Headers;
