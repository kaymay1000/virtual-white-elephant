import { ReactNode } from 'react';
import Nav from '../Nav';
import Footer from '../Footer';

type LayoutProps = {
  children: ReactNode;
}

const Layout = ({
  children
}: LayoutProps): JSX.Element => {
  return (
    <>
      <Nav/>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  )
}

export default Layout;
