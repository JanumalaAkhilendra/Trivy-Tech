import { BlurView } from 'expo-blur';
import { StyleSheet, Text, View } from 'react-native';
import { getFakeCard } from '../utils/fakeCard';

const DigitalCard = ({ frozen }) => {
    const cardDetails = getFakeCard();

  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        {frozen && (
          <BlurView intensity={90} tint="dark" style={StyleSheet.absoluteFill} />
        )}
        <Text style={styles.logo}>YOLO</Text>
        <Text style={styles.number}>{cardDetails.number}</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Expiry</Text>
          <Text style={styles.label}>CVV</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.value}>{cardDetails.expiry}</Text>
          <Text style={styles.value}>***</Text>
        </View>
        <Text style={styles.name}>{cardDetails.name}</Text>
        <Text style={styles.rupay}>RuPay PREPAID</Text>
      </View>
    </View>
  );
};

const FreezeButton = ({ frozen, onToggle }) => {
  return (
    <TouchableOpacity style={styles.freezeButton} onPress={onToggle}>
      <View style={styles.freezeIcon}>
        <Ionicons 
          name="snow" 
          size={20} 
          color="#ff4444" 
        />
      </View>
      <Text style={styles.freezeText}>
        {frozen ? 'unfreeze' : 'freeze'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  card: {
    width: 300,
    height: 180,
    borderRadius: 20,
    padding: 20,
    backgroundColor: '#111',
    overflow: 'hidden',
    justifyContent: 'space-between',
  },
  logo: {
    color: 'red',
    fontSize: 24,
    fontWeight: 'bold',
  },
  number: {
    color: '#fff',
    fontSize: 20,
    letterSpacing: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    color: '#aaa',
    fontSize: 12,
  },
  value: {
    color: '#fff',
    fontSize: 16,
  },
  name: {
    color: '#fff',
    fontSize: 14,
    marginTop: 10,
  },
  rupay: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
});

export default DigitalCard;
