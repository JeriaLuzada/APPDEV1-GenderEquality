import { Box, Heading, Text } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';

export default function Success() {
    return (
        <Box textAlign="center" py={10} px={6} bg="#FEC088" className='success'>
            <InfoOutlineIcon boxSize={'50px'} color={'green.500'} />
            <Heading as="h2" size="xl" mt={6} mb={2}>
                References
            </Heading>
            <Box textAlign="left" py={30} px={50}>


                <Text>
                    [1] UNESCO. (2018). International technical guidance on sexuality education: An evidence-informed approach.
                </Text>
                <Text>
                    [2] Catalyst. (n.d.). Men Advocating Real Change (MARC).
                </Text>
                <Text>
                    [3] United Nations. (2019). Gender Equality in Education: A Statistical Picture.

                </Text>
                <Text>
                    [4] International Labour Organization. (2018). Global Wage Report 2018/19: What Lies Behind Gender Pay Gaps?
                </Text>
                <Text>
                    [5] World Bank. (2021). Women, Business, and the Law.
                </Text>
                <Text>
                    [6] McKinsey & Company. (2020). Diversity wins: How inclusion matters.

                </Text>
                <Text>
                    [7] United Nations Women. (n.d.). Ending violence against women.
                </Text>
                <Text>
                    [8] United Nations Entity for Gender Equality and the Empowerment of Women. (2013). Making Women's Work Visible: Gender-responsive Governance and Budgeting.
                </Text>
                <Text>
                    [9] International Labour Organization. (2018). Work-family balance policies and practice: Integration of the formal and informal sectors.
                </Text>
                <Text>
                    [10] Geena Davis Institute on Gender in Media. (n.d.). Research.
                </Text>
                <Text>
                    [11] United Nations Women. (n.d.). Promoting positive masculinities.
                </Text>
                <Text>
                    [12] Catalyst. (n.d.). Gender Non-Conformity.
                </Text>
                <Text>
                    [13] Promundo-US & UN Women. (2017). The Man Box: A study on being a young man in the US, UK, and Mexico.
                </Text>
                <Text>
                    [14] United Nations Population Fund. (2021). Promoting Gender Equality Among Young People in Eastern Europe and Central Asia.
                </Text>
                <Text>
                    [15] The Lancet. (2019). Gender equity in the health workforce: Analysis of 104 countries. The Lancet, 393(10189), 1039-1049. doi:10.1016/S0140-6736(18)33219-X
                </Text>
                <Text>
                    [16] World Health Organization: WHO. (2019). 10 key issues in ensuring gender equity in the global health workforce. www.who.int. https://www.who.int/news-room/feature-stories/detail/10-key-issues-in-ensuring-gender-equity-in-the-global-health-workforce
                </Text>
                <Text>
                    [17] Global Issues: Gender Equality and Women’s Empowerment. (n.d.). https://www.peacecorps.gov/educators/resources/global-issues-gender-equality-and-womens-empowerment/#18. United Nations. (n.d.). Universal Declaration of Human Rights | United Nations. https://www.un.org/en/about-us/universal-declaration-of-human-rights
                </Text>
                <Text>
                    [18] Laws and policies. (n.d.). UN Women – Headquarters. https://www.unwomen.org/en/how-we-work/gender-parity-in-the-united-nations/laws-and-policies
                </Text>
                <Text>
                    [19] United Nations. (2023, June 15). Advancing Gender Equality: UN launches new initiative. UN News. Retrieved from https://news.un.org/en/news/topic/womenhttps://www.freepik.com/search?format=search&query=gender%20equality
                </Text>
                <Text>
                    [20] World Health Organization. (n.d.). Gender equity in the health workforce: Analysis of 104 countries. Retrieved from https://www.who.int/hrh/resources/gender_equity-health_workforce_analysis/en/
                </Text>
                <Text>
                    [21] World Health Organization. (2021). Women in health and care. Retrieved from https://www.who.int/news-room/feature-stories/detail/women-in-health-and-care
                </Text>
                <Text>
                    [22] World Health Organization. (2021). Violence against women in the health sector. Retrieved from https://www.who.int/news-room/fact-sheets/detail/violence-against-women-in-the-health-sector
                </Text>
                <Text>
                    [23] United Nations Population Fund. (2020). Gender equality in the health workforce. Retrieved from https://www.unfpa.org/resources/gender-equality-health-workforce
                </Text>
            </Box>

        </Box>
    );
}