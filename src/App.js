import logo from './logoweb.svg'
import menu from './menu.svg'
import imageone from './imageone.png'
import imagetwo from './imagetwo.png'

import './App.css';

function App() {
  return (
    <div className="App font-['Gilroy']">
      <header className='mt-10'>
        <div className='flex items-center justify-between'>
          <div>
          <img src={logo} alt='logo' className='ml-12' />
          </div>
          <div className='mr-12'>
          <button><img src={menu} /></button>
          </div>
        </div>
      </header>
      <section>
        <p className='font-bold lg:text-6xl w-6/12 mx-auto mt-16'>Book a crafts session in two minutes.</p>
        <p className='font-medium text-lg mt-6'>Learn to make beautiful artworks with <span className='font-bold'>Seyi</span></p>
      <button className='font-bold px-8 py-4 bg-black text-white mt-16 hover:outline-none hover:bg-slate-900'>Book a session</button>
      </section>
      <section className='bg-black mt-20'>
      <div className='pt-4 grid grid-cols-3'>
        <div className=''><img className='mt-10 lg:w-40' src={imageone} /></div>
        <div className=''><img className='mt-10 lg:w-60' src={imagetwo} /></div>

      </div>
      </section>
    </div>
  );
}

export default App;
