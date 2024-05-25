import { Box, Container, VStack, Text, Image, Grid, GridItem, Heading, Link, Flex, Spacer, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const products = [
  { id: 1, name: "Smartphone", price: "$699", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Laptop", price: "$999", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Smartwatch", price: "$199", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Headphones", price: "$149", image: "https://via.placeholder.com/150" },
];

const Index = () => {
  return (
    <Box>
      <Box as="nav" bg="blue.800" color="white" p={4}>
        <Flex maxW="container.xl" mx="auto" align="center">
          <Heading size="md">ElectroShop</Heading>
          <Spacer />
          <Link href="#" p={2}>Home</Link>
          <Link href="#" p={2}>Products</Link>
          <Link href="#" p={2}>About Us</Link>
          <Link href="#" p={2}>Contact</Link>
        </Flex>
      </Box>

      <Box as="section" bg="gray.100" py={10}>
        <Container maxW="container.xl">
          <Flex direction={{ base: "column", md: "row" }} align="center">
            <Box flex="1">
              <Heading as="h2" size="xl" mb={4}>Featured Product</Heading>
              <Text fontSize="lg" mb={6}>Check out our latest and greatest smartphone with cutting-edge features.</Text>
              <Button colorScheme="blue">Shop Now</Button>
            </Box>
            <Box flex="1" mt={{ base: 6, md: 0 }}>
              <Image src="https://via.placeholder.com/300" alt="Featured Product" />
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box as="section" py={10}>
        <Container maxW="container.xl">
          <Heading as="h3" size="lg" mb={6}>Our Products</Heading>
          <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6}>
            {products.map(product => (
              <GridItem key={product.id} bg="white" p={4} borderRadius="md" boxShadow="md">
                <Image src={product.image} alt={product.name} mb={4} />
                <Text fontWeight="bold">{product.name}</Text>
                <Text>{product.price}</Text>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box as="footer" bg="blue.800" color="white" py={6}>
        <Container maxW="container.xl">
          <Flex direction={{ base: "column", md: "row" }} align="center">
            <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
            <Spacer />
            <Link href="#" p={2}><FaFacebook /></Link>
            <Link href="#" p={2}><FaTwitter /></Link>
            <Link href="#" p={2}><FaInstagram /></Link>
          </Flex>
          <Flex direction={{ base: "column", md: "row" }} align="center" mt={4}>
            <Link href="#" p={2}>Terms of Service</Link>
            <Link href="#" p={2}>Privacy Policy</Link>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;