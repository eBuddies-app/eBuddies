import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View, Image, Picker, Text, Button, TextInput, StyleSheet } from 'react-native'
import Style from '../AllEvents/AllEventsScreenStyle'
import styles from './InterestsScreenStyle'
import { ApplicationStyles, Helpers, Images, Metrics, Fonts } from 'App/Theme'

const Interests = () => {
  const [selectedValue, setSelectedValue] = useState('food')
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View>
          <Image style={styles.arrow} source={require('App/Assets/Images/arrow.png')} />
        </View>
        <View>
          <Text style={styles.header}>Select Interests</Text>
        </View>
        <View>
          <View style={styles.selectInterests}>
            <Button
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              color="rgba(38,153,251,1)"
              style={{ ...Fonts.small }}
              title="Food"
              value="food"
            />
          </View>
          <View style={styles.selectInterests}>
            <Button
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              color="rgba(38,153,251,1)"
              style={{ ...Fonts.small }}
              title="Entertainment"
              value="entertainment"
            />
          </View>
          <View style={styles.selectInterests}>
            <Button
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              color="rgba(38,153,251,1)"
              style={{ ...Fonts.small }}
              title="Health/Fitness"
              value="health/fitness"
            />
          </View>
          <View style={styles.selectInterests}>
            <Button
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              color="rgba(38,153,251,1)"
              style={{ ...Fonts.small }}
              title="Education"
              value="education"
            />
          </View>
        </View>

        <View style={styles.button}>
          <Button color="white" style={{ ...Fonts.normal, textAlign: 'center' }} title="CONTINUE">
            CONTINUE
          </Button>
        </View>
        <View style={styles.account}>
          <Button
            color="rgba(38,153,251,1)"
            style={{ ...Fonts.small }}
            title="Already have an account?"
          />
        </View>

        <View style={styles.login}>
          <Button color="rgba(38,153,251,1)" style={{ ...Fonts.small }} title="LOGIN" />
        </View>
      </View>
    </View>
  )
}

export default connect(null)(Interests)
