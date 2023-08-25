import {View, Text} from 'react-native'
import { styles } from './styles'
import { Counter } from '../Counter'

interface Props {
    count: number
}

export function Completed({count}: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.completedText}>Concluídas</Text>
            <Counter count={count}/>
        </View>
    )
}