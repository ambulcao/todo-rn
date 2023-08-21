import React from 'react'
import { Button, Icon, useColorModeValue, IButtonProps } from 'native-base'
import { Feather } from '@expo/vector-icons'
import { useHandler } from 'react-native-reanimated'

interface Props extends IButtonProps {
  active: boolean
  onPress: () => void;
  icon: string
  children: React.ReactNode 
}

const MenuButton = ({ active, icon, children, ...props }: Props) => {
  const colorSheme = useColorModeValue('blue', 'darkBlue')
  const inactiveTextColor = useColorModeValue('blue.500', undefined)
  const pressedBgColor = useColorModeValue('primary.100', 'primary.600')

  return (
    <Button
      size="lg"
      colorScheme={colorSheme}
      bg={ active ? undefined : 'transparent' }
      _pressed={{
        bg: pressedBgColor
      }}
      _text={{
        color: active ? 'blue.50' : inactiveTextColor
      }}
      variant="solid"
      justifyContent="flex-start"
      leftIcon={<Icon as={Feather} name={icon} size="sm" opacity={0.5} />}
      {...props}
    >
      {children}
    </Button>
  )
}

export default MenuButton