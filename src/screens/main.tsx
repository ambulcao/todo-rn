import React, { useCallback, useState } from 'react'
import { Pressable } from 'react-native'
import {
  Text,
  Box,
  Center, 
  VStack,
  useColorModeValue
} from 'native-base'
import { AntDesign } from '@expo/vector-icons'
import ThemeToggle from '../components/theme-toggle'
import TaskItem from '../components/task-item'
import shortid from 'shortid'

const initialData = [
  {
    id: shortid.generate(),
    subject: 'Buy movie tickets for Friday',
    done: false
  },
  {
    id: shortid.generate(),
    subject: 'Make a React Native tutorial',
    done: false
  }
]

export default function MainScreen() {
  const [data, setData] = useState(initialData)
  const [editingItemId, setEditingItemId] = useState(null)
  const handlePressCheckbox = useCallback(() => {
      setChecked(prev => !prev)
  }, [])

  return(
    <Center _dark={{bg: 'blueGray.900'}} _light={{bg: 'blueGray.50'}} flex={1}>
      <VStack space={5} alignItems="center" w="full">
            <TaskItem 
              isEditing={isEditing}
              isDone={checked} 
              onToggleCheckbox={handlePressCheckbox} 
              subject={subject}
              onPressLabel={() => setEditing(true)}
              onChangeSubject={setSubject}
              onFinishEditing={() => setEditing(false)}
            />
        
        <ThemeToggle/>
      </VStack>
    </Center>
  )
}