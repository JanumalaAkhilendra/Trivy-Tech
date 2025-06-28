// app/(tabs)/explore.tsx (or wherever your yolo pay screen is)
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const { width } = Dimensions.get('window');

const DigitalCard = ({ frozen }: { frozen: boolean }) => {
  const animatedValue = useRef(new Animated.Value(frozen ? 1 : 0)).current;
  
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: frozen ? 1 : 0.9,
      duration: 800,
      useNativeDriver: false,
    }).start();
  }, [frozen]);

  const freezeScale = animatedValue.interpolate({
    inputRange: [0.9, 1],
    outputRange: [0.9, 1],
  });

  const freezeOpacity = animatedValue.interpolate({
    inputRange: [0, 0.9, 1],
    outputRange: [0, 0.9, 1],
  });

  return (
    <View >
      <Text style={styles.cardLabel}>YOUR DIGITAL DEBIT CARD</Text>
      <View style={[styles.card, frozen && styles.frozenCard]}>
        <ImageBackground
        source={require('../assets/images/background.jpg')} // ✅ correct path to your image
        style={styles.cardContainer}
        imageStyle={{ borderRadius: 10 }} // Optional: if you want rounded corners
      >

        {/* Yolo Logo */}
        <View style={styles.cardHeader}>
          <Text style={styles.yoloText}>YOLO</Text>
          <View style={styles.visaContainer}>
            <Text style={styles.visaText}>VISA</Text>
          </View>
        </View>
        
        {/* Card Details */}
        <View style={styles.cardDetails}>
          <View style={styles.cardRow}>
            <Text style={styles.cardNumber}>6124</Text>
            <Text style={styles.cardLabel2}>expiry</Text>
          </View>
          <View style={styles.cardRow}>
            <Text style={styles.cardNumber}>4232</Text>
            <Text style={styles.cardExpiry}>01/28</Text>
          </View>
          <View style={styles.cardRow}>
            <Text style={styles.cardNumber}>3456</Text>
            <Text style={styles.cardLabel2}>cvv</Text>
          </View>
          <View style={styles.cardRow}>
            <Text style={styles.cardNumber}>7890</Text>
            <View style={styles.cvvContainer}>
              <Text style={styles.cvvDots}>•••</Text>
              <Ionicons name="eye-off" size={16} color="#ff4444" />
            </View>
          </View>
        </View>
        
        {/* Copy Details */}
        <TouchableOpacity style={styles.copyButton}>
          <Ionicons name="copy-outline" size={16} color="#ff4444" />
          <Text style={styles.copyText}>copy details</Text>
        </TouchableOpacity>
        
        {/* RuPay Logo */}
        <View style={styles.rupayContainer}>
          <Text style={styles.rupayText}>RuPay</Text>
          <Text style={styles.prepaidText}>PREPAID</Text>
        </View>

      

        
        {/* Card Design Elements */}
        {!frozen && (
          <View style={styles.cardDesign}>
            {/* <View style={styles.designLine1} />
            <View style={styles.designLine2} />
            <View style={styles.designLine3} /> */}
          </View>
        )}

        {/* Animated Freeze Overlay */}
        {frozen && (
          <Animated.View 
            style={[
              styles.frozenOverlay,
              {
                opacity: freezeOpacity,
                transform: [{ scale: freezeScale }],
              }
            ]}
          >
          <View >
             <Image
              source={require('../assets/images/Screenshot 2025-06-28 221239.png')} // 👈 replace with your actual path
              style={styles.cardImagePlaceholder}
              resizeMode="contain" // or 'contain' depending on your need
            />
          </View>
          </Animated.View>
        )}
        </ImageBackground>
      </View>
      
    </View>
    
  );
};

const FreezeButton = ({ frozen, onToggle }: { frozen: boolean; onToggle: () => void }) => {
  return (
    <View style={styles.freezeContainer}>
      <TouchableOpacity style={styles.freezeButton} onPress={onToggle}>
        <Ionicons 
          name={frozen ? "snow" : "snow-outline"} 
          size={20} 
          color="#ff4444" 
        />
      </TouchableOpacity>
      <Text style={styles.freezeTextOutside}>
        {frozen ? 'unfreeze' : 'freeze'}
      </Text>
    </View>
  );
};

