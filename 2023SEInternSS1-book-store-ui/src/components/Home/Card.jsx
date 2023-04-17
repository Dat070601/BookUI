import { Box, Image, Text, Tooltip} from '@chakra-ui/react'
import React from 'react'
import { COLOR } from '../../constant'
import { Link, useNavigate } from 'react-router-dom'

const Card = ({ imageUrl, productName, productPrice, productId, sold, quantities, vendorName, variantQuantities}) => {

    const navigate = useNavigate()

    return (
        <Tooltip 
            label={<div>
                <p>Name: {productName}</p>
                <p>PriceSale: {Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(productPrice)} </p>
                <p>Quantities: {quantities} products</p>
                <p>Sold: {sold} products</p>
                <p>Vendor: {vendorName}</p>
                <p>Number of Variant: {variantQuantities}</p>
            </div>} 
            placement='right' hasArrow>
            <Box onClick={() => {
                navigate(`/product/${productId}`)
            }} _hover={{
            boxShadow: `0px 20px 30px gray`,
            transition: "0.2s",
            bg : "gray.100",
            border: "1px solid gray"
            }} width={'200px'} height={'310px'} bg={'white'}>
                <Box width='200px' display={'flex'} justifyContent={'center'} mt={"5px"}>
                    <Image src={imageUrl} height='215px' width='185px' />
                </Box>
                <Box marginLeft={'5px'}>
                    <Text ml="5px" mt="5px" color={"black"} fontSize = {'20px'} fontWeight='semibold' as='h4' lineHeight='tight'noOfLines={1} _hover={{
                        color : "tomato"
                    }}>
                        <Link to={`/product/${productId}`} >{productName}</Link>
                    </Text>
                    <Box ml="5px" mt="20px" mb="10px" display={'flex'} gap={'20px'} marginTop={'1px'}>
                        <Text mt= "13px"fontWeight={"medium"} color={"tomato"} fontSize='20px'>{Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(productPrice)} </Text>
                        <Box>
                            <Text fontWeight={"light"} fontSize='13px'>Sold: {Intl.NumberFormat('de-DE').format(sold)}</Text>
                            <Text fontWeight={"light"} fontSize={'13px'}>Quantities: {Intl.NumberFormat('de-DE').format(quantities)}</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Tooltip>
    )
}

export default Card
