import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { HomePage } from './src/tarefas/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <HomePage/>
      <StatusBar style="auto" />
    </View>
  );
}


