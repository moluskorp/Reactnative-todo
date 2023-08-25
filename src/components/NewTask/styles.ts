import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        marginTop: -24,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 4,
    },
    inputContainer: {
        flex: 1,
        border: '1px solid',
        borderRadius: 6
    },
    input: {
        backgroundColor: '#262626',
        borderColor: '#0d0d0d',
        borderWidth: 1,
        color: '#f2f2f2',
        flex: 1,
        height: 54,
        padding: 16,
        borderRadius: 6,
    },
    button: {
        width: 52,
        height: 52,
        backgroundColor: '#1e6f9f',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    buttonPlus: {
        fontSize: 16,
        color: '#f2f2f2',
        borderWidth: 2,
        borderRadius: 1000,
        height: 16
        
    }
})