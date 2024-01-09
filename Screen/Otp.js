import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

import { useNavigation } from "@react-navigation/native";

export default function Otp() {
    const navigation = useNavigation();
    const [otp, setOtp] = useState(["", "", "", ""]);

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
  };

  return (
    <View style={{ backgroundColor: "#4169e1", width: "100%", height: "100%" }}>
      <View style={{ marginTop: 40, marginLeft: 20 }}>
                <Pressable onPress={() => navigation.goBack()}>
                    <AntDesign name="closecircle" size={26} color="#fff" />
                </Pressable>
      </View>
      <View
        style={{
          width: "100%",
          height: "70%",
          backgroundColor: "#fff",
          marginTop: 140,
          borderTopLeftRadius: 150,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <View style={{ width: "88%", height: "100%", marginTop: 100 }}>
            <Text style={{ fontSize: 22, fontWeight: 500 }}>Verification</Text>
            <Text style={{ fontSize: 16.7, marginTop: 15 }}>
              Enter 4 digit code we sent to <Text style={{fontWeight:700}}>+91 XXXXX XXXXX</Text>
            </Text>

            <View style={{ alignItems: "center", marginTop: 20 }}>
        <View style={{ display: "flex", flexDirection: "row", gap: 25 }}>
          {[0, 1, 2, 3].map((index) => (
            <TextInput
              key={index}
              style={[
                styles.input,
                { backgroundColor: otp[index].length > 0 ? "#4169e1" : "#f4a460" },
              ]}
              placeholder="X"
              maxLength={1}
              onChangeText={(text) => handleOtpChange(text, index)}
            />
          ))}
        </View>
      </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 20,
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 17 }}>Resend code in <Text style={{fontWeight:700}}>00:30</Text></Text>
            </View>

            <Pressable
              style={{
                width: 360,
                borderRadius: 8,
                padding: 8,
                backgroundColor: "#f4a460",
                marginTop: 40,
              }}
            >
              <Text
                style={{
                  fontSize: 17,
                  color: "white",
                  textAlign: "center",
                  fontWeight: 500,
                }}
              >
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#f4a460",
        color: "white",
        paddingVertical: 10,
        paddingHorizontal: 15,
        textAlign: "center",
        borderRadius: 8,
        fontSize: 17,
      },
});
