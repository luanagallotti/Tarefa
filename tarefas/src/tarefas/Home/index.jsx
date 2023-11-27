
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { Square, CheckSquare, Plus, Trash } from "phosphor-react";
import { Task } from "../../components/Task";


export function HomePage() {
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState("")


    function handleCreateTask() {
        const newTask = {
            id: uuid(),
            title: task,
            completed: false
        }


        setTasks([...tasks, newTask])
    }


    function handleDeleteTask(id) {
        const updatedTasks = tasks.filter(task => task.id !== id)


        setTasks(updatedTasks)
    }


    function handleCompleteTask(id) {
        const updatedTasks = tasks.map(task => {
            if(task.id === id) {
                task.completed = !task.completed
            }


            return task
        })


        setTasks(updatedTasks)
    }





    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.addTaskContainer}>
                <TextInput onChangeText={(text) => setTask(text)} style={styles.addTaskInput} />
                <TouchableOpacity onPress={handleCreateTask} style={styles.addTaskBtn}>
                    <Plus />
                </TouchableOpacity>
            </View>
            <ScrollView style={{ width: 200, marginTop: 20 }}>
                {tasks.map(task => (
                    <Task
                        key={task.id}
                        task={task}
                        onDeleteTask={handleDeleteTask}
                        onCompleteTask={handleCompleteTask}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

