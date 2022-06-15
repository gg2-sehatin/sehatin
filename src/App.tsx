import { ChakraProvider } from '@chakra-ui/react';
import Routers from 'routers';

import './App.css';

function App() {
  return (
    <ChakraProvider>
      <Routers />
    </ChakraProvider>
  )
  ;
}

export default App;
