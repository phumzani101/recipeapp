import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "./shared/colors";

const CategoryList = ({ categories = [], selected, onCategoryPress }) => {
  return (
    <FlatList
      horizontal
      data={categories}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => String(item)}
      renderItem={({ item, index }) => {
        const selectedItem = selected === item;
        return (
          <TouchableOpacity
            onPress={() => onCategoryPress(item)}
            style={[
              styles.container,
              selectedItem ? styles.selectedContainer : {},
            ]}
            key={index}
          >
            <Text
              style={[styles.item, selectedItem ? styles.selected : {}]}
              key={index}
            >
              {item}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginRight: 8,
  },
  item: {
    fontSize: 12,
    color: colors.green,
    padding: 5,
    fontWeight: "bold",
    paddingHorizontal: 12,
  },
  selected: {
    color: colors.white,
    fontWeight: "bold",
  },
  selectedContainer: {
    backgroundColor: colors.green,
    borderRadius: 10,
  },
});

export default CategoryList;
