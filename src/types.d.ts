interface Todo {
    text: string
    complete: boolean
    state?: string
  }

type ToggleTodo = (selectedTodo: Todo) => void

type AddTodo = (text: string) => void