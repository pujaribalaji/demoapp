import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";

const ListingBox = ({ imageSource, title, price, location }) => {
  const location1 = `<svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Group 10">
  <g id="Group 14">
  <path id="Vector" d="M6.74372 4.4361C6.74372 3.63125 6.424 2.85937 5.85489 2.29026C5.28577 1.72115 4.51389 1.40142 3.70905 1.40142C2.9042 1.40142 2.13232 1.72115 1.56321 2.29026C0.994096 2.85937 0.674372 3.63125 0.674372 4.4361C0.674372 5.68099 1.67042 7.30353 3.70905 9.24707C5.74767 7.30353 6.74372 5.68099 6.74372 4.4361ZM3.70905 10.1683C1.23612 7.92058 0 6.00941 0 4.4361C0 3.4524 0.390774 2.50899 1.08635 1.81341C1.78194 1.11782 2.72535 0.727051 3.70905 0.727051C4.69275 0.727051 5.63616 1.11782 6.33174 1.81341C7.02732 2.50899 7.41809 3.4524 7.41809 4.4361C7.41809 6.00941 6.18197 7.92058 3.70905 10.1683Z" fill="#B9B9B9"/>
  <path id="Vector_2" d="M3.70888 5.44749C3.97716 5.44749 4.23446 5.34091 4.42416 5.15121C4.61386 4.96151 4.72044 4.70421 4.72044 4.43593C4.72044 4.16765 4.61386 3.91035 4.42416 3.72065C4.23446 3.53095 3.97716 3.42437 3.70888 3.42437C3.4406 3.42437 3.1833 3.53095 2.9936 3.72065C2.8039 3.91035 2.69732 4.16765 2.69732 4.43593C2.69732 4.70421 2.8039 4.96151 2.9936 5.15121C3.1833 5.34091 3.4406 5.44749 3.70888 5.44749ZM3.70888 6.12186C3.26174 6.12186 2.83292 5.94424 2.51675 5.62806C2.20057 5.31189 2.02295 4.88307 2.02295 4.43593C2.02295 3.98879 2.20057 3.55997 2.51675 3.2438C2.83292 2.92762 3.26174 2.75 3.70888 2.75C4.15602 2.75 4.58484 2.92762 4.90101 3.2438C5.21719 3.55997 5.39481 3.98879 5.39481 4.43593C5.39481 4.88307 5.21719 5.31189 4.90101 5.62806C4.58484 5.94424 4.15602 6.12186 3.70888 6.12186Z" fill="#B9B9B9"/>
  </g>
  </g>
  </svg>
  `;
  const save = `<svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path id="Vector" d="M6.54632 0.558105H1.65217C1.39257 0.558105 1.1436 0.663107 0.960032 0.850011C0.776466 1.03691 0.67334 1.29041 0.67334 1.55473V10.5244L4.09924 8.10855L7.52515 10.5244V1.55473C7.52515 1.29041 7.42202 1.03691 7.23846 0.850011C7.05489 0.663107 6.80592 0.558105 6.54632 0.558105ZM6.0569 5.04293H2.14158V4.0463H6.0569V5.04293Z" fill="#0066FF"/>
  </svg>
  `;
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.detailsContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.row2}>
          <View>
            <Text style={styles.price}>{price}</Text>
            <View style={styles.locationContainer}>
              <SvgXml xml={location1} height={15} width={15} />
              <Text style={styles.location}>{location}</Text>
            </View>
          </View>
          <View style={styles.saved}>
            <SvgXml xml={save} height={18} width={18} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: 25,
    width: 165,
    height: 200,
    justifyContent: "center",
    elevation: 5,
  },
  image: {
    width: 165,
    height: 110,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  detailsContainer: {
    backgroundColor: "white",
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  textContainer: {
    marginBottom: 13,
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  saved: {
    height: 28,
    width: 25,
    backgroundColor: "#E5F0FF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    bottom: 5,
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#0066FF",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationIcon: {
    width: 15,
    height: 20,
    marginRight: 5,
  },
  location: {
    fontSize: 12,
    color: "rgba(185, 185, 185, 1)",
  },
});

export default ListingBox;
