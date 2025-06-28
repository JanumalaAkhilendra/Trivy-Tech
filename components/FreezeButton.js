import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const FreezeButton = ({ frozen, onToggle }) => {
  const color = frozen ? 'white' : 'red';

  return (
    <TouchableOpacity style={styles.button} onPress={onToggle}>
      <Ionicons name="snow" size={24} color={color} />
      <Text style={[styles.text, { color }]}>{frozen ? 'unfreeze' : 'freeze'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    marginTop: 5,
    textTransform: 'lowercase',
  },
});

export default FreezeButton;
