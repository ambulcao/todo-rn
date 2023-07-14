import React, { useEffect, memo } from 'react'
import Animated, {
  Easing, useSharedValue, useAnimatedProps, withTiming, interpolateColor
} from 'react-native-reanimated'
import Svg, { Path, Defs, ClipPath, G } from 'react-native-svg'

const MARGIN = 10
const vWidth = 64 + MARGIN
const vHeight = 64 + MARGIN

const AnimatedCheckbox = () => {
  return (
    <Svg 
      viewBox={[-MARGIN, -MARGIN, vWidth + MARGIN, vHeight + MARGIN].join('')}
    >
      <Path 
        d="M24 0.5H40C48.5809 0.5 54.4147 2.18067 58.117 5.88299C61.8193 9.58532 63.5 15.4191 63.5 24V40C63.5 48.5809 61.8193 54.4147 58.117 58.117C54.4147 61.8193 48.5809 63.5 40 63.5H24C15.4191 63.5 9.58532 61.8193 5.88299 58.117C2.18067 54.4147 0.5 48.5809 0.5 40V24V0.5 15.4191 2.18067 9.58532 5.88299 5.88299C9.58532 2.18067 15.4191 0.5 24 0.5Z" 
        stroke="black"
      />

      <Path 
        d="M8 32.5C18 39 26 47 26 47C26 47 33 28 63.5 4" 
        stroke="black"
      />
    </Svg>
  )
}

export default AnimatedCheckbox