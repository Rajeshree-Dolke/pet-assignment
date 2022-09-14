import {
  Alert,
  AlertIcon,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPet } from "./addPet";

const options = [
  {
    name: "Dog",
    value: "dog",
  },
  {
    name: "Cat",
    value: "cat",
  },
  {
    name: "Pig",
    value: "pig",
  },
];

export default function AddPetForm() {
  const navigate = useNavigate();
  const [petsName, setPetsName] = useState("");
  const [petType, setPetType] = useState("");
  const [breed, setBreed] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [isNameValid, setIsNameValid] = useState(false);
  const [isTypeValid, setIsTypeValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  function handleChange(e, setFunc) {
    setFunc(e.target.value);
  }

  useEffect(() => {
    return function clearForm() {
      setIsNameValid(false);
      setIsTypeValid(false);
      setPetsName("");
      setPetType("");
      setBreed("");
      setWeight("");
      setHeight("");
    };
  }, []);

  function handleAddPet() {
    setIsLoading(true);
    const newPet = {
      name: petsName,
      type: petType,
      breed: breed,
      weight,
      height,
    };
    addPet(newPet)
      .then(() => navigate("/pets"))
      .catch((error) => setErr(error.message))
      .finally(() => setIsLoading(false));
  }

  return (
    <Box w="512px" m="auto">
      <Box marginBottom="4" w="max-content">
        {err.length > 0 && (
          <Alert status="error" borderRadius="lg">
            <AlertIcon />
            {err}
          </Alert>
        )}
      </Box>
      <Box borderWidth="2px" borderRadius="lg" p="12" m="auto" maxW="2xl">
        <Stack spacing={3}>
          <FormControl isRequired>
            <FormLabel>Pet's name</FormLabel>
            <Input
              value={petsName}
              onChange={(e) => {
                e.target.value.length > 0
                  ? setIsNameValid(true)
                  : setIsNameValid(false);
                handleChange(e, setPetsName);
              }}
            />
          </FormControl>
          <Box display={"flex"} justifyContent="space-between">
            <FormControl isRequired w="48%">
              <FormLabel>Type</FormLabel>
              <Select
                onChange={(e) => {
                  e.target.value.length > 0
                    ? setIsTypeValid(true)
                    : setIsTypeValid(false);
                  handleChange(e, setPetType);
                }}
                placeholder="Select a type"
                value={petType}
              >
                {options.map((opt) => {
                  return (
                    <>
                      <option value={opt.value} key={opt.value}>
                        {opt.name}
                      </option>
                    </>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl w="48%">
              <FormLabel>Breed</FormLabel>
              <Input
                value={breed}
                onChange={(e) => handleChange(e, setBreed)}
              />
            </FormControl>
          </Box>
          <Box
            display={"flex"}
            justifyContent="space-between"
            marginBottom="56"
          >
            <FormControl w="48%">
              <FormLabel>Weight in kg(s)</FormLabel>
              <Input
                value={weight}
                onChange={(e) => handleChange(e, setWeight)}
              />
            </FormControl>
            <FormControl w="48%">
              <FormLabel>Height in inch(es)</FormLabel>
              <Input
                value={height}
                onChange={(e) => handleChange(e, setHeight)}
              />
            </FormControl>
          </Box>
          <FormControl>
            <Button
              marginTop="12px"
              colorScheme="cyan"
              color="white"
              onClick={handleAddPet}
              disabled={!(isNameValid && isTypeValid)}
              isLoading={isLoading}
              w="100%"
            >
              Add pet
            </Button>
          </FormControl>
        </Stack>
      </Box>
    </Box>
  );
}
