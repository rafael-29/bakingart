import React, {useState} from 'react'
import axios from 'axios'
import Info from './components/Info'

import "./styles/style.css"

const App = () => {

const [state, setState] = useState({name: '', age: ''})
const [task, setTask] = useState()

const submitKo = () => {
axios.post('https://bakedbyartapi.herokuapp.com/orders/samp', state)
.then( () => console.log('axios saved data done'))
.catch(err => console.log(err))
}

const addToLocal = () => {
if(localStorage.getItem('tasks') === null){
localStorage.setItem('tasks', JSON.stringify([]))
const items = JSON.parse(localStorage.getItem('tasks'))
items.push(task)
localStorage.setItem('tasks', JSON.stringify(items))
}else{
const items = JSON.parse(localStorage.getItem('tasks'))
items.push(task)
localStorage.setItem('tasks', JSON.stringify(items))
}

}

return(
<div>

<input type="text" value={state.name}
onChange={(e) => setState({...state, name: e.target.value})} />


<input type="text" value={state.age}
onChange={(e) => setState({...state, age: e.target.value})} />

<button onClick={submitKo}>Submit</button>


<div className="task">
<label>Input Some Tasks</label>
<input type="text" value={task} onChange={e => setTask(e.target.value)} />
<button onClick={addToLocal}>Enter</button>
</div>

<Info />

</div>
)
}
export default App;