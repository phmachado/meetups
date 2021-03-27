import Modal from "./components/Modal";
import Todo from "./components/Todo";
import Backdrop from "./components/Backdrop";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo title="My Title 1" />
      <Todo title="My Title 2" />
      <Todo title="My Title 3" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
