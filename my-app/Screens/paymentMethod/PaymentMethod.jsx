// PaymentMethod.js
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function PaymentMethod() {
  const [selected, setSelected] = useState("card");

  const methods = [
    { id: "card", label: "Credit / Debit Card", icon: "card" },
    { id: "upi", label: "UPI", icon: "logo-google" },
    { id: "wallet", label: "Wallet", icon: "wallet" },
    { id: "cod", label: "Cash on Delivery", icon: "cash" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>💳 Select Payment Method</Text>

      {methods.map((method) => (
        <TouchableOpacity
          key={method.id}
          style={[
            styles.option,
            selected === method.id && styles.selectedOption,
          ]}
          onPress={() => setSelected(method.id)}
        >
          <Ionicons
            name={method.icon}
            size={24}
            color={selected === method.id ? "#007AFF" : "#555"}
          />
          <Text
            style={[
              styles.optionText,
              selected === method.id && styles.selectedText,
            ]}
          >
            {method.label}
          </Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.payButton}>
        <Text style={styles.payButtonText}>Proceed to Pay</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  selectedOption: {
    borderColor: "#007AFF",
    backgroundColor: "#e6f0ff",
  },
  optionText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
  selectedText: {
    color: "#007AFF",
    fontWeight: "bold",
  },
  payButton: {
    marginTop: 30,
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  payButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