const YoloPayScreen = () => {
  const [frozen, setFrozen] = useState(false);
  const [selected, setSelected] = useState('pay');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>select payment mode</Text>
      <Text style={styles.subtitle}>choose your preferred payment method to make payment.</Text>

      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[styles.toggleBtn, selected === 'pay' && styles.activeBtn]}
          onPress={() => setSelected('pay')}
        >
          <Text style={[styles.toggleText, selected === 'pay' && styles.activeToggleText]}>pay</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggleBtn, selected === 'card' && styles.activeCardBtn]}
          onPress={() => setSelected('card')}
        >
          <Text style={[styles.toggleText, selected === 'card' && styles.activeCardText]}>card</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardAndButtonWrapper}>
        <DigitalCard frozen={frozen} />
        <FreezeButton frozen={frozen} onToggle={() => setFrozen(!frozen)} />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
  },
  freezeTextOutside: {
  color: '#ff4444',
  fontSize: 14,
  fontWeight: '500',
  marginTop: 8,
  textAlign: 'center',
  },
  cardAndButtonWrapper: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: 20, // or use marginRight/marginLeft if you're not using React Native 0.71+
  },
  cardImagePlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.9,
    borderColor: 'rgba(100, 200, 255, 0.6)',
    borderTopWidth: 5,
    borderBottomWidth: 1,
  },
  imagePlaceholderText: {
    color: '#666',
    fontSize: 12,
    fontStyle: 'italic',
  },
  subtitle: {
    color: '#888',
    fontSize: 14,
    lineHeight: 20,
  },
  toggleContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 40,
  },
  toggleBtn: {
  borderColor: '#333',
  borderTopWidth: 2,
  borderLeftWidth: 1,
  borderRightWidth: 1,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
  paddingHorizontal: 28,
  paddingVertical: 12,
  marginRight: 12,
},
  activeBtn: {
    backgroundColor: '#fff',
    borderColor: '#333',
  },
  activeCardBtn: {
    borderTopWidth: 2,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 0,
    borderColor: '#ff4444',
    borderWidth: 1,
  },
  toggleText: {
    color: '#888',
    fontSize: 16,
    fontWeight: '500',
  },
  activeToggleText: {
    color: '#000',
  },
  activeCardText: {
    color: '#ff4444',
  },
  cardContainer: {
    alignItems: 'center',
    marginBottom: 0,
    backgroundImage: 'url(../assets/images/Screenshot 2025-06-28 221239.png)', // Placeholder for background image
    backgroundSize: 'cover',
  },
  cardLabel: {
    color: '#666',
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    letterSpacing: 1,
  },
  card: {
    width: width * 0.5,
    height: width * 0.8,
    backgroundColor: '#1a1a1a',
    borderRadius: 20,
    padding: 0,
    position: 'relative',
    overflow: 'hidden',
  },
  frozenCard: {
    // backgroundColor: '#0f1419',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    marginBottom: 20,
    marginTop: 20,
    width: '100%',
  },
  yoloText: {
    color: '#ff4444',
    fontSize: 18,
    fontWeight: 'bold',
  },
  visaContainer: {
    backgroundColor: '#0066cc',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  visaText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  cardDetails: {
    marginBottom: 20,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    width: '70%',
  },
  cardNumber: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 2,
  },
  cardLabel2: {
    color: '#666',
    fontSize: 12,
  },
  cardExpiry: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  cvvContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cvvDots: {
    color: '#fff',
    fontSize: 18,
    marginRight: 8,
  },
  copyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 90,
  },
  copyText: {
    color: '#ff4444',
    fontSize: 14,
    marginLeft: 8,
  },
  rupayContainer: {
    position: 'absolute',
    bottom: 10,
    right: 20,
    alignItems: 'center',
  },
  rupayText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  prepaidText: {
    color: '#888',
    fontSize: 10,
    marginTop: 2,
  },
  cardDesign: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  designLine1: {
    position: 'absolute',
    top: 60,
    left: -20,
    right: 40,
    height: 2,
    backgroundColor: '#ff4444',
    transform: [{ rotate: '15deg' }],
  },
  designLine2: {
    position: 'absolute',
    top: 120,
    left: -30,
    right: 60,
    height: 2,
    backgroundColor: '#ff4444',
    transform: [{ rotate: '10deg' }],
  },
  designLine3: {
    position: 'absolute',
    top: 180,
    left: -25,
    right: 50,
    height: 2,
    backgroundColor: '#ff4444',
    transform: [{ rotate: '12deg' }],
  },
  frozenOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // backgroundColor: 'rgba(50, 150, 255, 0.15)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  frozenPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  iceLine1: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 60,
    height: 2,
    backgroundColor: 'rgba(100, 200, 255, 0.6)',
    transform: [{ rotate: '45deg' }],
  },
  iceLine2: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 60,
    height: 2,
    backgroundColor: 'rgba(100, 200, 255, 0.6)',
    transform: [{ rotate: '-45deg' }],
  },
  iceLine3: {
    position: 'absolute',
    top: 40,
    right: 30,
    width: 40,
    height: 2,
    backgroundColor: 'rgba(100, 200, 255, 0.4)',
    transform: [{ rotate: '30deg' }],
  },
  iceLine4: {
    position: 'absolute',
    bottom: 80,
    left: 40,
    width: 50,
    height: 2,
    backgroundColor: 'rgba(100, 200, 255, 0.5)',
    transform: [{ rotate: '-30deg' }],
  },
  iceLine5: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    width: 45,
    height: 2,
    backgroundColor: 'rgba(100, 200, 255, 0.4)',
    transform: [{ rotate: '60deg' }],
  },
  iceLine6: {
    position: 'absolute',
    top: 60,
    left: '50%',
    width: 35,
    height: 2,
    // backgroundColor: 'rgba(100, 200, 255, 0.6)',
    // transform: [{ rotate: '90deg' }, { translateX: -17.5 }],
  },
  frozenCenter: {
    // backgroundColor: 'rgba(100, 200, 255, 0.2)',
    borderRadius: 30,
    padding: 10,
    borderWidth: 2,
    // borderColor: 'rgba(100, 200, 255, 0.4)',
  },
  freezeContainer: {
  alignItems: 'center',
  marginLeft: 16,
},

  freezeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 68, 68, 0.1)',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'rgba(255, 68, 68, 0.3)',
  },
  freezeText: {
    color: '#ff4444',
    fontSize: 14,
    marginLeft: 6,
    fontWeight: '500',
  },
});

export default YoloPayScreen;