import {
  Stack,
  Button,
} from '@chakra-ui/react';

import { FaPlus } from 'react-icons/fa';
// import React from 'react'

export default function pelayanan() {
  return (
    <>
      <Stack spacing={4} direction='row' align='center'>
        <Button leftIcon={<FaPlus />} colorScheme='teal' variant='solid'>
          Tambah Pelayanan
        </Button>
      </Stack>
    </>
  )
}
