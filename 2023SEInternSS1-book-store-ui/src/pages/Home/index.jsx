import React from 'react';
import Card from '../../components/Home/Card'
import { Box, Container, Image, Text, Flex, Icon, HStack} from '@chakra-ui/react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import HomeViewModel from './HomeViewModel';
import { COLOR } from '../../constant';
import { BiCheckDouble, BiCartAdd } from "react-icons/bi";
import { TbCoin } from "react-icons/tb"

const Home = () => {
	const { books } = HomeViewModel()
	const { booksBestSeller } = HomeViewModel()
	const { booksTopNew} = HomeViewModel()

	return (
		<Box bg={'gray.100'} minHeight = {"280vh"} pb={"100px"}>
			<Box>
				<Image src='https://res.cloudinary.com/duu07kasy/image/upload/v1679903519/Hi_Webcome_to_BookFast_1_lksdgc.png' w={'100%'}/>
			</Box>
			<Container mt={'25px'} maxW={"container.xl"}>
				<Box  marginTop={"25px"} display={"flex"} gap={"10px"} justifyContent={'center'}>
					<Text fontSize="3xl" fontWeight={"bold"} color={'red'}> Top 5 best seller </Text>
					<Icon as={TbCoin} color={"orange.400"} w={"40px"} h={"50px"}/>
				</Box>
				<Box mb="50px" display={"flex"} flexWrap="wrap" gap={"25px"} mt = "20px">
				{booksBestSeller?.map(book => {
				return(
				<Card 
					productId={book.id}
					productName={book.title}  
					imageUrl = {book.imageUrl} 
					productPrice = {book.price} 
					sold = {book.sold}
					quantities = {book.quantity}
				/>
				)
				})}
				</Box>
			</Container>
			<Box>
				<Image src='https://res.cloudinary.com/duu07kasy/image/upload/v1679556653/There_are_many_new_book_models_1_zpgwuz.png' w={'100%'}/>
			</Box>
			<Container
				mt={"25px"}
				maxW={"container.xl"}
			>
				<Box display={"flex"} gap={"10px"} justifyContent={'center'}>
					<Text fontSize="3xl" fontWeight={"bold"} color={COLOR} > New Books</Text>
					<Icon as={BiCheckDouble} color={"green"} w={"50px"} h={"46px"}/>					
				</Box>
				<Box mb="50px" display={"flex"} flexWrap="wrap" gap={"25px"} mt = "20px">
				{booksTopNew?.map(book => {
				return(
				<Card 
					productId={book.id}
					productName={book.title}  
					imageUrl = {book.imageUrl} 
					productPrice = {book.price} 
					sold = {book.sold}
					quantities = {book.quantity}
				/>
				)
				})}
				</Box>
			</Container>
			<Box>
				<Image src='https://res.cloudinary.com/duu07kasy/image/upload/v1679561195/Our_system_provide_cdd6uw.png' w={'100%'}/>
			</Box>
			<Container
				mt={"50px"}
				maxW={"container.xl"}
			>
				<Box mb="100px" display={"flex"} flexWrap="wrap" gap={"25px"}>
					{books?.map(book => {
					return(
					<Card 
						productId={book.id}
						productName={book.title}  
						imageUrl = {book.imageUrl} 
						productPrice = {book.price} 
						sold = {book.sold}
						quantities = {book.quantity}
					/>
					)
				})}
				</Box>
			</Container>
    	</Box>
	);
};

export default Home;