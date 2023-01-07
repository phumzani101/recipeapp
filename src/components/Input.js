import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "./shared/colors";
import Ionicons from "@expo/vector-icons/Ionicons";

const RenderInput = ({
  placeholder = "Search recipe",
  showIcon = true,
  style,
  editable = true,
}) => (
  <View style={[styles.container, style]}>
    {showIcon && (
      <Ionicons
        name="search"
        size={24}
        color={colors.lightGrey}
        style={styles.icon}
      />
    )}

    <TextInput
      placeholder={placeholder}
      placeholderTextColor={colors.lightGrey}
      style={styles.input}
      editable={editable}
    />
  </View>
);

const Input = ({
  placeholder = "Search recipe",
  showIcon = true,
  style,
  pressable = false,
  onPress,
}) => {
  if (pressable) {
    return (
      <Pressable onPress={onPress}>
        <RenderInput
          placeholder={placeholder}
          showIcon={showIcon}
          style={style}
          editable={!pressable}
        />
      </Pressable>
    );
  }
  return (
    <RenderInput placeholder={placeholder} showIcon={showIcon} style={style} />
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    borderColor: colors.lightGrey,
    borderWidth: 1,
    padding: 10,
  },
  input: {
    color: colors.black,
    fontSize: 12,
    flex: 1,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
});

export default Input;
