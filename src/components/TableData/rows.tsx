import { Tr, Td, Text, Button, Select } from '@chakra-ui/react';

const Rows = ({
  data,
  type,
}: {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data: any;
	type: string;
}) => {
  let viewData;

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
                  <Button variant='dark' color='white' bg='blue.200'>
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
      viewData = (
        <>
          {data.map((item, index) => (
            <Tr key={index}>
              {Object.keys(item).map((key, index) => (
                <>
                  <Td key={index}>
                    {key === 'status' ? (
                      <Text
                        bg={
                          item.status.toLowerCase() === 'dalam antrian'
                            ? 'red'
                            : 'green'
                        }
                        w='fit-content'
                        p='4px 8px'
                        color='white'
                        borderRadius='8px'>
                        {item[key]}
                      </Text>
                    ) : (
                      <Text>{item[key]}</Text>
                    )}
                  </Td>
                </>
              ))}
              <Td>
                <Select placeholder='Status' w='75%'>
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

  return (
    <>
      {data.length > 0 || Object.keys(data).length > 0 ? (
        viewData
      ) : (
        <Tr>
          <Td colSpan={4} textAlign='center' h='2rem'>
            <Text fontSize='xl' fontWeight='bold'>
              Data belum tersedia
            </Text>
          </Td>
        </Tr>
      )}
    </>
  );
};

export default Rows;
