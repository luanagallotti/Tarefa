import { StyleSheet } from "react-native";




export const styles = StyleSheet.create({
     container: {
       flex: 1,
       backgroundColor: '#212121',
       alignItems: 'center',
       padding: '20px',
     },
     addTaskContainer: {
      flexDirection: 'row',
      gap: '5px'


     },
     addTaskInput: {
      backgroundColor: '#343434',
      color: '#fff',
      flex: 1,
      borderRadius: '5px',
     
     },
     addTaskBtn: {
      backgroundColor: '#00e673',
      padding: '7px',
      fontSize: '20px',
      fontWeight: '700',
      borderRadius: '5px'


     },
     taskContainer: {
      width: '100%',
      flexDirection: 'row',
      marginBottom: 10,
     },


     task: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#343434',
     },


     taskTitle: {
      color: '#fff',


     },
     deleteTaskBtn: {
      backgroundColor: 'red',
      color: '#fff',
      padding: '7px',
      fontSize: '20px',
      fontWeight: '700',
      borderRadius: '5px'


     }
   });



