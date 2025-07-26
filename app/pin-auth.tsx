import { useRouter } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function PinAuthScreen() {
  const router = useRouter();
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  const correctPIN = "1234"; // You can store this in SecureStore later

  const handleSubmit = () => {
    if (pin === correctPIN) {
      router.replace("/home");
    } else {
      setError("Incorrect PIN. Try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your PIN</Text>

      <TextInput
        style={styles.input}
        secureTextEntry
        keyboardType="number-pad"
        value={pin}
        onChangeText={setPin}
        maxLength={4}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Unlock</Text>
      </TouchableOpacity>

      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    borderRadius: 8,
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  error: {
    color: "#f44336",
    marginTop: 10,
    textAlign: "center",
  },
});
