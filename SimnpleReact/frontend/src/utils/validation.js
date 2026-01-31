export default function validateTodo(title)
{
    if(!title.trim())
    {
         return "Todo title cannot be empty";
    }

    if (title.length < 3) {
        return "Todo title must be at least 3 characters";
    }
    return null;
        
    
}