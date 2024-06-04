import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import { useRouter } from 'expo-router';

export default function index() {
  const router = useRouter();

  const handlePress = () => {
    router.push('tabs/Home'); // Ensure '/Home' is a valid route
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <Image 
            source={require('../assets/images/fromto.png')}
            style={styles.logo}
          />

          <Image 
            source={require('../assets/images/delivery.png')}
            style={styles.image}
          />

          <Text style={styles.title}>
            <Text style={styles.highlight}>Fromto</Text> Where Tradition, Meets Taste.
          </Text>

          <Text style={styles.subtitle}>
            Where culinary innovation meets timeless tradition, creating flavors that linger long after the last bite.
          </Text>
            
          <CustomButton title="Get Started" handlePress={handlePress} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white'
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  logo: {
    width: 150,
    height: 70,
    backgroundColor: 'transparent'
  },
  image: {
    width: 400,
    height: 200,
    marginTop: 50
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20
  },
  highlight: {
    color: 'red'
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 25,
    color: 'gray'
  }
});
