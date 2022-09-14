
import React from 'react'
import {
  BrowserRouter as Router,
  Link as ReachLink,
  Route,
  Routes,
} from "react-router-dom";

import AddPetForm from "../Pet/AddPetForm";
import { Box, ChakraProvider, Link } from '@chakra-ui/react'
import './App.css';
import { PetView } from '../Pet/PetView';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box bg='cyan.500' w='100%' h="16" color='white' >
          <Box display="flex" h="100%" float="right" fontSize={"large"}
            alignItems="center" marginRight="16" justifyContent="space-around" w="144px">
            <Link to='/pets' as={ReachLink}>
              Pets
            </Link>
            <Link to='/' as={ReachLink}>Add</Link>
          </Box>
        </Box>
       
        <Box p={12} m={12}>
          <Routes>
            <Route path='/pets' element={<PetView />}></Route>
            <Route path='/' exact element={<AddPetForm />}></Route>
          </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
