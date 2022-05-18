import logo from './logoweb.svg'
import menu from './menu.svg'
import imageone from './imageone.png'
import imagetwo from './imagetwo.png'
import imagethre from './imagethre.png'
import Modal from './Modal/Modal'
import useModal from './Modal/useModal'


import './App.css';

function App() {
  const {isShowing,toggle} = useModal()
  return (
    <div className="App font-['Gilroy']">
      <header className='mt-10'>
        <div className='flex items-center justify-between'>
          <div>
          <img src={logo} alt='logo' className='ml-6 lg:ml-12' />
          </div>
          <div className=' mr-6 lg:mr-12'>
          <button><img src={menu} /></button>
          </div>
        </div>
      </header>
      <section>
        
        <p className='font-bold text-3xl lg:text-6xl w-10/12 lg:w-6/12 mx-auto mt-20 lg:mt-16'>Book a crafts session in two minutes.</p>
        <div className='slide-left'>
        <p className='font-medium lg:text-lg mt-3 lg:mt-6'>Learn to make beautiful artworks with <span className='font-bold'>Seyi</span></p>
        </div>
      <button onClick={toggle} className='font-bold px-8 py-4 bg-black text-white mt-11 lg:mt-16 hover:outline-none hover:bg-slate-900'>Book a session</button>
      <Modal isShowing={isShowing} hide={toggle} />
      </section>
      <section className='bg-black mt-20'>
      <div className='pt-4 grid grid-cols-3 h-96 gap-9 lg:ml-32'>
        <div className='w-60 lg:w-80'><img className='w-24 mt-20 lg:mt-10 lg:w-40' src={imageone} /></div>
        <div className='w-60 lg:w-96'><img className='mt-20 lg:mt-10 lg:w-60' src={imagetwo} /></div>
        <div className='w-60 '><img className=' mt-20 lg:mt-10 lg:w-40' src={imagethre} /></div>


      </div>
      </section>
    </div>
  );
}

export default App;
