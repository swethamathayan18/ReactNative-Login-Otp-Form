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

export default function SignIn() {
    const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
  const navigateToOtp = () => {
    navigation.navigate("Otp");
  };
  return (
    <View style={{ backgroundColor: "#4169e1", width: "100%", height: "100%" }}>
      <View style={{ marginTop: 40, marginLeft: 20 }}>
        <AntDesign name="closecircle" size={26} color="#fff" />
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
        <View style={{ marginTop: 30, alignItems: "center" }}>
          <Text style={{ fontSize: 23, fontWeight: 600 }}>Sign In</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <View style={{ width: "88%", height: "100%", marginTop: 40 }}>
            <Text style={{ fontSize: 20, fontWeight: 500 }}>Mobile Number</Text>
            <Text style={{ fontSize: 17, marginTop: 15 }}>
              Please enter your registered mobile number.
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 30,
              }}
            >
              <View style={{marginLeft:15}}>
              <Text
                style={[
                  styles.prefix,
                  isFocused && {
                    color: "#000",
                  },
                ]}
              >
                   +91 <Pressable><AntDesign name="caretdown" size={15} /></Pressable>
              </Text>
              </View>

              <TextInput
                style={styles.input}
                placeholder="XXXXX XXXXX"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
            </View>

            <Pressable
              style={{
                width: 360,
                borderRadius: 8,
                padding: 8,
                backgroundColor: "#f4a460",
                marginTop: 60,
              }}
              onPress={navigateToOtp}
            >
              <Text
                style={{
                  fontSize: 17,
                  color: "white",
                  textAlign: "center",
                  fontWeight: 500,
                }}
              >
                Send Code
              </Text>
            </Pressable>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 20,
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 18 }}>Don't have an account?</Text>
              <Pressable
                style={{
                  backgroundColor: "#4169e1",
                  padding: 7,
                  marginLeft: 10,
                  borderRadius: 8,
                  width: 90,
                }}
              >
                <Text
                  style={{ fontSize: 17, color: "white", textAlign: "center" }}
                >
                  Sign Up
                </Text>
              </Pressable>
            </View>
            <View
              style={{ display: "flex", flexDirection: "row", marginTop: 60 }}
            >
              <Text style={{ fontSize: 16 }}>
                By clicking start, you agree to our{" "}
              </Text>
              <Pressable>
                <Text style={{ fontSize: 16, color: "#f4a460" }}>
                  Terms & Conditions
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    flex: 1,
    borderRadius: 8,
    padding: 5,
    borderColor: "#4168e1",
    fontSize: 16,
    paddingLeft: 70,
    position: "absolute",
    width:360
  },
});
