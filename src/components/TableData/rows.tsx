import { Tr, Td, Text, Button, Select } from '@chakra-ui/react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Rows = ({ data, type }: { data: any; type: 'emr' | 'medicine' }) => {
  let viewData = <></>;

  if (!data || data?.length === 0) {
    return (
      <Tr>
        <Td colSpan={4} textAlign='center' h='2rem'>
          <Text fontSize='xl' fontWeight='bold'>
            Data belum tersedia
          </Text>
        </Td>
      </Tr>
    );
  }

  if (typeof data === 'object') {
    viewData = (
      <>
        {Object.keys(data).map((key, index) => (
          <Tr key={index}>
            <Td>{index + 1}</Td>
            <Td>{key}</Td>
            <Td>{data[key]}</Td>
          </Tr>
        ))}
      </>
    );
  }

  if (Array.isArray(data)) {
    if (type === 'emr') {
      viewData = (
        <>
          {data.map((item, index) => (
            <Tr key={index}>
              {Object.keys(item).map((key, index) => (
                <>
                  <Td key={index}>
                    <Text>{item[key]}</Text>
                  </Td>
                </>
              ))}
              <Td>
                <a href={`/emr-history/${item.id}`}>
                  <Button variant='dark' color='white' bg='blue.400'>
                    Detail
                  </Button>
                </a>
              </Td>
            </Tr>
          ))}
        </>
      );
    }

    if (type === 'medicine') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const getMedicineData = (key: string, item: any) => {
        if(key==='status'){
          const statusBg = item.status.toLowerCase() === 'dalam antrian' ? '#F94C66' : '#53BF9D';

          return (
            <Text
              bg={statusBg}
              w='fit-content'
              p='4px 8px'
              color='white'
              borderRadius='8px'
            >
              {item[key]}
            </Text>
          )
        }

        return (
          <Text>
            {item[key]}
          </Text>
        );
      }

      viewData = (
        <>
          {data.map((item, index) => (
            <Tr key={index}>
              {Object.keys(item).map((key, index) => (
                <Td key={index}>
                  {getMedicineData(key, item)}
                </Td>
              ))}
              <Td>
                <Select placeholder='Status' w='80%'>
                  <option
                    value='antri'
                    selected={item.status.toLowerCase() == 'dalam antrian'}>
                    Dalam Antrian
                  </option>
                  <option
                    value='selesai'
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
