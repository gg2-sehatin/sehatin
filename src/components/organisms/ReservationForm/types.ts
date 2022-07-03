export type ReservationFormProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  tanggal: string;
  jam: string;
  onSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
}