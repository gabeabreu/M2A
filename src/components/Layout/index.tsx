import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <body>
      <Header />
      {children}
      <Footer />
    </body>
  );
};

export default Layout;
