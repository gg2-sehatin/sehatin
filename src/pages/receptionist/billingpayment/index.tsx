import { Table, TableContainer, Tbody, Text, Thead } from "@chakra-ui/react";

import SidebarWithHeader from "components/Sidebar";
import Baris from "components/BillingPayment/Baris";
import Headers from "components/BillingPayment/Headers";

import { BILLING_TYPE_PAYMENT } from "./types/billing";
import BillingPaymentData from "types/BillingPaymentData";
import billingPaymentData from "utils/constants/billingPaymentData";

const BillingPayment = () => {
  const queueDone: Array<BillingPaymentData> = billingPaymentData.filter(
    (item) => item.status.toLowerCase() === "selesai"
  );

  const queueWaiting: Array<BillingPaymentData> = billingPaymentData.filter(
    (item) => item.status.toLowerCase() === "menunggu pembayaran"
  );

  return (
    <>
      <SidebarWithHeader>
        <Text fontSize="xl" fontWeight="bold" mb="8px">
          Daftar Antrian Pasien Yang Menunggu Pembayaran
        </Text>
        <TableContainer overflowX="auto" mb="2rem">
          <Table variant="simple">
            <Thead>
              <Headers headers={["No", "Nama", "Status", "Aksi"]} />
            </Thead>
            <Tbody>
              <Baris data={queueWaiting} type={BILLING_TYPE_PAYMENT} />
            </Tbody>
          </Table>
        </TableContainer>
        <Text fontSize="xl" fontWeight="bold" mb="8px">
          Daftar Antrean Pasien yang Sudah Selesai
        </Text>
        <TableContainer overflowX="auto" mb="2rem">
          <Table variant="simple">
            <Thead>
              <Headers headers={["No", "Nama", "Status", "Aksi"]} />
            </Thead>
            <Tbody>
              <Baris data={queueDone} type={BILLING_TYPE_PAYMENT} />
            </Tbody>
          </Table>
        </TableContainer>
      </SidebarWithHeader>
    </>
  );
};

export default BillingPayment;
