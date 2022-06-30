import { Tr, Td, Text, Button, Select } from "@chakra-ui/react";

import { BillingStatusType } from "./types";
import BillingPaymentData from "types/BillingPaymentData";

const renderBillingStatus = (status: BillingStatusType) => {
  const statusBg =
    status.toLowerCase() === "menunggu pembayaran" ? "#F94C66" : "#53BF9D";

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

const Row = ({
  data,
  type,
}: {
  data: Array<BillingPaymentData>;
  type: "emr" | "billing";
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
    if (type === "emr") {
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
                <Text>{renderBillingStatus(item.status)}</Text>
              </Td>
              <Td>
                <a href={`/emr-history/${item.id}`}>
                  <Button variant="dark" color="white" bg="blue.400">
                    Detail
                  </Button>
                </a>
              </Td>
            </Tr>
          ))}
        </>
      );
    }

    if (type === "billing") {
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
                <Text>{renderBillingStatus(item.status)}</Text>
              </Td>
              <Td>
                <Select placeholder="Status" w="80%">
                  <option
                    value="menunggu pembayaran"
                    selected={
                      item.status.toLowerCase() == "menunggu pembayaran"
                    }
                  >
                    Menunggu Pembayaran
                  </option>
                  <option
                    value="selesai"
                    selected={item.status.toLowerCase() == "selesai"}
                  >
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

export default Row;
