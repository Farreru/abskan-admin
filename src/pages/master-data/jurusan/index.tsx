/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Badge,
  Dropdown,
  Table,
  useTheme,
  Modal,
  Button,
  Label,
  TextInput,
} from "flowbite-react";
import type { FC } from "react";
import { useState, useEffect } from "react";
import NavbarSidebarLayout from "../../../layouts/navbar-sidebar";
import {
  HiCog,
  HiDotsVertical,
  HiExclamationCircle,
  HiHome,
  HiOutlineExclamationCircle,
  HiPencilAlt,
  HiTrash,
  HiUpload,
} from "react-icons/hi";
import { FaPlus } from "react-icons/fa";
import axios from "axios";

type Jurusan = {
  id: number;
  nama: string;
};

const JurusanPage: FC = function () {
  const [dataJurusan, setDataJurusan] = useState<Jurusan[]>([]);

  useEffect(() => {
    axios.get(`${import.meta.env["VITE_API_BASE_URL"]}/jurusan`).then((res) => {
      if (res.data.status === "success") {
        setDataJurusan(res.data.data);
      }
    });
  }, []);

  return (
    <NavbarSidebarLayout>
      <div className="px-4 pt-4">
        <div className="bg-white rounded border-2 border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
          <div className="flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold">Jurusan</h1>
            <AddJurusanModal />
          </div>
          <div className="my-4 mx-4">
            <JurusanTable dataJurusan={dataJurusan} />
          </div>
        </div>
      </div>
    </NavbarSidebarLayout>
  );
};

const JurusanTable: FC<{ dataJurusan: Jurusan[] }> = function ({
  dataJurusan,
}) {
  return (
    <Table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
      <Table.Head className="bg-gray-100 dark:bg-gray-700">
        <Table.HeadCell>Index</Table.HeadCell>
        <Table.HeadCell>Name</Table.HeadCell>
        <Table.HeadCell>Actions</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
        {dataJurusan.map((jurusan: Jurusan, index: number) => (
          <Table.Row
            key={jurusan.id}
            className="hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
              {index + 1}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
              {jurusan.nama}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap p-4 font-normal text-gray-500 dark:text-gray-400">
              <button className="text-blue-500 hover:text-blue-800 text-xl">
                <HiPencilAlt className="inline-block" size={22} />
              </button>
              <button className="text-red-500 hover:text-red-800 ml-2 text-xl">
                <HiTrash className="inline-block" size={22} />
              </button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

const AddJurusanModal: FC = function () {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button color="primary" onClick={() => setOpen(!isOpen)}>
        <FaPlus className="mr-3 text-sm" />
        Add Jurusan
      </Button>
      <Modal onClose={() => setOpen(false)} show={isOpen}>
        <Modal.Header className="border-b border-gray-200 !p-6 dark:border-gray-700">
          <strong>Add Jurusan</strong>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="grid grid-cols-1 gap-6">
              <div className="col-span-full">
                <Label htmlFor="name">Jurusan</Label>
                <TextInput
                  id="name"
                  name="name"
                  placeholder="Jurusan"
                  className="mt-1"
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button color="primary" onClick={() => setOpen(false)}>
            Save
          </Button>
          <Button color="light" onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default JurusanPage;
