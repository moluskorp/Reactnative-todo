import {View, Text} from 'react-native'
import { styles } from './styles'
import { Counter } from '../Counter'

interface Props {
    count: number
}

export function Created({count}: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.createdText}>Criadas</Text>
            <Counter count={count}/>
        </View>
    )
}