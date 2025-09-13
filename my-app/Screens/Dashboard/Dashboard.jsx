import React from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView, ScrollView } from "react-native";

const transactions = [
  { id: "1", title: "Grocery Store", amount: "-₹1,200", date: "12 Sep" },
  { id: "2", title: "Salary", amount: "+₹50,000", date: "10 Sep" },
  { id: "3", title: "Electric Bill", amount: "-₹2,300", date: "08 Sep" },
  { id: "4", title: "Movie", amount: "-₹500", date: "05 Sep" },
];

export default function Dashboard() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Text style={styles.header}>My Finance Dashboard</Text>

        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Total Balance</Text>
          <Text style={styles.balanceValue}>₹1,20,500</Text>
        </View>

        {/* Income / Expense Summary */}
        <View style={styles.summaryRow}>
          <View style={[styles.summaryCard, { backgroundColor: "#d4f8e8" }]}>
            <Text style={styles.summaryLabel}>Income</Text>
            <Text style={styles.summaryValue}>₹75,000</Text>
          </View>
          <View style={[styles.summaryCard, { backgroundColor: "#ffd6d6" }]}>
            <Text style={styles.summaryLabel}>Expenses</Text>
            <Text style={styles.summaryValue}>₹25,000</Text>
          </View>
        </View>

        {/* Recent Transactions */}
        <Text style={styles.sectionTitle}>Recent Transactions</Text>
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.transactionItem}>
              <View>
                <Text style={styles.transactionTitle}>{item.title}</Text>
                <Text style={styles.transactionDate}>{item.date}</Text>
              </View>
              <Text
                style={[
                  styles.transactionAmount,
                  { color: item.amount.startsWith("+") ? "green" : "red" },
                ]}
              >
                {item.amount}
              </Text>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9f9f9", padding: 16 },
  header: { fontSize: 24, fontWeight: "700", marginBottom: 20, textAlign: "center" },

  balanceCard: {
    backgroundColor: "#4a90e2",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  balanceLabel: { color: "#fff", fontSize: 16 },
  balanceValue: { color: "#fff", fontSize: 28, fontWeight: "bold", marginTop: 5 },

  summaryRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 20 },
  summaryCard: {
    flex: 1,
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 5,
    elevation: 2,
  },
  summaryLabel: { fontSize: 14, color: "#555" },
  summaryValue: { fontSize: 20, fontWeight: "bold", marginTop: 4 },

  sectionTitle: { fontSize: 18, fontWeight: "600", marginBottom: 10 },
  transactionItem: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    elevation: 1,
  },
  transactionTitle: { fontSize: 16, fontWeight: "500" },
  transactionDate: { fontSize: 12, color: "#666" },
  transactionAmount: { fontSize: 16, fontWeight: "bold" },
});
