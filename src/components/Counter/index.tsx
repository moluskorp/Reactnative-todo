import { Text, View } from "react-native";
import { styles } from "./styles";

interface Props {
    count: number;
}

export function Counter({count}: Props) {
    return(
        <View style={styles.container}>
            <Text style={styles.count}>{count}</Text>
        </View>
    )
}