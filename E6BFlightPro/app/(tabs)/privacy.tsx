import { Image } from "expo-image";
import { Linking, StyleSheet, Text } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function PrivacyPolicyScreen() {
  document.title = "E6B Flight Pro";
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/circle-icon.png")}
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
          We value your privacy. This policy outlines how we collect and use
          data in our app, particularly in relation to AdMob advertisements.
        </ThemedText>
      </ThemedView>

      {/* Section 1 */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          1. Third-Party Services and Advertising
        </ThemedText>
        <ThemedText>
          E6B Flight Pro uses Google AdMob to serve interstitial advertisements
          in the app. As a result, AdMob may collect and use data to personalize
          or measure ads and improve SDK performance.
        </ThemedText>
        <ThemedText>
          You can learn more about how Google uses data from apps here:{" "}
          <Text
            style={{ color: "#1e90ff" }} // or your theme's link color
            onPress={() =>
              Linking.openURL("https://support.google.com/admob/answer/6128543")
            }
          >
            AdMob Policies.
          </Text>
        </ThemedText>
      </ThemedView>

      {/* Section 2 */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          2. Information Collected by AdMob
        </ThemedText>
        <ThemedText>
          AdMob may collect the following types of information:
        </ThemedText>

        <ThemedText>
          {"\u2022"} <ThemedText type="defaultSemiBold">IP Address:</ThemedText>{" "}
          Used to estimate the general location of a device.
        </ThemedText>

        <ThemedText>
          {"\u2022"}{" "}
          <ThemedText type="defaultSemiBold">Device Information:</ThemedText>{" "}
          Such as device type, operating system, and advertising identifiers.
        </ThemedText>

        <ThemedText>
          {"\u2022"}{" "}
          <ThemedText type="defaultSemiBold">App Performance Data:</ThemedText>{" "}
          Including app launch time, hang rate, and energy usage.
        </ThemedText>

        <ThemedText>
          {"\u2022"}{" "}
          <ThemedText type="defaultSemiBold">Ad Interaction Data:</ThemedText>{" "}
          Information about how you interact with ads, including views and
          clicks.
        </ThemedText>

        <ThemedText>
          {"\u2022"}{" "}
          <ThemedText type="defaultSemiBold">
            Crash Logs and Diagnostic Information:
          </ThemedText>{" "}
          Used to diagnose problems and improve the SDK, which may also be used
          for advertising and analytics purposes.
        </ThemedText>

        <ThemedText>
          {"\u2022"}{" "}
          <ThemedText type="defaultSemiBold">Coarse Location:</ThemedText> Based
          on your IP address.
        </ThemedText>
      </ThemedView>

      {/* Section 3 */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          3.Consent and App Tracking Transparency (ATT)
        </ThemedText>
        <ThemedText>
          For users on iOS 14.5 and later:
          {"\n\n"}• We request tracking permission using Apple’s App Tracking
          Transparency (ATT) framework.
          {"\n"}• This permission allows the use of your device’s advertising
          identifier (IDFA) to serve more relevant ads.
          {"\n"}• Users are shown a system prompt and can choose whether to
          allow tracking.
        </ThemedText>
      </ThemedView>

      {/* Section 4 */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          4. GDPR Compliance for EEA/UK/Switzerland Users
        </ThemedText>
        <ThemedText>
          If you are located in the European Economic Area (EEA), United
          Kingdom, or Switzerland:
          {"\n\n"}• A consent form is shown before displaying ads.
          {"\n"}• Consent is managed through Google’s User Messaging Platform
          (UMP).
        </ThemedText>
      </ThemedView>

      {/* Section 5 */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">5. Use of Collected Information</ThemedText>
        <ThemedText>
          The data collected through AdMob is used to:
          {"\n\n"}• Serve personalized and location-based ads (if permitted).
          {"\n"}• Display non-personalized ads if tracking is not allowed.
          {"\n"}• Measure ad performance and effectiveness.
          {"\n"}• Improve overall app and SDK performance.
        </ThemedText>
      </ThemedView>

      {/* Section 6 */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">6. Data Retention</ThemedText>
        <ThemedText>
          We do not store personal data ourselves. All advertising-related data
          collection and storage is handled by Google AdMob, in line with their
          data retention policies.
        </ThemedText>
      </ThemedView>

      {/* Section 7 */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          7. Changes to This Privacy Policy
        </ThemedText>
        <ThemedText>
          We may update this policy from time to time. Any changes will be
          posted in the app.
        </ThemedText>
      </ThemedView>

      {/* Section 8 */}
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
    flexDirection: "row",
    alignItems: "center",
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
    position: "absolute",
  },
});
