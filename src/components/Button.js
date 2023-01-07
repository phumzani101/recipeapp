import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "./shared/colors";

const Button = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{children}</Text>
      <Image
        style={styles.icon}
        source={require("../../assets/arrowRight.png")}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "500",
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
});

export default Button;
