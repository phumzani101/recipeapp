import React from "react";
import { AirbnbRating as Rating } from "react-native-ratings";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../../../components/shared/colors";

const { width } = Dimensions.get("window");

const RecipeCard = ({ title, image, author, rating, time }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        {image && <Image source={{ uri: image }} style={styles.image} />}
      </View>

      <Rating
        defaultRating={rating}
        isDisabled={true}
        size={16}
        showRating={false}
        ratingContainerStyle={{
          alignSelf: "flex-start",
          paddingVertical: 10,
        }}
      />
      <View style={styles.footer}>
        <View style={styles.row}>
          {author?.image && (
            <Image style={styles.authorImage} source={{ uri: author?.image }} />
          )}

          <Text style={styles.subText}>by {author?.name}</Text>
        </View>

        <View style={styles.row}>
          <Ionicons
            name="time-outline"
            size={17}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.subText}>{time}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    width: width * 0.7,
    marginTop: 55,
    marginRight: 16,
    marginLeft: 1,
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    color: colors.grey,
    fontWeight: "bold",
    flex: 1,
  },
  authorImage: {
    width: 24,
    height: 24,
    marginRight: 8,
    borderRadius: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginTop: -40,
  },
  subText: {
    color: colors.lightGrey2,
    fontSize: 11,
  },
  icon: {
    width: 17,
    height: 17,
    marginRight: 8,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default RecipeCard;
