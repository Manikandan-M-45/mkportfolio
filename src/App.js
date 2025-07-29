import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


import Main from "./pages/Main/Main";

function App() {
  AOS.init();
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
