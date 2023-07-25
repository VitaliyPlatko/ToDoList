import React from "react"


function ToDoForm({addTask}){
    //Для введення завдання
    const [userInput, setUserInput] = React.useState('')

    /*  логіка для додавання нового елементу в список
        Ми будемо отримувати значення і це значення відправляти в стейт userInput */
    const handleChange=(e)=>{
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit=(e)=>{
        //preventDefault відмінює стандартні дії браузера
        e.preventDefault()
        //Відправляю теперишнє значення нашого поля вводу
        addTask(userInput)
        //Після натискання на Зберегти я буду очищувати input
        setUserInput('')
    }

    //При натисканні на ентер я буду відправляти завдання в список
    const handleKeyPress=(e)=>{
        if(e.key === "Enter"){
            handleSubmit(e)
        }
    }

    return(
        /* OnSubmit потрібне для роботи з формами */
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} onKeyDown={handleKeyPress} placeholder="Введіть значенння..."></input>
            {/* Кнопка за допомогою якої я буду субмітити нашу форму */}
            <button>Зберегти</button>
        </form>
    )

}

export default ToDoForm