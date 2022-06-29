import { Tr, Td, Text, Select, Button } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { MedicineStatus } from "./types";

const renderMedicineStatus = (status: MedicineStatus) => {
  const statusBg =
    status.toLowerCase() === "dalam antrian" ? "#F94C66" : "#53BF9D";

  return (
    <Text
      bg={statusBg}
      w="fit-content"
      p="4px 8px"
      color="white"
      borderRadius="8px"
    >
      {status}
    </Text>
  );
};


const Rows = ({
  data,
  type
}: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any;
    type: "emr" | "medicine"
  }) => {
  let viewData = <></>;

  if (!data || data?.length === 0) {
    return (
      <Tr>
        <Td colSpan={4} textAlign="center" h="2rem">
          <Text fontSize="xl" fontWeight="bold">
            Data belum tersedia
          </Text>
        </Td>
      </Tr>
    );
  }

  if (Array.isArray(data)) {
    if (type === 'emr') {
      viewData = (
        <>
          {data.map((item, index) => (
            <Tr key={index}>
              <Td key={index}>
                <Text>{index+1}</Text>
              </Td>
              <Td key={index}>
                <Text>{item.name}</Text>
              </Td>
              <Td key={index}>
                <Text>{item.examinationDate}</Text>
              </Td>
              <Td>
                <Link to={`/emr-history/${item.id}`}>
                  <Button variant='dark' color='white' bg='blue.400'>
                    Detail
                  </Button>
                </Link>
              </Td>
            </Tr>
          ))}
        </>
      );
    }

    if (type === "medicine") {
      viewData = (
        <>
          {data.map((item, index) => (
            <Tr key={index}>
              <Td key={index}>
                <Text>{item.id}</Text>
              </Td>
              <Td key={index}>
                <Text>{item.name}</Text>
              </Td>
              <Td key={index}>
                <Text>{renderMedicineStatus(item.status)}</Text>
              </Td>
              <Td>
                <Select placeholder='Status' w='80%'>
                  <option
                    value='Dalam Antrian'
                    selected={item.status.toLowerCase() == 'dalam antrian'}>
                    Dalam Antrian
                  </option>
                  <option
                    value='Selesai'
                    selected={item.status.toLowerCase() == 'selesai'}>
                    Selesai
                  </option>
                </Select>
              </Td>
            </Tr>
          ))}
        </>
      );
    }
  }

  return viewData;
};

export default Rows;
