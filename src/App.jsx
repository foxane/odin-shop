import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';

function App() {
  return (
    <>
      <Header></Header>
      <Outlet />
    </>
  );
}

export default App;
