import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import SocialView from '@/components/SocialView';

export default function TabTwoScreen() {
   document.title = "E6B Flight Pro"
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
              <Image
                source={require('@/assets/images/circle-icon.png')}
                style={styles.reactLogo}
              />
            }>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Need Help or Have Questions?</ThemedText>
      </ThemedView>
      <ThemedText>If you have any questions, feedback, or need support with E6B Flight Pro, feel free to reach out!
I'm always happy to hear from users and will do my best to respond promptly.</ThemedText>
<ThemedText>You can contact me through email or connect with me on LinkedIn or GitHub using the links below.</ThemedText>

      <SocialView />

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  reactLogo: {
    height: 250,
    width: 350,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
