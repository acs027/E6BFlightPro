import { Image } from 'expo-image';
import { Linking, StyleSheet, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function PrivacyPolicyScreen() {
   document.title = "E6B Flight Pro"
    return (
      <ParallaxScrollView
        headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        headerImage={
          <Image
            source={require('@/assets/images/circle-icon.png')}
            style={styles.reactLogo}
          />
        }
      >
        {/* Title Section */}
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Privacy Policy for E6B Flight Pro</ThemedText>
        </ThemedView>
  
        {/* Effective Date */}
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Effective Date: 08.05.2025</ThemedText>
          <ThemedText type="defaultSemiBold">
            We value your privacy. This policy outlines how we collect and use data in our app,
            particularly in relation to AdMob advertisements.
          </ThemedText>
        </ThemedView>
  
        {/* Section 1 */}
        <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">1. Information We Collect</ThemedText>
        <ThemedText>
            Our app integrates Google AdMob to serve advertisements. As a result, AdMob may collect certain data, including:
        </ThemedText>

        <ThemedText>{'\u2022'} <ThemedText type="defaultSemiBold">IP Address:</ThemedText> Used to estimate the general location of a device.</ThemedText>

        <ThemedText>{'\u2022'} <ThemedText type="defaultSemiBold">Device Information:</ThemedText> Such as device type, operating system, and advertising identifiers.</ThemedText>

        <ThemedText>{'\u2022'} <ThemedText type="defaultSemiBold">App Performance Data:</ThemedText> Including app launch time, hang rate, and energy usage.</ThemedText>

        <ThemedText>{'\u2022'} <ThemedText type="defaultSemiBold">Ad Interaction Data:</ThemedText> Information about how you interact with ads, including views and clicks.</ThemedText>

        <ThemedText>{'\u2022'} <ThemedText type="defaultSemiBold">Crash Logs and Diagnostic Information:</ThemedText> Used to diagnose problems and improve the SDK, which may also be used for advertising and analytics purposes.</ThemedText>
        </ThemedView>


  
        {/* Section 2 */}
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">2. Use of Information</ThemedText>
          <ThemedText>
            The collected data is utilized to:
            {"\n\n"}
            • Serve personalized and location-based advertisements.{"\n"}
            • Measure ad performance and effectiveness.{"\n"}
            • Improve app and SDK performance.
          </ThemedText>
        </ThemedView>
  
        {/* Section 3 */}
        <ThemedView style={styles.stepContainer}>
  <ThemedText type="subtitle">3. Advertising</ThemedText>
  <ThemedText>
    We use AdMob to display ads in our app. AdMob may collect and use data as described above to provide relevant advertising.
    {'\n\n'}
    For more details, refer to{' '}
      <Text
      style={{ color: '#1e90ff' }} // or your theme's link color
      onPress={() => Linking.openURL('https://support.google.com/admob/answer/6128543')}
    >
       AdMob Policies.
    </Text>
  </ThemedText>
</ThemedView>
  
        {/* Section 4 */}
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">4. Changes to This Privacy Policy</ThemedText>
          <ThemedText>
            We may update this policy from time to time. Any changes will be posted in the app.
          </ThemedText>
        </ThemedView>
  
        {/* Section 5 */}
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">5. Contact Us</ThemedText>
          <ThemedText>
            For any questions regarding this policy, please contact us at:
            {"\n\n"}
            alicihansarac@gmail.com
          </ThemedText>
        </ThemedView>
      </ParallaxScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    stepContainer: {
      gap: 8,
      marginBottom: 12,
    },
    reactLogo: {
      height: 250,
      width: 350,
      bottom: 0,
      left: 0,
      position: 'absolute',
    },
  });
  