// Your existing code file (e.g., MyScreen.tsx or App.tsx)

import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AnimatedCheckbox from './animated-checkbox';

const MyScreen = () => {
  const [isChecked, setIsChecked] = useState(false);

  // Define your custom colors
  const highlightColor = '#00FF00';
  const checkmarkColor = '#FF0000';
  const boxOutlineColor = '#0000FF';

  const handleCheckboxPress = () => {
    setIsChecked((prevChecked) => !prevChecked);
  };

  return (
    <View style={styles.container}>
      <AnimatedCheckbox
        checked={isChecked}
        highlightColor={highlightColor}
        checkmarkColor={checkmarkColor}
        boxOutlineColor={boxOutlineColor}
      />
      {/* You can add a touchable component here to toggle the checkbox */}
      {/* For example, you can use TouchableOpacity or TouchableWithoutFeedback */}
      {/* Replace TouchableOpacity with the appropriate touchable component */}
      <TouchableOpacity onPress={handleCheckboxPress}>
        {/* Your checkbox label or other content */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyScreen;
