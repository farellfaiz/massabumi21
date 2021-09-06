import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Grid, Box, useBreakpointValue, Flex, Skeleton, Link, Input } from "@chakra-ui/react"
import { Cards, FamilyHead, BlueAlert } from '../components'
import families from "../family.json"


const Search = () => {
    const responsiveGrid = useBreakpointValue({ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" })
    /* const responsiveHeight = useBreakpointValue({ base: "1500px", sm: "1000px" }) */

    const [allData,setAllData] = useState([]);
    const [filteredData,setFilteredData] = useState(allData);

    const handleSearch = (event) =>{
        let value = event.target.value;
        let result = [];
        console.log(value);
      
        result = allData.filter((data) => {
          return data.nama.search(value) != -1;
        });
      
        setFilteredData(result);
      }

      useEffect(() => {
        axios('https://api.jsonbin.io/b/612f65683dc0634121a7bb93')
        .then(response => {
          console.log(response.data);
          setAllData(response.data);
          setFilteredData(response.data);
        })
        .catch(error => {
          console.log('Error getting fake data: ' + error);
        })
      }, []);

    return (
        <Box marginBottom="-40px" width="100%" h="auto" bg="gray.50" paddingY={7}>
            <Flex flexDir="column" alignItems="center" justifyContent="center" w="100%">
            <FamilyHead />

            <Input
                placeholder="Tulis nama atau domisili"
                onChange={(event) =>handleSearch(event)} 
                bgColor="white"
                marginY="20px"
                width="500px"
                style={{ textTransform:'capitalize' }}
            />

            <Grid h="auto" templateColumns={responsiveGrid} gap="30px">
                {/* {families.map((family) => (
                    <Skeleton isLoaded>
                        <Link key={family.id} href={family.iglink}>
                            <Cards 
                                img={family.foto}
                                name={family.nama}
                                domisili={family.domisili}
                            />
                        </Link>
                    </Skeleton>
                ))} */}

                {filteredData.map((value,index)=>{
                    return(
                        <Skeleton isLoaded>
                        <Link key={value.id} href={value.iglink}>
                            <Cards 
                                img={value.foto}
                                name={value.nama}
                                domisili={value.domisili}
                            />
                        </Link>
                        </Skeleton> 
                    )
                })}
            </Grid>
            </Flex>
        </Box>
    )
}

export default Search