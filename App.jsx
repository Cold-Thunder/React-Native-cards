import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StatusBar,
  useColorScheme
} from 'react-native'

import FlatCards from './components/flatCards/FlatCards'
import ElevetedCards from './components/elevatedCards/ElevetedCards';
import FancyCards from './components/fancyCards/FancyCards';
import ActionCards from './components/action/ActionCard';

const App = () => {

  const useColor = useColorScheme() === "dark";

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={useColor ? styles.whiteText : styles.blackText}>
          <FlatCards/>
          <ElevetedCards />
          <FancyCards />
          <ActionCards />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App;

const styles = StyleSheet.create({
  whiteText: {
    color: "white"
  },
  blackText: {
    color: "black"
  }
})