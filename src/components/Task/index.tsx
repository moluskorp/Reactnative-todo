import {View, Text, Image, TouchableOpacity } from 'react-native'
import {useState} from 'react'
import { styles } from './styles'

interface Props {
    task: {
        checked: boolean
        description: string
    }
    setChecked: () => void
    remove: () => void
}
 
export function Task({task, setChecked, remove}: Props) {
    const {checked, description} = task
    return(
        <View style={styles.container}>
            {checked ? (<>
                <TouchableOpacity style={styles.checked} onPress={setChecked}>
                    <Image source={require('../../../assets/checked.png')}/>
                </TouchableOpacity>
                <Text style={styles.textChecked}>{description}</Text>
            </>) : (<>
                <TouchableOpacity style={styles.check} onPress={setChecked}/>
                <Text style={styles.text}>{description}</Text>
            </>)}
            <TouchableOpacity onPress={remove}>
                <Image source={require('../../../assets/trash.png')}/>
            </TouchableOpacity>
        </View>
    )
}