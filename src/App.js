import "./App.css";
import {Route, Switch } from 'react-router-dom';
import All from './Components/All';
import TodoList from "./Components/TodoList";


function App() {
  return (
    // <main>
    //   <Switch>
    //   <Route path="/" component={All} exact />

    //   </Switch>
    // </main>

    <div className="Todo-App">
        <TodoList />
      </div>
    
   
  );
}

export default App;


