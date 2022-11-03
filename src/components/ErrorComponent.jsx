import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

function ErrorComponent() {
  return (
    <Alert status="error" postion={"fixed"} bottom={"4"} left={"50%"} >

      <AlertIcon  />

    </Alert>
  )
}

export default ErrorComponent