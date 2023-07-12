import { Avatar, Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { Icon, SimpleGrid, Flex } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text >{text}</Text>
    </Stack>
  );
};

export default function WithLargeQuote() {
  return (
    <Stack
    className='success'
      bg="#FEC088"
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <Text
        fontFamily="Roboto"
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign="center"
        maxW="3xl"
        
        >
        Gender equality is a fundamental human right, but women face challenges like limited economic participation, unequal access to education, health and safety risks, and under representation in politics.  Promoting gender equality is crucial for international development goals, empowering women and girls, and addressing health and safety concerns.
      </Text>

      <Box p={8}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} fontFamily="Roboto">
          <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={'Underrepresentation of Women in Senior Roles:'}
            text={
              "Despite women making up 70% of the health workforce, only 25% hold senior positions. This disparity limits women's ability to influence decision-making and policy development in the healthcare sector, hindering progress towards gender equality. "
            }
          />
          <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={'Indication of Wider Gender Inequities:' }
            text={
              "Gender inequity within the health workforce reflects broader systemic issues related to gender inequality in society. It highlights the need to address underlying social norms, biases, and discriminatory practices that limit women's opportunities for advancement in various professional fields."
            }
          />
          <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={'Impact of Gender Stereotypes:'}
            text={
              "Gender norms and stereotypes associated with certain professions can influence the roles women occupy within the health sector. This limits their access to higher-paying and more influential positions, perpetuating the gender pay gap and hindering career advancement. "
            }
          />
          <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={'Bias, Discrimination, and Harassment:'}
            text={
              "Women in the health workforce often face bias, discrimination, and sexual harassment, which can create hostile work environments and hinder their professional growth. Addressing these issues is crucial for promoting gender equality and ensuring a safe and supportive work environment for all healthcare workers. "
            }
          />
          <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={'Threat to Health Delivery: '}
            text={
              "Gender inequity within the health workforce poses a threat to the delivery of quality healthcare. When a significant portion of the workforce is marginalized or excluded from decision-making processes, it limits the perspectives and expertise needed to address diverse healthcare needs effectively."
            }
          />
          <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={'Need for Active Intervention:'}
            text={
              "Leaving the gender balance in the health workforce to naturally equalize over time is not a viable option. Active intervention through policies, strategies, and targeted initiatives is required to address gender inequities and promote equal opportunities for all healthcare professionals."
            }
          />
          <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={'Impact on Sustainable Development Goals (SDGs):'}
            text={
              "Addressing gender inequities in the health and social workforce, which represents one of the largest sectors employing women, can have a significant impact on achieving the Sustainable Development Goals (SDGs). Promoting gender equality in this sector contributes to multiple SDGs, including SDG 3 (Good Health and Well-being) and SDG 5 (Gender Equality)."
            }
          />
          <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={'Shift in Research Focus:'}
            text={
              "Research efforts in the global health and social workforce should prioritize studying and understanding the underlying causes of gender inequities. This includes exploring factors such as systemic biases, gender norms, and organizational barriers to develop evidence-based strategies for promoting gender equality in the workforce. "
            }
          />
          <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={'Unpaid and Under-Recognized Work: '}
            text={
              "Women in the health workforce often perform a significant amount of unpaid and under-recognized work, such as caregiving and community health services. This type of work is undervalued and not adequately acknowledged, contributing to the gender pay gap and perpetuating gender inequities within the healthcare sector. Recognizing, valuing, and providing fair compensation for all types of work performed by women is crucial for achieving gender equality in the health workforce."
            }
          />
        </SimpleGrid>
      </Box>
    </Stack>
  );
}
