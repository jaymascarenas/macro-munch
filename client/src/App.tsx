import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
<<<<<<< HEAD
      <main className='container pt-5'>
=======
      <main>
        <Outlet />
>>>>>>> b7943d92204ce424c81f36d3fe037e370f8a8c28
      </main>
        <Outlet />
      
    </div>
  );
}

export default App;
