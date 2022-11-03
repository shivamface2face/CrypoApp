import React from 'react'
import {
  Badge,
  Box,
  Button,
  Container,
  HStack,
  Image,
  Progress,
  Radio,
  RadioGroup,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  VStack,
} from "@chakra-ui/react";


import axios from "axios";
import  { useEffect, useState } from "react";

function CoinDetails() {

  const [loading, setLoading] = useState(true);

  const [exchanges, setExchanges] = useState([]);

  const [error, setError] = useState(false);


  return (
    <Container maxW={"container.xl"}>

    </Container>
  )

}

export default CoinDetails;