import React, { useContext, useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import colors from "./shared/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RecipeContext } from "../services/RecipeContext";

const RenderInput = ({
  placeholder = "Search recipe",
  showIcon = true,
  style,
  editable = true,
  autoFocus = false,
}) => {
  const [keyword, setKeyword] = useState("");
  const { search } = useContext(RecipeContext);
  return (
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
        autoFocus={autoFocus}
        value={keyword}
        onChangeText={(text) => setKeyword(text)}
        onSubmitEditing={() => {
          search({ q: keyword });
          console.log("submitEditing");
        }}
      />
    </View>
  );
};

const Input = ({
  placeholder = "Search recipe",
  showIcon = true,
  style,
  pressable = false,
  onPress,
  autoFocus,
}) => {
  if (pressable) {
    return (
      <Pressable onPress={onPress}>
        <RenderInput
          placeholder={placeholder}
          showIcon={showIcon}
          style={style}
          editable={!pressable}
          autoFocus={autoFocus}
        />
      </Pressable>
    );
  }
  return (
    <RenderInput
      placeholder={placeholder}
      showIcon={showIcon}
      style={style}
      autoFocus={autoFocus}
    />
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
