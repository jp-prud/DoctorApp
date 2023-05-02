import { ActivityIndicator } from "react-native";

import { Text } from "@components/atomic/Text";

import { Container } from "./styles";

interface LoadingScreenProps {
  title?: string
  subtitle: string
}

export function LoadingScreen({title = 'Aguarde...', subtitle}: LoadingScreenProps) {
  return (
    <Container>
      <Text color="WHITE" size="XL" weight="600" style={{marginBottom: 24}}>
        {title}
      </Text>

      <ActivityIndicator size="large" color="#fff" />

      <Text
        color="WHITE"
        size="LG"
        weight="400"
        align="center"
        style={{marginTop: 24}}>
        {subtitle}
      </Text>
    </Container>
  );
}
