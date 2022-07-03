import {
  Button,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";

type ReservationStatusFormRegisterProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  tanggal: string;
  jam: string;
  onSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
}

function ReservationStatusFormRegister({
  onSubmit,
  onChange,
  tanggal,
  jam,
}: ReservationStatusFormRegisterProps) {

  return (
    <form onSubmit={onSubmit}>
      <FormControl>
        <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
          Tanggal
        </FormLabel>
        <Input
          id="tanggal"
          name="tanggal"
          variant="outline"
          fontSize="sm"
          ms="4px"
          type="date"
          mb="24px"
          size="lg"
          value={tanggal}
          onChange={onChange}
        />
      </FormControl>

      <FormControl mb="24px">
        <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
          Jam
        </FormLabel>
        <Input
          id="jam"
          name="jam"
          variant="outline"
          fontSize="sm"
          ms="4px"
          type="time"
          size="lg"
          min="09:00"
          max="17:00"
          value={jam}
          onChange={onChange}
        />
        <FormHelperText>Jam operasional: <b>09.00 - 17.00 WIB</b></FormHelperText>
      </FormControl>

      <Button
        variant="dark"
        h="45"
        color="white"
        bg="blue.300"
        type="submit"
      >
        Daftar
      </Button>
    </form>
  );
}

export default ReservationStatusFormRegister;
