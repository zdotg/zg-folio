import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen mx-auto max-w-2xl ">
      <div className="flex-grow">
        <Header />

        <main className="my-0 ">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
