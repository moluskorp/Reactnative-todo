import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { StatusBar } from "expo-status-bar";
import { NewTask } from "../../components/NewTask";
import { Created } from "../../components/Created";
import { Completed } from "../../components/Completed";
import { EmptyList } from "../../components/EmptyList";
import { Task } from "../../components/Task";
import {useState} from 'react'

export interface Task {
    description: string
    checked: boolean
}

export function Home() {
    const [tasks, setTasks] = useState<Task[]>([])

    const checkedTasks = tasks.filter(task => task.checked)
    const uncheckedTasks = tasks.filter(task => !task.checked)

    function handleAddTask(task: Task) {
        setTasks(state => [...state, task])
    }

    function handleCheck(taskChange: Task) {
        const newTasks = tasks.map(task => {
            if(task.description === taskChange.description) {
                return {
                    ...task,
                    checked: !task.checked
                }
            }return task
        })
        setTasks(newTasks)
    }

    function handleRemoveTask(taskRemove: Task) {
        const newTasks = tasks.filter(task => task.description !== taskRemove.description)
        setTasks(newTasks)
    }

    return (
        <>
            <StatusBar style="light"/>
            <Header />
            <View style={styles.container}>
                <NewTask addTask={handleAddTask}/>
                <View style={styles.cretedCompletedContainer}>
                    <Created count={tasks.length}/>
                    <Completed count={checkedTasks.length}/>
                </View>
                <View style={styles.separator} />
                {tasks.length === 0 ? <EmptyList /> : (
                    <>
                    {uncheckedTasks.map(task => (
                        <Task 
                        key={task.description} 
                        task={task} 
                        setChecked={() => {handleCheck(task)}}
                        remove={() => handleRemoveTask(task)}
                    />
                    ))}
                    {checkedTasks.map(task => (
                        <Task 
                        key={task.description} 
                        task={task} 
                        setChecked={() => {handleCheck(task)}}
                        remove={() => handleRemoveTask(task)}
                    />
                    ))}
                    </>
                )}
            </View>
        </>
    )
}