import Header from './page/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto mt-6">
        <Outlet />
      </main>
    </>
  );
}
