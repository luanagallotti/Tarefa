import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    taskContainer: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10
      },
  
      task: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#343434',
      }, 
  
      taskTitle: {
        color: '#fff'
      },
  
      deleteTaskBtn: {
        backgroundColor: 'red',
        color: '#fff',
        padding: '7px',
        fontSize: '20px',
        fontWeight: '700',
        borderRadius: '5px'
      }
})

