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
      <main className="flex-auto">
        {children}
        {showHowToPlay ? <HowToPlayModal showHowToPlay={showHowToPlay} setShowHowToPlay={setShowHowToPlay}/> : <></>}
      </main>
      <Footer/>
    </div>
  )
}

export default Layout;
