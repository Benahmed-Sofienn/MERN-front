import "./App.css";
import { Switch, Route } from "react-router-dom";
import ContactList from "./Pages/ContactList/ContactList";
import AddEditeContact from "./Pages/AddEditeContact/AddEditeContact";
import Errors from "./Pages/Errors/Errors";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={ContactList} />
        <Route
          path={["/editContact/:id", "/addContact"]}
          component={AddEditeContact}
        />
        <Route path="/*" component={Errors} />
      </Switch>
      <Footer />
    </div>
  );
}
console.clear();

export default App;
