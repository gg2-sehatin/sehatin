import { FiHome, FiBook } from "react-icons/fi";

export const DoctorLinks = [
  { name: "Beranda", icon: FiHome, href: "/" },
  { name: "Daftar EMR", icon: FiBook, href: "/emr-history" },
  { name: "Tambah EMR", icon: FiHome, href: "/add-emr" },
];

export const PatientLinks = [
  { name: "Beranda", icon: FiHome, href: "/" },
  { name: "Form Reservasi", icon: FiHome, href: "/form-reservasi" },
  { name: "Riwayat EMR", icon: FiHome, href: "/my-emr" },
];

export const AdminLinks = [
  { name: "Beranda", icon: FiHome, href: "/" },
  { name: "Obat", icon: FiHome, href: "/medicine" },
  { name: "Jadwal", icon: FiHome, href: "/schedule" },
  { name: "Pengguna Aplikasi", icon: FiHome, href: "/user" },
];

export const ReceptionistLinks = [
  { name: "Beranda", icon: FiHome, href: "/" },
  { name: "Antrian Pasien", icon: FiHome, href: "/queue-patient" },
  { name: "Antrian Obat", icon: FiHome, href: "/queue-medicine" },
  { name: "Pembayaran", icon: FiHome, href: "/billing-payment" },
];
