import  { useContext } from 'react'
import TodoContext from '../contexts/CreateContext'

export const useStore = () => {
   const [state, dispatch] = useContext(TodoContext)

   return [state, dispatch]
}

