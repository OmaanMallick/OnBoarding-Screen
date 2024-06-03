// RootLayout.js
import { useEffect, useState } from 'react';
import SplashScrn from './SplashScrn';
import { Slot } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Index from '../app/Index';

export default function RootLayout() {
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isShowSplash ? <SplashScrn /> : <Index />}
    </SafeAreaView>
  );
}
