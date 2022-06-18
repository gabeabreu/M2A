import Footer from './Footer';
import Header from './Header';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <body>
      <Header />
      <div className='w-full mx-auto max-w-[310px] md:max-w-[738px] xl:max-w-[1220px] mb-9 duration-300'>
        {children}
      </div>
      <Footer />
    </body>
  );
};

export default Layout;
