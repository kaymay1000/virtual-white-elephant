import { useState, ReactNode } from 'react';
import Nav from '../Nav';
import Footer from '../Footer';
import HowToPlayModal from '../HowToPlayModal';

type LayoutProps = {
  children: ReactNode;
}

const Layout = ({
  children
}: LayoutProps): JSX.Element => {

  const [showHowToPlay, setShowHowToPlay] = useState(false);

  return (
    // TW sticky footer how-to: https://www.gomasuga.com/blog/creating-a-sticky-footer-with-tailwind
    // div below serving as body 
    <div className="flex flex-col min-h-screen">
      <Nav setShowHowToPlay={setShowHowToPlay}/>
      <main className="flex flex-col flex-auto justify-center px-8 pt-6 pb-8 w-full max-w-7xl mx-auto">
        <div className="text-center">
          {children}
        </div>
        
        {showHowToPlay ? <HowToPlayModal showHowToPlay={showHowToPlay} setShowHowToPlay={setShowHowToPlay}/> : <></>}
      </main>
      <Footer/>
    </div>
  )
}

export default Layout;
