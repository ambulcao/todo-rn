import React from 'react'
import { 
  ScrollView, 
  Box, 
  Text, 
  VStack,
  Icon,
  Image, 
  useColorModeValue 
} from 'native-base'
import { Feather } from '@expo/vector-icons'
import AnimatedColorBox from '../components/animated-color-box'
import Navbar from '../components/navbar'
import Masthead from '../components/masthead'
import LinkButton from '../components/link-button'

const AboutScreen = () => {
  return (
    <AnimatedColorBox 
      flex={1} 
      bg={useColorModeValue('warmGray.50', 'warmGray.900')}
      w="full"
    >
    <Masthead
      title="About this app"
      image={require('../../assets/about-masthead.png')}
    >
      <Navbar/>
    </Masthead>
    <ScrollView
      borderTopLeftRadius="20px"
      borderTopRightRadius="20px"
      bg={useColorModeValue('warmGray.50', 'primary.900')}
      mt="-20px"
      pt="30px"
      p={4}
    >
      <VStack 
        flex={1}
        space={4}
      >
        <Box alignItems={"center"}>
          <Image 
            source={require('../../assets/bulcao.gif')} 
            borderRadius="full"
            resizeMode="cover"
            w={100}
            h={100}
            alt='author'
            mt="-4"
          />
        </Box>
        <Text 
            fontSize="md"
            w="full"
            mt="-2"
          >
           Efficient task management: Modern, intuitive interface for seamless productivity on iOS and Android.
          </Text>
          <LinkButton
            colorScheme="red" 
            size="lg"
            mt="-2"
            borderRadius="full"
            href="https://github.com/ambulcao/todo-rn"
            leftIcon={
              <Icon as={Feather} name="github" size="sm" opacity={0.5} />
            }
          >
            Go to GitHub
          </LinkButton>
          <LinkButton 
            colorScheme={useColorModeValue('blue', 'darkBlue')}
            size="lg"
            mt="-2"
            borderRadius="full"
            href="https://twitter.com/ambulcao"
            leftIcon={
              <Icon as={Feather} name="twitter" size="sm" opacity={0.5} />
            }
          >
            Go to Twitter
          </LinkButton>
          <LinkButton 
            colorScheme="purple"
            size="lg"
            mt="-2"
            borderRadius="full"
            href="https://www.linkedin.com/in/ambulcao/"
            leftIcon={
              <Icon as={Feather} name="linkedin" size="sm" opacity={0.5} />
            }
          >
            Go to Linkedin
          </LinkButton>
      </VStack>
    </ScrollView> 
    </AnimatedColorBox>
  )
}

export default AboutScreen