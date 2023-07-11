import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react';

export default function SocialProfileSimple() {
    return (
        <Center py={6}>
            <Stack direction={['column', 'row']} spacing={6}>
                <Box
                    maxW={'380px'}
                    w={'full'}
                    bg={useColorModeValue('#FFD7B4')}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    p={6}
                    textAlign={'center'}>
                    <Avatar
                        size={'xl'}
                        src={
                            'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
                        }
                        alt={'Avatar Alt'}
                        mb={4}
                        pos={'relative'}

                    />
                    <VStack align="center" spacing={2}>
                        <Heading fontSize={'20px'} fontFamily={'body'}>
                            BRYLLE JOHN BARTOLOME
                        </Heading>
                        <Text fontWeight={600} color={'gray.500'} mb={4}>
                            20214096@s.ubaguio.edu
                        </Text>

                        <Button
                            w={'full'}
                            mt={8}
                            bg={useColorModeValue('#151f21', 'gray.900')}
                            color={'white'}
                            rounded={'md'}
                            _hover={{
                                transform: 'translateY(-2px)',
                                boxShadow: 'lg',
                            }}>
                            Message
                        </Button>
                    </VStack>
                </Box>
                <Box
                    maxW={'320px'}
                    w={'full'}
                    bg={useColorModeValue('#FFD7B4')}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    p={6}
                    textAlign={'center'}>
                    <Avatar
                        size={'xl'}
                        src={
                            'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
                        }
                        alt={'Avatar Alt'}
                        mb={4}
                        pos={'relative'}

                    />
                    <VStack align="center" spacing={4}>
                        <Heading fontSize={'2xl'} fontFamily={'body'}>
                            MARCIAL CABAY
                        </Heading>
                        <Text fontWeight={600} color={'gray.500'} mb={4}>
                            20216336@s.ubaguio.edu
                        </Text>

                        <Button
                            w={'full'}
                            mt={8}
                            bg={useColorModeValue('#151f21', 'gray.900')}
                            color={'white'}
                            rounded={'md'}
                            _hover={{
                                transform: 'translateY(-2px)',
                                boxShadow: 'lg',
                            }}>
                            Message
                        </Button>
                    </VStack>
                </Box>
                <Box
                    maxW={'320px'}
                    w={'full'}
                    bg={useColorModeValue('#FFD7B4')}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    p={6}
                    textAlign={'center'}>
                    <Avatar
                        size={'xl'}
                        src={
                            'https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png'
                        }
                        alt={'Avatar Alt'}
                        mb={4}
                        pos={'relative'}

                    />
                    <VStack align="center" spacing={4}>

                        <Heading fontSize={'2xl'} fontFamily={'body'}>
                            VALLEREE JOSEPH
                        </Heading>
                        <Text fontWeight={600} color={'gray.500'} mb={4}>
                            20212590@s.ubaguio.edu
                        </Text>

                        <Button
                            w={'full'}
                            mt={8}
                            bg={useColorModeValue('#151f21', 'gray.900')}
                            color={'white'}
                            rounded={'md'}
                            _hover={{
                                transform: 'translateY(-2px)',
                                boxShadow: 'lg',
                            }}>
                            Message
                        </Button>
                    </VStack>
                </Box>
                <Box
                    maxW={'320px'}
                    w={'full'}
                    bg={useColorModeValue('#FFD7B4')}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    p={6}
                    textAlign={'center'}>
                    <Avatar
                        size={'xl'}
                        src={
                            'https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png'
                        }
                        alt={'Avatar Alt'}
                        mb={4}
                        pos={'relative'}

                    />
                    <VStack align="center" spacing={4}>

                        <Heading fontSize={'2xl'} fontFamily={'body'}>
                            JERIA LUZADA
                        </Heading>
                        <Text fontWeight={600} color={'gray.500'} mb={4}>
                            20213477@s.ubaguio.edu
                        </Text>

                        <Button
                            w={'full'}
                            mt={8}
                            bg={useColorModeValue('#151f21', 'gray.900')}
                            color={'white'}
                            rounded={'md'}
                            _hover={{
                                transform: 'translateY(-2px)',
                                boxShadow: 'lg',
                            }}>
                            Message
                        </Button>
                    </VStack>
                </Box>
                <Box
                    maxW={'320px'}
                    w={'full'}
                    bg={useColorModeValue("#FFD7B4")}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    p={6}
                    textAlign={'center'}>
                    <Avatar
                        size={'xl'}
                        src={
                            'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
                        }
                        alt={'Avatar Alt'}
                        mb={4}
                        pos={'relative'}

                    />
                    <VStack align="center" spacing={2}>

                        <Heading fontSize={'20px'} fontFamily={'body'}>
                            PHILIP KHAIZER PAKIAS
                        </Heading>
                        <Text fontWeight={600} color={'gray.500'} mb={4}>
                            20161816@s.ubaguio.edu
                        </Text>

                        <Button
                            w={'full'}
                            mt={8}
                            bg={useColorModeValue('#151f21', 'gray.900')}
                            color={'white'}
                            rounded={'md'}
                            _hover={{
                                transform: 'translateY(-2px)',
                                boxShadow: 'lg',
                            }}>
                            Message
                        </Button>
                    </VStack>
                </Box>
            </Stack>
        </Center>
    );
}