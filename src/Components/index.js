import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export const YASIM = 26

export function EnesAbiSelamlıyor({isim}) {
    return (
      <View>
      <Text style={styles.text}>
        Enes abi seni selamlıyor {isim}
         { '\n' }
         dkjfbaşkj
      </Text>
      </View>
    )
  }

  const styles = StyleSheet.create({
      text:{
          fontSize:24,
          color: "blue"
      } 
  })