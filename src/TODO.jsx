function ToDo({todo, toggleTask, removeTask}){
    return(
        /* Дайний дів має ключ який ми отримуємо з todo.id */
        <div key={todo.id} className="item-todo">
            {/* Клас буду мінятись в залежності від значення complete. Якщо значення true то додаю item-text strike, якщо false то item-text */}
            <div className={todo.complete ? 'item-text strike' : 'item-text'} onClick={()=>toggleTask(todo.id)}>
                {/* Виводить значення нашої задачі яке зберігається в полі Task*/}
                {todo.task}
            </div>
            {/* Кнопка для видалення елементу */}
            <div className="item-delete" onClick={()=>removeTask(todo.id)}>X</div>
        </div>
    )
}

export default ToDo