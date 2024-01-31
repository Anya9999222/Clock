import { useState } from 'react'
import Clock from './components/Clock/Clock'
import Form from './components/Form/Form'
import Timezone from './components/models/Timezone'

import './App.css'

function App() {
  const [time, setTime] = useState<Timezone[]>([])
 

  const onChangeHandler = (newTime)=> {
    const timeNew = {
      ...newTime,
      id: Math.ceil(Math.random() * 1000)
    }
    time.find((item) =>
    item.name === newTime.name)
    ? ''
    : setTime(prev =>  [...prev, timeNew ])
  }
  
  const deleteItem = (id: number) => {
    setTime(time.filter(i => i.id !==id))
  }
    
  return (
    <div className='main'>
      <Form onSubmit={onChangeHandler}/>
      <div className='clocks'>
          {time.map(i => <Clock key={Math.random()} item={i} deleteItem={() => deleteItem(i.id)}/>)}
      </div>
      
    </div>
  )
}

export default App
