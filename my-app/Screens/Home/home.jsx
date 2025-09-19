// HomeScreen.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Welcome Back 👋</Text>
        <Ionicons name="notifications-outline" size={28} color="#333" />
      </View>

      {/* Balance Card */}
      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Total Balance</Text>
        <Text style={styles.balanceValue}>$12,450.00</Text>
      </View>

      {/* Income & Expense */}
      <View style={styles.row}>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Income</Text>
          <Text style={styles.income}>$5,200</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Expenses</Text>
          <Text style={styles.expense}>$2,850</Text>
        </View>
      </View>

      {/* Quick Actions */}
      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.actionBtn}>
          <FontAwesome5 name="money-bill-wave" size={28} color="#4CAF50" />
          <Text style={styles.actionText}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn}>
          <MaterialIcons name="payment" size={28} color="#2196F3" />
          <Text style={styles.actionText}>Pay Bills</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn}>
          <Ionicons name="add-circle" size={28} color="#FF9800" />
          <Text style={styles.actionText}>Top Up</Text>
        </TouchableOpacity>
      </View>

      {/* Recent Transactions */}
      <Text style={styles.sectionTitle}>Recent Transactions</Text>
      <View style={styles.transaction}>
        <Text style={styles.transactionName}>Grocery Store</Text>
        <Text style={styles.expense}>- $80</Text>
      </View>
      <View style={styles.transaction}>
        <Text style={styles.transactionName}>Salary</Text>
        <Text style={styles.income}>+ $3,000</Text>
      </View>
      <View style={styles.transaction}>
        <Text style={styles.transactionName}>Electricity Bill</Text>
        <Text style={styles.expense}>- $120</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9FAFB", padding: 20 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 },
  title: { fontSize: 20, fontWeight: "600", color: "#333" },
  balanceCard: { backgroundColor: "#4CAF50", padding: 20, borderRadius: 15, marginBottom: 20 },
  balanceLabel: { color: "#fff", fontSize: 16 },
  balanceValue: { color: "#fff", fontSize: 28, fontWeight: "bold", marginTop: 5 },
  row: { flexDirection: "row", justifyContent: "space-between", marginBottom: 20 },
  statCard: { flex: 1, backgroundColor: "#fff", padding: 15, borderRadius: 12, marginHorizontal: 5, elevation: 2 },
  statLabel: { color: "#666", fontSize: 14 },
  income: { color: "#4CAF50", fontSize: 18, fontWeight: "bold" },
  expense: { color: "#E53935", fontSize: 18, fontWeight: "bold" },
  sectionTitle: { fontSize: 18, fontWeight: "600", marginBottom: 10, color: "#333" },
  actionBtn: { flex: 1, backgroundColor: "#fff", alignItems: "center", padding: 15, margin: 5, borderRadius: 12, elevation: 2 },
  actionText: { marginTop: 8, fontSize: 14, fontWeight: "500", color: "#333" },
  transaction: { flexDirection: "row", justifyContent: "space-between", backgroundColor: "#fff", padding: 15, borderRadius: 10, marginBottom: 10, elevation: 1 },
  transactionName: { fontSize: 16, fontWeight: "500", color: "#333" },
});
