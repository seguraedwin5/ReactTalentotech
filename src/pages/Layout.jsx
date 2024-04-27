import Footer from "../components/Footer";
import Header from "../components/Header";
import Section from "../components/Section";
import styles from "./layout.module.css";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Section>
        <p>Esta es una seccion nueva</p>
      </Section>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
