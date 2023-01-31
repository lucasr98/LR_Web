import Background from './components/Background';
import Header from './components/Header';
import PantallaPrincipal from './components/PantallaPrincipal';
import Footer from './components/Footer';

window.addEventListener("click", (e)=>{
  if((e.target.parentNode.parentNode.className !== "experiencias") && (e.target.parentNode.className !== "experiencias") && (e.target.className !== "experiencias")){
    for(let i = 0; i < document.querySelectorAll(".barra").length; i++){
      document.querySelectorAll(".barra")[i].style.removeProperty("background-color");
    }
  }
})

function App() {
  return (
    <div className="App">
      <Background />
      <Header />
      <PantallaPrincipal />
      <Footer />
    </div>
  );
}

export default App;
