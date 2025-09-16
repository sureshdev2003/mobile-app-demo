// Categories.js
import React from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

const categories = [
  { id: "1", name: "Dashboard", icon: "dashboard", color: "#4CAF50" },
  { id: "2", name: "Accounts", icon: "account-balance", color: "#2196F3" },
  { id: "3", name: "Transactions", icon: "swap-horiz", color: "#FF9800" },
  { id: "4", name: "Budgets", icon: "pie-chart", color: "#9C27B0" },
  { id: "5", name: "Reports", icon: "bar-chart", color: "#3F51B5" },
  { id: "6", name: "Income", icon: "attach-money", color: "#009688" },
  { id: "7", name: "Expenses", icon: "money-off", color: "#E91E63" },
  { id: "8", name: "Investments", icon: "trending-up", color: "#FF5722" },
  { id: "9", name: "Loans", icon: "credit-card", color: "#795548" },
  { id: "10", name: "Settings", icon: "settings", color: "#607D8B" },
];

export default function Categories({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: item.color }]}
      onPress={() => navigation.navigate(item.name)}
    >
      <MaterialIcons name={item.icon} size={32} color="#fff" />
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  row: {
    justifyContent: "space-between",
  },
  card: {
    flex: 1,
    margin: 8,
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
  text: {
    marginTop: 10,
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
