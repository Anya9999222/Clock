import './Form.css'
import { FormEvent, useState } from 'react'

interface FormProps {
    onSubmit: (id: number) => void
}
const Form = ({onSubmit}: FormProps) => {

    const [clock, setClock] = useState({})

    const handleChange = (e) => {
        let value: string;
        value = e.target.value;
        setClock(prev => ({
            ...prev,
            [e.target.name]: value
        }))
    }

    const updateClocks = async(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onSubmit({
            ...clock
        })
    }
    return (
        <form className='form' onSubmit={updateClocks}>
            <div className='form-content'>
                <span className='form-title'>Название</span>
                <input 
                    name='name'
                    type='text' 
                    onChange={handleChange}></input>
            </div>
            <div className='form-content'>
                <span className='form-title'>Временная зона</span>
                <input 
                    name='time'
                    type='text'
                    maxLength={4}
                    onChange={handleChange}></input>
            </div>
            <button type='submit'>Добавить</button>
        </form>
    )
}

export default Form