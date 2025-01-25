import { IoTrashBin} from "react-icons/io5";
function TodoListComponent({todoItems, setTodoItems}){


    function removeTodo(id){
        console.log(id)
        let removeTodo =todoItems.filter((todo) => todo.id !== id)

        setTodoItems(removeTodo)
        
    }

    return(<>
        <div className="container mx-auto flex flex-col gap-[20px] justify-center items-center mt-[50px]">
            {todoItems.length > 0 ? todoItems.map((todo) => {
                return <div key={todo.id} className="bg-slate-300 w-[50%] p-[15px] rounded-[1 0px] flex justify-between items-center">
                    <h2>{todo.title}</h2>
                    <IoTrashBin size={32} color='red' onClick={()=>removeTodo(todo.id)}/>
                </div>
            }): <h2 className="text-[40px] font-extrabold text-green-600">No tasks for TODAY!!!</h2>} 
        </div>
    </>)
}

export default TodoListComponent;