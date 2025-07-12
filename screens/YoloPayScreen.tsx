// app/(tabs)/explore.tsx (or wherever your yolo pay screen is)
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { renderDigitImages } from '../utils/digitToImage';
import { getFakeCard } from '../utils/fakeCard';

const randomNumber = Math.floor(1000000000000000 + Math.random() * 9000000000000000)
  .toString()
  .match(/.{1,4}/g); // Split into 4-digit chunks like credit card

// E.g., ['6124', '4232', '3456', '7890']


const fakeCard = getFakeCard();

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
        source={require('../assets/images/background.png')} // ✅ correct path to your image
        style={styles.cardContainer}
        imageStyle={{ borderRadius: 10 }} // Optional: if you want rounded corners
      >
        {/* Yolo Logo */}
        <View style={styles.cardHeader}>
          <Image source={require('../assets/images/yolo.png')} style={styles.yolo} />
          <Image source={require('../assets/images/yesbank.png')} style={styles.yesBank} />
        </View>
        
        {/* Card Details */}
        <View style={styles.cardDetails}>
         <View style={styles.cardRow}>
            {(randomNumber ?? []).map((chunk, index) => (
              <View key={index} style={styles.digitChunkContainer}>
                <Image
                  source={require('../assets/images/digits/Union.png')}
                  style={styles.unionImage}
                  resizeMode="cover"
                />
                <View style={styles.digitOverlay}>
                  {renderDigitImages(chunk)}
                </View>
              </View>
            ))}
          </View>

          <View style={styles.cardRow}>
            <View>
              <Text style={styles.cardLabel}>Expiry</Text>
              <Text style={styles.cardExpiry}>01/28</Text>
            </View>
            <View>
              <Text style={styles.cardLabel}>CVV</Text>
              <View style={styles.cvvContainer}>
                <Image source={require('../assets/images/digits/Asterisk-Vector-PNG-File.png')} style={styles.cvvDotsimage} />
                <Image source={require('../assets/images/digits/Asterisk-Vector-PNG-File.png')} style={styles.cvvDotsimage} />
                <Image source={require('../assets/images/digits/Asterisk-Vector-PNG-File.png')} style={styles.cvvDotsimage} />
                <Image source={require('../assets/images/eye.png')} style={styles.eye} />
              </View>
            </View>  
          </View>
        </View>

        
        {/* Copy Details */}
        <TouchableOpacity style={styles.copyButton}>
          <Ionicons name="copy-outline" size={16} color="#ff4444" />
          <Text style={styles.copyText}>copy details</Text>
        </TouchableOpacity>

        <View >
          <Image source={require('../assets/images/Group.png')} style={styles.rupayContainer} />
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


         {/* Inner Blur Border Overlay */}
        <BlurView intensity={30} tint="dark" style={styles.blurOverlay}>
          <View style={styles.blurBorder} />
        </BlurView>
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
  digitChunkContainer: {
  position: 'relative',
  marginRight: 6,
  justifyContent: 'center',
  alignItems: 'center',
  },
  unionImage: {
    width: 70, // adjust based on your asset
    height: 30,
    top:15,
  },
  digitOverlay: {
    position: 'absolute',
    flexDirection: 'row',
    gap: 10,
  },
  eye:{
    height:18,
    width:18,
  },
  yolo:{
    height:15,
    width:45,
  },
  imageRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cvvDotsimage:{
    width:10,
    height:10,
  },
  yesBank:{
    width:48,
    height:20,
    top:-6,
  },
  letter: {
    width: 10,
    height: 10,
    marginHorizontal: 0,
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
    fontSize: 10,
    marginBottom: 0,
    textAlign:'left',
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
  blurOverlay: {
  ...StyleSheet.absoluteFillObject,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 20,
  overflow: 'hidden',
  backgroundColor: 'rgba(0, 0, 0, 0.2)', // optional to darken slightly
  },
  blurBorder: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: 'rgba(255, 255, 255, 0.10)', // soft white edge
  },  
  frozenCard: {
    // backgroundColor: '#0f1419',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    marginBottom: 10,
    marginTop: 20,
    width: '100%',
  },
  yoloText: {
    color: '#ff4444',
    fontSize: 18,
    fontWeight: 'bold',
  },
  visaText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
   cardDetails: {
    flexDirection:'row',
    paddingBottom: 10,
    paddingTop:5,
    left:-20,
  },
  cardRow: {
    flexDirection: 'column',
    justifyContent:'space-between',
    alignItems:'flex-start',
    marginBottom: 30,
    marginRight:0,
    marginLeft:25,
  },
  cardNumber: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    fontFamily:'',
  },
  cardExpiry: {
    fontSize: 14,
    color: '#fff',
  },
  cvvContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cvvDots: {
    fontSize: 14,
    color: '#fff',
    marginRight: 0,
  },
  copyButton: {
    flexDirection: 'row',
    left:-40,
    alignItems:'flex-start',
    justifyContent:'flex-start',
    marginBottom: 82,
  },
  copyText: {
    color: '#ff4444',
    fontSize: 14,
    marginLeft: 8,
  },
  rupayContainer: {
    position: 'absolute',
    bottom: 20,
    right: -90,
    height:37,
    width:75,
    alignItems:'flex-end',
  },
  rupayText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  prepaidText: {
    color: '#fff',
    fontSize: 8,
    marginTop: 5,
    marginBottom:8,
    width: 45,
    height:8,
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