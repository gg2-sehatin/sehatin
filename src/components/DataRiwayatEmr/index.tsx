// import chakra
import { Button, Tr, Td, Text } from '@chakra-ui/react';

type DataRiwayatEmrProps = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data: Array<any>;
};

const DataRiwayatEmr = ({ data }: DataRiwayatEmrProps) => {
  return (
    <>
      {data.length > 0 ? (
        data.map((item, index) => (
          <Tr key={index}>
            <Td>{index + 1}</Td>
            <Td>{item['Nama']}</Td>
            <Td>{item['Tanggal Pemeriksaan']}</Td>
            <Td>
              <a href={`/emr-history/${item.id}`}>
                <Button variant='dark' color='white' bg='blue.200'>
                  Detail
                </Button>
              </a>
            </Td>
          </Tr>
        ))
      ) : (
        <Tr>
          <Td colSpan={4} textAlign='center' h='2rem'>
            <Text fontSize='xl' fontWeight='bold'>
              Belum ada riwayat EMR
            </Text>
          </Td>
        </Tr>
      )}
    </>
  );
};

export default DataRiwayatEmr;
