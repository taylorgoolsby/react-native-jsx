# react-native-jsx
Compile JSX templates at runtime in React Native

### Usage
```
import React from "react"
import { Text, View } from "react-native"
import compiler from "react-native-jsx"

export default class App extends React.Component {
  render() {
    const input = `<Text>Shake your phone to open the developer menu.</Text>`
    const transform = compiler.transform(input, {
      presets: ["react"],
      plugins: ["transform-react-jsx"]
    })

    const supplied = {
      React,
      Text
    }
    const output = compiler.render(transform, supplied)

    return (
      <View>
       {output}
      </View>
    )
  }
}
```
