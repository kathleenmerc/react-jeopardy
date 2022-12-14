import './App.css';
import Header from "./components/Header";
import Score from "./components/Score"
import GetQuestion from "./components/GetQuestion";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Score />
      <GetQuestion />
    </div>
  );
}


