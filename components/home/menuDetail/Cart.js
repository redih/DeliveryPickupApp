import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { useSelector } from "react-redux";
import OrderCheckoutList from "./OrderCheckoutList";

export default function Cart({}) {
  const [modalVisible, setModalVisible] = useState(false);

  const { items } = useSelector((state) => state.cartReducer.selectedItems);
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((a, b) => a + b, 0);

  const totalAmount = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  console.log(totalAmount);

  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "rgba(0,0,0,0.8)",
    },
    modalCheckoutContainer: {
      backgroundColor: "#fff",
      padding: 20,
      height: 500,
      borderWidth: 1,
    },
    modalCheckoutButton: {
      textAlign: "center",
      fronWeight: "600",
      fontSize: 20,
      marginBottom: 10,
    },
    subtotalContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 20,
    },
    subtotalText: {
      textAlign: "left",
      fontWeight: "600",
      fontSize: 20,
      marginBottom: 10,
    },
  });

  const checkoutContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.modalCheckoutButton}> Restaurant Name </Text>
            {items.map((item, index) => (
              <OrderCheckoutList key={index} item={item} />
            ))}
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>Subtotal</Text>
              <Text style={{ fontSize: 20 }}>
                {" "}
                {totalAmount} {"$"}
              </Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity
                style={{
                  marginTop: 50,
                  backgroundColor: "#a89a32",
                  alignItems: "center",
                  padding: 10,
                  borderRadius: 20,
                  width: 200,
                  position: "relative",
                }}
                onPress={() => setModalVisible(false)}
              >
                <Text> Submit Payment </Text>
                <Text
                  style={{
                    position: "absolute",
                    right: 20,
                    bottom: 10,
                    fontSize: 15,
                    right: 10,
                  }}
                >
                  {" "}
                  {total ? totalAmount : " "}
                  {"$"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };
  return (
    <>
      <Modal
        animationType="fade"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkoutContent()}
      </Modal>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "flex-end",
          flexDirection: "row",
          position: "relative",
          bottom: 5,
          zIndex: 999,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <TouchableOpacity
            style={{
              marginTop: 20,
              backgroundColor: "#a89a32",
              flexDirection: "row",
              justifyContent: "flex-end",
              padding: 15,
              borderRadius: 50,
              width: 200,
              position: "relative",
            }}
            onPress={() => setModalVisible(true)}
          >
            <Text style={{ color: "black", fontSize: 20, marginRight: 50 }}>
              Cart
            </Text>
            <Text style={{ color: "black", fontSize: 20 }}>
              {totalAmount} {"$"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
