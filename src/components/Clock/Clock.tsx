import './Clock.css'
import Timezone from '../models/Timezone'
import moment from 'moment'
import { useEffect, useState } from 'react'


interface Props {
    item: Timezone,
    deleteItem: (id: number) => void
}
const Clock = ({item, deleteItem}: Props) => {
    const [currentTime, setCurrentTime] = useState({})

    useEffect(() => {
        const intervalId = setInterval(() => {
            let timezone = moment().utcOffset(Number(item.time));
      
            let hour = moment(timezone).hour() * 30;
            let minute = moment(timezone).minutes() * 6;
            let second = moment(timezone).seconds() * 6;
        
            setCurrentTime({
                hour: hour,
                minute: minute,
                second: second
            })
        
        }, 1000)
    })
    
      const hourStyle = {
          transform: `rotate(${currentTime.hour}deg)`
      }
  
      const minuteStyle = {
          transform: `rotate(${currentTime.minute}deg)`
      }
  
      const secondStyle = {
          transform: `rotate(${currentTime.second}deg)`
      }
  
    return (
        <div className='clock-container'>
        <div className='delete' onClick={deleteItem}></div>
        <h2 className='clock-header'>{item.name}</h2>
        <div className='clock'>
            <div className="hour">
                <div className="hours" style={hourStyle}></div>
            </div>
            <div className="minute">
                <div className="minutes" style={minuteStyle}></div>
            </div>
            <div className="second">
                <div className="seconds" style={secondStyle}></div>
            </div>
        </div>
        </div>
    )
}

export default Clock