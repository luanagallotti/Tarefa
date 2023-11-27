import { styles } from "./styles"
import { Text, TouchableOpacity, View } from "react-native"
import { CheckSquare, Square, Trash } from "phosphor-react"

export function Task({ 
    task: { 
        id, 
        completed, 
        title 
    }, 
    onCompleteTask, 
    onDeleteTask 
}) {
    return (
        <View style={styles.taskContainer}>
            <View style={styles.task}>
                <TouchableOpacity onPress={() => onCompleteTask(id)}>
                    { completed ? <CheckSquare /> : <Square /> }
                </TouchableOpacity>

                <Text style={styles.taskTitle}>{title}</Text>
            </View>
            <TouchableOpacity onPress={() => onDeleteTask(id)} style={styles.deleteTaskBtn}>
                <Trash />
            </TouchableOpacity>
        </View>
    )
}

