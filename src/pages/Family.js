import { Grid, Box, useBreakpointValue, Flex, Skeleton, Link } from "@chakra-ui/react"
import { Cards, FamilyHead, BlueAlert } from '../components'
import families from "../family.json"

const Family = () => {
    const responsiveGrid = useBreakpointValue({ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" })
    /* const responsiveHeight = useBreakpointValue({ base: "1500px", sm: "1000px" }) */

    return (
        <Box marginBottom="-40px" width="100%" h="auto" bg="gray.50" paddingY={7}>
            <Flex flexDir="column" alignItems="center" justifyContent="center" w="100%">
            <FamilyHead />
            <Grid h="auto" templateColumns={responsiveGrid} gap="30px">
                {families.map((family) => (
                    <Skeleton isLoaded>
                        <Link key={family.id} href={family.iglink}>
                            <Cards 
                                img={family.foto}
                                name={family.nama}
                                domisili={family.domisili}
                            />
                        </Link>
                    </Skeleton>
                ))}
            </Grid>
            </Flex>
        </Box>
    )
}

export default Family
