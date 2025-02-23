import { Heading, VStack,Input,Button,Container } from '@chakra-ui/react'
import React, { useState } from 'react'

const ForgetPassword = () => {
    const {email,setEmail} =useState()
  return (
    <Container py={'16'} h={'90vh'}>
        <form>
            <Heading children='Forget Password' my={'16'} textTransform={'uppercase'} textAlign={['center','left']} />
            <VStack>
            <Input required value={email} onChange={e => setEmail(e.target.value)}
                placeholder='abc@gmail.com'
                type='email'
                focusBorderColor='yellow.500'
                />
                <Button type='submit'   colorScheme='yellow' w={'full'} >
                    Send Reset Link
                </Button>

            </VStack>
        </form>
    </Container>
  )
}

export default ForgetPassword
