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

const RecipeItem = ({ title, image, author, rating, time, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>

      <Rating
        defaultRating={rating}
        isDisabled={true}
        size={16}
        showRating={false}
        ratingContainerStyle={{
          alignSelf: "flex-start",
          paddingBottom: 10,
        }}
      />

      {/* <View style={styles.row}>
        {author?.image && (
          <Image style={styles.authorImage} source={{ uri: author?.image }} />
        )}

        <Text style={styles.subText}>by {author?.name}</Text>
      </View> */}

      <View style={styles.row}>
        <Ionicons
          name="time-outline"
          size={17}
          color="black"
          style={styles.icon}
        />
        <Text style={styles.subText}>{time}</Text>
      </View>
    </TouchableOpacity>
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
    width: width * 0.4,
    marginTop: 55,
    margin: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    color: colors.grey,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
  },
  authorImage: {
    width: 24,
    height: 24,
    marginRight: 8,
    borderRadius: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: -50,
    alignSelf: "center",
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

export default RecipeItem;
