import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.jsx";
import Array from "./components/Array.jsx";
import SortButton from "./components/SortButton.jsx";
import SortedArray from "./components/SortedArray.jsx";

function App() {
  return (
    <div>
      <Header />
      <Array />
      <SortButton />
      <SortedArray />
    </div>
  );
}

export default App;
