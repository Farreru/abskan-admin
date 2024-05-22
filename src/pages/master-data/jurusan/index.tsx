import {
  Badge,
  Dropdown,
  Table,
  useTheme,
  Modal,
  Button,
  Label,
  TextInput,
  Toast,
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
import Swal from "sweetalert2";
import Preloader from "../../../components/preloader";
import ModalPreloader from "../../../components/modalPreloader";

type Jurusan = {
  id: number;
  nama: string;
};

const JurusanPage: FC = function () {
  const [dataJurusan, setDataJurusan] = useState<Jurusan[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    const data = await FetchData();
    setDataJurusan(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <NavbarSidebarLayout>
      <div className="px-4 pt-4 mb-4">
        <div className="transition-all duration-500 ease-in-out bg-white rounded border-2 border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
          <div className="flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold">Jurusan</h1>
            <AddJurusanModal fetchData={fetchData} />
          </div>
          <div className="my-6 mx-6">
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
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJurusan = dataJurusan.filter((jurusan) =>
    jurusan.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = filteredJurusan.slice(firstItemIndex, lastItemIndex);

  const totalPages = Math.ceil(filteredJurusan.length / itemsPerPage);

  return (
    <>
      <div className="grid grid-cols-4">
        <div className="col-span-3 flex items-center">
          <span className="transition-all duration-500 ease-in-out text-sm text-gray-700 dark:text-gray-400">
            Showing {currentItems.length} of {filteredJurusan.length} results
          </span>
        </div>
        <div className="col-span-1">
          <TextInput
            type="text"
            placeholder="Cari jurusan..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 w-full"
          />
        </div>
      </div>
      <Table className="transition-all duration-500 ease-in-out min-w-full divide-y divide-gray-200 dark:divide-gray-600">
        <Table.Head className="transition-all duration-500 ease-in-out bg-gray-100 dark:bg-gray-700">
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Actions</Table.HeadCell>
        </Table.Head>
        <Table.Body className="transition-all duration-500 ease-in-out divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
          {currentItems.map((jurusan: Jurusan, index: number) => (
            <Table.Row
              key={jurusan.id}
              className="transition-all duration-500 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Table.Cell className="transition-all duration-500 ease-in-out whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                {firstItemIndex + index + 1}
              </Table.Cell>
              <Table.Cell className="transition-all duration-500 ease-in-out whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                {jurusan.nama}
              </Table.Cell>
              <Table.Cell className="transition-all duration-500 ease-in-out whitespace-nowrap p-4 font-normal text-gray-500 dark:text-gray-400">
                <button className="transition-all duration-500 ease-in-out text-blue-500 hover:text-blue-800 text-xl">
                  <HiPencilAlt className="inline-block" size={22} />
                </button>
                <button className="transition-all duration-500 ease-in-out text-red-500 hover:text-red-800 ml-2 text-xl">
                  <HiTrash className="inline-block" size={22} />
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <div className="flex justify-between items-center mt-4">
        <Button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          color="light"
        >
          Previous
        </Button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          color="light"
        >
          Next
        </Button>
      </div>
    </>
  );
};

const DeleteJurusanByID = async (id: number) => {
  try {
    const response = await axios.delete(
      `${import.meta.env["VITE_API_BASE_URL"]}/jurusan/${id}`
    );
    if (response.data.status === "success") {
      customSwal({
        title: "Success!",
        text: "Jurusan deleted successfully!",
        icon: "success",
        confirmButtonText: "Ok",
      }).then(() => {
        FetchData();
      });
    }
    return null;
  } catch (error) {
    console.error("Failed to delete data:", error);
    return null;
  }
};

const AddJurusanModal: FC<{ fetchData: () => void }> = function ({
  fetchData,
}) {
  const [isOpen, setOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState("");

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    axios
      .post(`${import.meta.env["VITE_API_BASE_URL"]}/jurusan`, { nama: name })
      .then((response) => {
        console.log("Submission successful", response);
        customSwal({
          title: "Success!",
          text: "Jurusan added successfully!",
          icon: "success",
          confirmButtonText: "Ok",
        }).then(() => {
          setOpen(false);
          setName("");
          fetchData();
        });
      })
      .catch((error) => {
        console.error("Submission failed", error);
        let errorMessage = "";
        if (error.response.data.errors.nama) {
          const errorType = error.response.data.errors.nama[0];
          switch (errorType) {
            case "Nama jurusan harus diisi":
              errorMessage = "Jurusan name is required";
              break;
            case "Nama jurusan harus berisi karakter":
              errorMessage = "Jurusan name must be a string";
              break;
            case "Nama jurusan harus kurang dari 255 karakter":
              errorMessage = "Jurusan name must be less than 255 characters";
              break;
            case "Nama jurusan sudah ada":
              errorMessage = "Jurusan name already exists";
              break;
            default:
              errorMessage = "Jurusan error";
              break;
          }

          customSwal({
            title: "Error!",
            text: errorMessage,
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
        setName("");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Button className="transition-all duration-500 ease-in-out" color="primary" onClick={() => setOpen(!isOpen)}>
        <FaPlus className="mr-3 text-sm" />
        Add Jurusan
      </Button>
      <Modal onClose={() => setOpen(false)} show={isOpen}>
        <Modal.Header className="border-b border-gray-200 !p-6 dark:border-gray-700">
          <strong>Add Jurusan</strong>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={submitHandler}>
            <div className="grid grid-cols-1 gap-6">
              <div className="col-span-full">
                <Label htmlFor="name">Jurusan</Label>
                <TextInput
                  id="name"
                  name="name"
                  placeholder="Jurusan"
                  className="mt-1"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>
            {isLoading && <ModalPreloader />}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            color="primary"
            type="submit"
            onClick={submitHandler}
            disabled={isLoading || name.trim() === ""}
          >
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

const customSwal = (options: any) => {
  return Swal.fire({
    ...options,
    customClass: {
      popup: "bg-white dark:bg-gray-800 rounded-lg shadow-lg",
      title: "text-gray-900 dark:text-gray-100",
      content: "text-gray-700 dark:text-gray-100",
      confirmButton:
        "bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none",
      cancelButton:
        "bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded focus:outline-none",
      // Add other elements here as needed
    },
    buttonsStyling: false, // Disable default styles to use Tailwind classes
  });
};

const FetchData = async (): Promise<Jurusan[]> => {
  try {
    const response = await axios.get(
      `${import.meta.env["VITE_API_BASE_URL"]}/jurusan`
    );
    if (response.data.status === "success") {
      return response.data.data;
    }
    return [];
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return [];
  }
};

export default JurusanPage;
