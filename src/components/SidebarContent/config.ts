import { FiHome } from 'react-icons/fi';

export const DoctorLinks  = [
  { name: 'Beranda', icon: FiHome, href: '/' },
  { name: 'Daftar EMR', icon: FiHome, href: '/emr-history' },
  { name: 'Tambah EMR', icon: FiHome, href: '/add-emr' },
]

export const PatientLinks = [
  { name: 'Beranda', icon: FiHome, href: '/' },
  { name: 'Form Reservasi', icon: FiHome, href: '/form-reservasi' },
  { name: 'Riwayat EMR', icon: FiHome, href: '/my-emr' },
  { name: 'Riwayat Reservasi', icon: FiHome, href: '/reservation-history' },
]

export const AdminLinks = [
  { name: 'Beranda', icon: FiHome, href: '/' },
  { name: 'Obat', icon: FiHome, href: '/medicine' },
  { name: 'Jadwal', icon: FiHome, href: '/schedule' },
  { name: 'Pengguna Aplikasi', icon: FiHome, href: '/user' }
]

export const ReceptionistLinks = [
  { name: 'Beranda', icon: FiHome, href: '/' },
  { name: 'Antrian Pasien', icon: FiHome, href: '/queue-patient' },
  { name: 'Antrian Obat', icon: FiHome, href: '/queue-medicine' }
]