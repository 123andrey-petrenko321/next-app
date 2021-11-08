import React from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import "@fontsource/poppins"
import "@fontsource/lato"

const App = ({Component,pageProps}) => {
    return (
        <ChakraProvider>
            <Component {...pageProps}/>
        </ChakraProvider>
        
    );
};

export default App;