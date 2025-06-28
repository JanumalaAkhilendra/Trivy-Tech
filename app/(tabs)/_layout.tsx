import NavArcBackground from '@/components/NavArcBackground';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Dimensions, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

function CustomTabBar({ state, descriptors, navigation }: any) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.tabBarWrapper, { paddingBottom: insets.bottom }]}>
      {/* Arc behind icons */}
      <NavArcBackground />

      {/* Tab Buttons */}
      <View style={styles.tabButtonsContainer}>
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          let iconName: keyof typeof Ionicons.glyphMap = 'home-outline';
          let label = '';

          if (route.name === 'index') {
            iconName = 'home-outline';
            label = 'home';
          } else if (route.name === 'explore') {
            iconName = 'qr-code-outline';
            label = 'yolo pay';
          } else if (route.name === 'ginie') {
            iconName = 'person-outline';
            label = 'ginie';
          }

          const isMiddle = route.name === 'explore';

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              style={isMiddle ? styles.middleTab : styles.tabButton}
              activeOpacity={0.8}
            >
              <View
                style={[
                  styles.iconWrapper,
                  isMiddle ? styles.middleIcon : {},
                  isFocused ? styles.activeIcon : {},
                ]}
              >
                <Ionicons
                  name={iconName}
                  size={isMiddle ? 30 : 24}
                  color={isFocused ? '#fff' : '#999'}
                />
              </View>
              {!isMiddle && (
                <Text style={[styles.label, { color: isFocused ? '#fff' : '#999' }]}>
                  {label}
                </Text>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    />
  );
}


const styles = StyleSheet.create({
  tabBarWrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 90,
    backgroundColor: 'transparent',
  },
  tabButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: '100%',
    paddingBottom: Platform.OS === 'ios' ? 20 : 10,
    zIndex: 1, // Ensure it's above the arc background
    marginBottom: 10,
    bottom: 40,
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 4,
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#fff',
    borderRadius: 50,
  },
  activeIcon: {
    backgroundColor: '#333',
    borderRadius: 50,
  },
  middleTab: {
    position: 'absolute',
    top: -30,
    left: width / 2 - 35,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    // shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  middleIcon: {
    padding: 15,
    width: 70,
    height: 70,
    borderWidth: 2,
    borderRadius: 50,
    borderTopWidth: 2,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 0,
  },
});
