import { useState } from "react"

const useFormTwo = (initialState) => {
  const [formTwo, setFormTwo] = useState(initialState)

  const onChangeTwo = (e) => {
    const {value, name} = e.target
    setFormTwo({...formTwo, [name]:value})	
  }

  const clearTwo = () => {
    setFormTwo(initialState)
  }

  return [formTwo, onChangeTwo, clearTwo]
}

export default useFormTwo