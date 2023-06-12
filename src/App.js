import './App.css';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <div className="todo-list">
      <h1>What's on the agenda for today?</h1>
      <TodoForm/>
    </div>
  );
}

export default App;
