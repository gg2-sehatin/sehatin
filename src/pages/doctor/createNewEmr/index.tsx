/* eslint-disable no-console */
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react"
import { useFormik } from "formik"

import SidebarWithHeader from "components/Sidebar"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import PatientScheduleData from "types/PatientScheduleData"

const CreateNewEmr = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/patients?status=Dalam antrian", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      pasien: "",
      diagnosa: "",
      obat: "",
      examinationDate: "",
    },
    onSubmit: (values) => {
      fetch("http://localhost:3001/emr", {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(values)
      })

      fetch(`http://localhost:3001/patients?nama=${values.pasien}`, {
        method: "GET",
      })
        .then(res => res.json())
        .then(data => {
          const { id } = data[0]
          fetch(`http://localhost:3001/patients/${id}`, {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: "Selesai" })
          })
        })

      navigate("/emr-history")
    }
  })

  return(
    <SidebarWithHeader>
      <Text
        fontSize="xl"
        fontWeight="bold"
        mb="22px"
      >
        Buat EMR Baru
      </Text>

      <form onSubmit={formik.handleSubmit}>
        <FormControl>
          <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
            Nama Pasien
          </FormLabel>
          <Select
            name="pasien"
            id="pasien"
            mb="24px"
            onChange={formik.handleChange}
            value={formik.values.pasien}
          >
            <option value="">Pilih pasien</option>
            {data.map((item: PatientScheduleData, index) => (
              <option key={index} value={item.nama}>
                {item.nama} / {item.tanggal}
              </option>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
            Diagnosa
          </FormLabel>
          <Textarea
            id="diagnosa"
            name="diagnosa"
            variant="outline"
            fontSize="sm"
            ms="4px"
            placeholder="Diagnosa"
            mb="24px"
            size="lg"
            value={formik.values.diagnosa}
            onChange={formik.handleChange}
            isRequired
          />
        </FormControl>

        <FormControl>
          <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
            Nama Obat
          </FormLabel>
          <Input
            id="obat"
            name="obat"
            variant="outline"
            fontSize="sm"
            ms="4px"
            type="text"
            placeholder="Obat"
            mb="24px"
            size="lg"
            value={formik.values.obat}
            onChange={formik.handleChange}
            isRequired
          />
        </FormControl>

        <FormControl>
          <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
            Tanggal Pemeriksaan
          </FormLabel>
          <Input
            id="examinationDate"
            name="examinationDate"
            variant="outline"
            fontSize="sm"
            ms="4px"
            type="date"
            placeholder="Diagnosa"
            mb="24px"
            size="lg"
            value={formik.values.examinationDate}
            onChange={formik.handleChange}
            isRequired
          />
        </FormControl>

        <Button
          variant="dark"
          fontWeight="bold"
          h="45"
          mb="24px"
          color="white"
          bg="blue.300"
          type="submit"
        >
          Simpan
        </Button>
      </form>
    </SidebarWithHeader>
  )
}

export default CreateNewEmr;