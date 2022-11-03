import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { server } from "../index.js";
import {
  Container,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
  Button,
  background,
  RadioGroup,
  Radio,
  
} from "@chakra-ui/react";
import Loader from "./Loader.jsx";
import ErrorComponent from "./ErrorComponent.jsx";
import CoinCard from "./CoinCard.jsx";

function Coins() {
  const [loading, setLoading] = useState(true);

  const [coins, setCoins] = useState([]);

  const [page, setPage] = useState(1);

  const [error, setError] = useState(false);

  const [currency, setCurrency] = useState("inr");

  
  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
  

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  }

  useEffect(() => {

    const fetchCoins = async () => {
     

    
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }

     
    };
    fetchCoins();
  }, [currency,page]);


  if (error) return <ErrorComponent message={"Error While Fetching Coins"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
          <>
            
            <RadioGroup value={"currency"} onChange={setCurrency} p="8">
              
              <HStack spacing={"4"}>
                
                <Radio value={"inr"}>INR</Radio>
                <Radio value={"usd"}>USD</Radio>

                <Radio value={"eur"}>EUR</Radio>


               </HStack>
               
        </RadioGroup>


          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {coins.map((i) => (
              <>
                {<CoinCard 
                  id={i.id}
                key={i.id}
                name={i.name}
                price={i.current_price}
                img={i.image}
                symbol={i.symbol}
                currencySymbol={currencySymbol}
                />
                  
                 }
                
              </>
            ))}
            </HStack>
            

            <HStack>

              <Button
                
                bgColor={"blackAlpha.800"}
            
                onClick={() => {
                  changePage(2)
                }}



              
              >Next Page</Button>

            </HStack>
        </>
      )}
    </Container>
  );
}



 

export default Coins;


