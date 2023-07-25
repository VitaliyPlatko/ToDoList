import { useState } from "react";
import ToDo from "./TODO";
import ToDoForm from "./TODOForm";

function App() {
  //Зберігаємо спписок завдань у вигляді пустого масиву
  const [todos, setTodos] = useState([])

  //Функція додавання завдання
  const addTask=(userInput)=>{
    //якщо в нас є userInput
    //Дана перевірка є для того, якщо поле буде пустим, додавання в список не відбувалось
    if(userInput){
      // Додавання нового елементу в список
      const newItem = {
        //Генерую id рандомним способом
        id: Math.random().toString(36).substr(2,9),
        //Task в якому я буду зберігати текст нашого повідомлення
        task: userInput,
        //Потріно для того, щоб позначити задачу активною або ні
        complete: false
      }
      //Для додавання нового елементу в масив
      setTodos([...todos, newItem])
    }
  }

  //Функція для видалнення завдання
  const removeTask=(id)=>{
    //Якщо todo.id !== id тоді ми повертаємо всі елементи масиву
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }
  //Функція для переключення між станом готова і не готова задача
  const handleToggle=(id)=>{
  /*  Якщо елемент id буде рівний id тоді беремо обєет, скопіюємо його, і в полі complete 
      замонимо на протиположне значення, якщо ні то просто копіюю весь елемент */
    setTodos([
      ...todos.map((todo) => 
        todo.id === id ? { ...todo, complete: !todo.complete } : {...todo }
      )
    ])
  }
  return (
    <div className="App">
      <header>
        {/* Виводжу кількість елементів */}
        <h1>Список завдань: {todos.length}</h1>
      </header>
      {/* Передаю addTask для роботи з input */}
      <ToDoForm addTask={addTask}/>
      {/* Виводжу сам список */}
      {todos.map((todo)=>{
        return (
          /* Функція повертає елемент TODO списку */
          <ToDo 
            todo={todo}
            /* Id завдання  */
            key={todo.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
          />
        )
      })}
    </div>
  );
}

export default App;
