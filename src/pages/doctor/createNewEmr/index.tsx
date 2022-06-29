import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react"
import { useFormik } from "formik"

import SidebarWithHeader from "components/Sidebar"

const CreateNewEmr = () => {
  const formik = useFormik({
    initialValues: {
      pasien: "",
      diagnosa: "",
      obat: "",
      examinationDate: ""
    },
    onSubmit: (values) => {
      fetch("http://localhost:3001/emr", {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(values)
      })
        .then(res => res.json())
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
          <Input
            id="pasien"
            name="pasien"
            variant="outline"
            fontSize="sm"
            ms="4px"
            type="text"
            placeholder="Nama pasien"
            mb="24px"
            size="lg"
            value={formik.values.pasien}
            onChange={formik.handleChange}
            isRequired
          />
        </FormControl>

        <FormControl>
          <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
            Diagnosa
          </FormLabel>
          <Input
            id="diagnosa"
            name="diagnosa"
            variant="outline"
            fontSize="sm"
            ms="4px"
            type="text"
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
            placeholder="Diagnosa"
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