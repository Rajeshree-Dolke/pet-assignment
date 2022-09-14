import React, { useEffect, useState } from "react";
import {
  Alert,
  AlertIcon,
  Box,
  Spinner,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { getPets } from "./getPets";
import GetIcon from "./GetIcon";

export function PetView() {
  const [pets, setPets] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getPets()
      .then((res) => setPets(res))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <Box marginBottom="4" w="max-content">
        {error.length > 0 && (
          <Alert status="error" borderRadius="lg">
            <AlertIcon />
            {error}
          </Alert>
        )}
      </Box>
      <Box
        borderWidth="2px"
        borderRadius="lg"
        overflow="hidden"
        textAlign="center"
      >
        {isLoading ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            textAlign={"center"}
          />
        ) : (
          <TableContainer>
            <Table variant="simple">
              <TableCaption>Pets</TableCaption>
              <Thead>
                <Tr>
                  <Th>Pet's name</Th>
                  <Th>Type</Th>
                  <Th>Breed</Th>
                  <Th>Weight(in kgs)</Th>
                  <Th>Height(in inches)</Th>
                </Tr>
              </Thead>
              <Tbody>
                {pets.map((pet) => {
                  return (
                    <>
                      <Tr key={pet.id}>
                        <Td>{pet.name}</Td>
                        <Td w="max-content" alignItems="baseline">
                          <Box display={"flex"}>
                            <Box mr="4">{pet.type}</Box>{" "}
                            <GetIcon type={pet.type} />
                          </Box>
                        </Td>
                        <Td>{pet.breed}</Td>
                        {pet.weight ? <Td>{pet.weight} kg(s)</Td> : <Td>-</Td>}
                        {pet.height ? (
                          <Td>{pet.height} inch(es)</Td>
                        ) : (
                          <Td>-</Td>
                        )}
                      </Tr>
                    </>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </>
  );
}
