import logo from '@/public/images/watch-dogs2-nav-brand-logo.png'
import logo2 from '@/public/images/wd2-ubicom-hero-logo-stacked-white.png'
export default function Navbar(){
    return (
        <div className='flex flex-col justify-center items-center'>
            <nav className='bg-black w-full h-12'>

            <div className="flex items-center space-x-6">
                           <img src={logo2.src} alt="Watch Dogs 2 Logo" className='w-12 h-12 ml-14'/>
                            <span className='text-white text-sm font-bold'>GAMES</span>
                            <span className='text-white text-sm font-bold'>NEWS</span>
                            <span className='text-white  text-sm font-bold'>STORE</span>
                            <span className='text-white  text-sm font-bold'>UBISOFT+</span>


            </div>
 
                <div  className='flex space-x-2 items-center justify-end ml-auto'>
             <span>Download Ubisoft Connect</span>
             <span>download icon</span>
             <span>search icon</span>
                </div>

                <div>
 <span>account icon</span>
                </div>
            </nav>
            <nav className='flex items-center w-full h-12 bg-[#2A2B2F]'>
                <img src={logo.src} alt="Watch Dogs 2 Logo" className='w-42 ml-28'/>
                <div className='flex space-x-1 font-semibold text-xl ml-60'>
                    MORE GAMES <span>drop down icon</span>
                </div>
                <button className='ml-auto text-white text-2xl font-semibold bg-[#33c8f3] h-full w-60'>
                    BUY NOW
                </button>
            </nav>
        </div>
    );
}