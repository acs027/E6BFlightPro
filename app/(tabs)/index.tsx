import { Image } from "expo-image";
import { StyleSheet, ScrollView, Text, Linking } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
export default function HomeScreen() {
  document.title = "E6B Flight Pro";
  const imageSources = [
    require("@/assets/images/screenshot1.jpeg"),
    require("@/assets/images/screenshot2.jpeg"),
    require("@/assets/images/screenshot3.jpeg"),
    require("@/assets/images/screenshot4.jpeg"),
    require("@/assets/images/screenshot5.jpeg"),
  ];

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
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">E6B Flight Pro</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView>
        <Text
          style={{ color: "#1e90ff" }} // or your theme's link color
          onPress={() =>
            Linking.openURL(
              "https://apps.apple.com/tr/app/e6b-flight-pro/id6743019639"
            )
          }
        >
          View in App Store
        </Text>
      </ThemedView>
      <ThemedView>
        <Text
          style={{ color: "#1e90ff" }} // or your theme's link color
          onPress={() =>
            Linking.openURL("https://github.com/acs027/FlightComputer")
          }
        >
          View in GitHub
        </Text>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          Your All-in-One E6B Flight Computer Companion
        </ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">
            Designed for student pilots, flight instructors, and aviation
            professionals, this app brings the classic E6B flight computer to
            life with a highly realistic, intuitive digital experience. Whether
            you're learning how to use the flight computer or calculating during
            real flight planning, this app is built for accuracy and ease.
          </ThemedText>
        </ThemedText>
      </ThemedView>

      {/* Image Gallery Section */}
      <ThemedView style={[styles.stepContainer, styles.imageGallery]}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {imageSources.map((src, index) => (
            <Image
              key={index}
              source={src}
              style={styles.galleryImage}
              resizeMode="contain"
            />
          ))}
        </ScrollView>
      </ThemedView>

      {/* Features Section */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Features</ThemedText>
      </ThemedView>

      {features.map(({ title, description }) => (
        <ThemedView key={title} style={styles.stepContainer}>
          <ThemedText type="subtitle">{title}</ThemedText>
          <ThemedText>{description}</ThemedText>
        </ThemedView>
      ))}
    </ParallaxScrollView>
  );
}

const features = [
  {
    title: "Interactive E6B Simulation",
    description:
      "- Rotate dials, slide scales, and visualize the E6B like the real thing.",
  },
  {
    title: "Step-by-Step Wind Side Input (Back Side of E6B)",
    description:
      "- Simulate the classic wind-side process interactively—set wind direction, mark wind speed, rotate the disk for true course, and input true airspeed. As you move through each step, the app visually demonstrates how to solve for wind correction angle and ground speed. A hands-on way to learn and understand the wind triangle just like with the physical E6B.",
  },
  {
    title: "Flight Calculators",
    description: "- Compute wind correction angle, ground speed, and more.",
  },
  {
    title: "Unit Converters",
    description:
      "- Quickly convert between aviation-specific units like altitude, temperature, pressure, and speed.",
  },
  {
    title: "Pro Mode",
    description:
      "- Unlock advanced tools and simulate the wind side of the E6B for complex flight calculations.",
  },
];

const styles = StyleSheet.create({
  githubLinkContainer: {
    marginTop: -10,
    marginBottom: 1,
  },

  githubLink: {
    fontSize: 16,
    color: "#1e90ff",
    textDecorationLine: "underline",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 250,
    width: 350,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  imageGallery: {
    marginTop: 12,
  },
  galleryImage: {
    width: 220,
    height: 420,
    marginRight: 12,
    borderRadius: 12,
    backgroundColor: "#ccc", // Optional: fallback background
  },
});
