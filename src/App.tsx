import React from 'react';
import Routers from 'routers';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
	return (
		<ChakraProvider>
			<Routers />
		</ChakraProvider>
	);
}

export default App;
