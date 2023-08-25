import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a1a',
        paddingLeft: 24,
        paddingRight: 24,
    },
    cretedCompletedContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 32,
    },
    separator: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#333333',
        width: '100%'
    }
})