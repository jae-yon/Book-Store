import Footer from "../common/Footer";
import Header from "../common/Header";

// React.ReactNode : 리액트로 만든 모든 컴포넌트 타입

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children } : LayoutProps) {
  return(
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;