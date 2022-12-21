import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import MainNew from "./components/MainNew.jsx/MainNew";
import MainForm from "./components/MainForm/MainForm";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <MainNew />
      <MainForm />
      <Footer />
    </div>
  );
}

export default App;
