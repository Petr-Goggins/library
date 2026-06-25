import { ReactNode } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
interface LayoutProps { children: ReactNode; }
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="page-wrapper">
      <Header />
      <main className="main-content"><div className="container">{children}</div></main>
      <Footer />
    </div>
  );
};
export default Layout;