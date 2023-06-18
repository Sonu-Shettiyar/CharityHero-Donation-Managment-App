import { useToast } from '@chakra-ui/react'
import React from 'react'

function ToastComponent({type,title,status,description}) {
    const toast = useToast()
    return (
      <Button
        onClick={() =>
          toast({
            title: title,
            description:description ,
            status: status,
            duration: 9000,
            isClosable: true,
          })
        }
      >
        Show Toast
      </Button>
    )
  }
export default ToastComponent