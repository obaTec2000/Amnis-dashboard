import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import Usa from "assets/img/dashboards/usa.png";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React from "react";
import { WiHumidity } from "react-icons/wi";
import { FaTemperatureHigh } from "react-icons/fa";
import { MdOutlineCo2 } from "react-icons/md";
import ComplexTable from "views/admin/default/components/ComplexTable";
import TotalSpent from "views/admin/default/components/TotalSpent";
import { columnsDataComplex } from "views/admin/default/variables/columnsData";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4, "2xl": 4 }}
        gap="20px"
        mb="20px"
      >
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon
                  w="32px"
                  h="32px"
                  as={FaTemperatureHigh}
                  color={brandColor}
                />
              }
            />
          }
          name="Temperature"
          value="$350.4"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={WiHumidity} color={brandColor} />
              }
            />
          }
          name="Humidity"
          value="$642.39"
        />
        <MiniStatistics
          growth="+23%"
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={WiHumidity} color={brandColor} />
              }
            />
          }
          name="Benzene"
          value="$642.39"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdOutlineCo2
                } color={brandColor} />
              }
            />
          }
          name="CarbonDioxide"
          value="$642.39"
        />
      </SimpleGrid>

      <div>
        <TotalSpent />
      </div>

      <ComplexTable
        columnsData={columnsDataComplex}
        tableData={tableDataComplex}
      />
    </Box>
  );
}
