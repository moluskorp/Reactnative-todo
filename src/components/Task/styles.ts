import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        padding: 12,
        paddingRight: 8,
        flexDirection: 'row',
        borderRadius: 8,
        backgroundColor: '#262626',
        gap: 8,
        borderWidth: 1,
        borderColor: '#333',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8
    },
    check: {
        width: 17.45,
        height: 17.45,
        borderColor: '#4ea8de',
        borderWidth: 2,
        borderRadius: 999,
    },
    checked: {
        width: 17.45,
        height: 17.45,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 14,
        color: '#f2f2f2',
        flex: 1,
        marginLeft: 4,
    },
    textChecked: {
        flex: 1,
        fontSize: 14,
        marginLeft: 4,
        color: '#808080',
        textDecorationLine: 'line-through'
    }
})