import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import News from "./pages/News";
import Exam from "./pages/Exam";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="block">
      <div id="header">
        <Header />
      </div>
      <main className="content container ">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/news" component={News}/>
          <Route path="/exam" component={Exam}/>
          <Route component={NotFound}/>
        </Switch>
      </main>
      <div id="footer">
        <Footer />     
      </div>
    </div>
  );
}

export default App;
