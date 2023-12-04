import React from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackRouteParamList } from '@routes/stack.routes'
import { Button, Container, Title } from './styles'

type Props = NativeStackScreenProps<StackRouteParamList, 'Home'>

export function Home({ navigation }: Props) {
  return (
    <Container>
      <Title>Tela de Home!</Title>
      <Button
        onPress={() => {
          navigation.navigate('Login')
        }}
      >
        Login
      </Button>
    </Container>
  )
}
