import React from "react";
import { Text, View, StyleSheet } from "react-native";

import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { Authenticator } from "aws-amplify-react-native";

Amplify.configure(awsconfig);

console.disableYellowBox = true;

function Home(props) {
  if (props.authState === "signedIn") return <Text>Home</Text>;
  else return <></>;
}

export default function App() {
  return (
    <View style={styles.container}>
      <Authenticator usernameAttributes="email">
        <Home />
      </Authenticator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
