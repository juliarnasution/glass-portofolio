import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Circle } from "./components/Circle";
import { Content } from "./components/Content";
import { NavMenu } from "./components/NavMenu";

function App() {
  return (
    <Router>
        <main>
            <section className="center-page">
                <NavMenu/>
                <Content/>          
            </section>
        </main>
        <Circle/>
    </Router>
  );
}

export default App;
