// import chakra
import { Tr, Td } from '@chakra-ui/react';

type TabelDetailEmrProps = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data: Record<string, any>;
};

const TabelDetailEmr = ({ data }: TabelDetailEmrProps) => {
  return (
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
};

export default TabelDetailEmr;
