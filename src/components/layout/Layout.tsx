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
    <>
      <Nav showHowToPlay={showHowToPlay} setShowHowToPlay={setShowHowToPlay}/>
      <main>
        {children}
        {showHowToPlay ? <HowToPlayModal showHowToPlay={showHowToPlay} setShowHowToPlay={setShowHowToPlay}/> : <></>}
      </main>
      <Footer/>
    </>
  )
}

export default Layout;
