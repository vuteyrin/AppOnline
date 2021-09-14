import React from 'react'
import { View, Text,StyleSheet,TouchableWithoutFeedback, ScrollView,SafeAreaView,ImageBackground } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Menu = ({navigation}) => {
    const image = { uri: "https://reactjs.org/logo-og.png" };
    return (
    <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../assets/Image/img5.jpg')} resizeMode="cover" style={styles.image}>
        <ScrollView>
            <View style={styles.row}>
                <View style={styles.col}>
                    <TouchableWithoutFeedback onPress={()=> navigation.navigate("PaymentMethod")}>
                    <View style={styles.body}>
                    <FontAwesome name="cc-mastercard" size={40} color="#FF8C00" />
                    <Text style={styles.text}>Create Payment Method</Text>
                    </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.col}>
                    <TouchableWithoutFeedback onPress={()=> navigation.navigate("PaymentMethod")}>
                    <View style={styles.body}>
                    <FontAwesome name="cc-mastercard" size={40} color="#FF8C00" />
                    <Text style={styles.text}>Create Payment Method</Text>
                    </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.col}>
                    <TouchableWithoutFeedback onPress={()=> navigation.navigate("PaymentMethod")}>
                    <View style={styles.body}>
                    <FontAwesome name="cc-mastercard" size={40} color="#FF8C00" />
                    <Text style={styles.text}>Create Payment Method</Text>
                    </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
            {/* row */}
            <View style={styles.row}>
                <View style={styles.col}>
                    <TouchableWithoutFeedback onPress={()=> navigation.navigate("PaymentMethod")}>
                    <View style={styles.body}>
                    <FontAwesome name="cc-mastercard" size={40} color="#FF8C00" />
                    <Text style={styles.text}>Create Payment Method</Text>
                    </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.col}>
                    <TouchableWithoutFeedback onPress={()=> navigation.navigate("PaymentMethod")}>
                    <View style={styles.body}>
                    <FontAwesome name="cc-mastercard" size={40} color="#FF8C00" />
                    <Text style={styles.text}>Create Payment Method</Text>
                    </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.col}>
                    <TouchableWithoutFeedback onPress={()=> navigation.navigate("PaymentMethod")}>
                    <View style={styles.body}>
                    <FontAwesome name="cc-mastercard" size={40} color="#FF8C00" />
                    <Text style={styles.text}>Create Payment Method</Text>
                    </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
            {/* row */}
            <View style={styles.row}>
                <View style={styles.col}>
                    <TouchableWithoutFeedback onPress={()=> navigation.navigate("PaymentMethod")}>
                    <View style={styles.body}>
                    <FontAwesome name="cc-mastercard" size={40} color="#FF8C00" />
                    <Text style={styles.text}>Create Payment Method</Text>
                    </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.col}>
                    <TouchableWithoutFeedback onPress={()=> navigation.navigate("PaymentMethod")}>
                    <View style={styles.body}>
                    <FontAwesome name="cc-mastercard" size={40} color="#FF8C00" />
                    <Text style={styles.text}>Create Payment Method</Text>
                    </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.col}>
                    <TouchableWithoutFeedback onPress={()=> navigation.navigate("PaymentMethod")}>
                    <View style={styles.body}>
                    <FontAwesome name="cc-mastercard" size={40} color="#FF8C00" />
                    <Text style={styles.text}>Create Payment Method</Text>
                    </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </ScrollView>
        </ImageBackground>
    </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
    //   backgroundColor: "blac"
    },
    image: {
        flex: 1,
        justifyContent: "center"
      },
    row: {
        flexDirection: "row"
    },
    col: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      height: 150
    },
    body:{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: "#FFFF",
    //   marginVertical: 10,
    //   borderRadius: 5,
      backgroundColor: "red"
    },
    text: {
      fontSize: 12,
      fontWeight: "bold",
      padding: 12
    }
  })

export default Menu
