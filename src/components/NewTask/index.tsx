import {View, TextInput, TouchableOpacity, Image} from 'react-native'
import { styles } from './styles'
import {useState} from 'react'
import { Task } from '../../Screens/Home'

interface Props {
    addTask: (data: Task) => void
}

export function NewTask({addTask}: Props) {
    const [isFocused, setIsFocused] = useState(false)
    const [taskName, setTaskName] = useState('');

    const changeFocus = () => {
        setIsFocused(state => !state)
    }

    const handleNewTask = () => {
        addTask({description: taskName, checked: false})
        setTaskName('')
    }

    return (
        <View style={styles.container}>
            <TextInput 
                placeholder='Adicione uma nova tarefa'
                placeholderTextColor='#808080'
                style={[
                    styles.input, 
                    {borderColor: isFocused ? '#5e60ce' : '#0d0d0d'}
                ]} 
                onFocus={changeFocus} 
                onChangeText={setTaskName}
                value={taskName}
                onBlur={changeFocus}/>
            <TouchableOpacity style={styles.button} onPress={handleNewTask}>
            <Image source={require('../../../assets/plus.png')}/>
            </TouchableOpacity>
        </View>
    )
}