/* eslint-disable jsx-a11y/anchor-is-valid */
import { Badge, Dropdown, Table, useTheme } from "flowbite-react";
import type { FC } from "react";
import NavbarSidebarLayout from "../../../layouts/navbar-sidebar";

const PenggunaPage: FC = function () {
  return (
    <NavbarSidebarLayout>
      <div className="px-4 pt-4">
        <div className="bg-white rounded border-2 border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
          <div className="flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold">Pengguna</h1>
          </div>
        </div>
      </div>
    </NavbarSidebarLayout>
  );
};

const UsersTable: FC = function () {
  return (
    <Table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
      <Table.Head className="bg-gray-100 dark:bg-gray-700">
        <Table.HeadCell>Product Name</Table.HeadCell>
        <Table.HeadCell>Technology</Table.HeadCell>
        <Table.HeadCell>ID</Table.HeadCell>
        <Table.HeadCell>Price</Table.HeadCell>
        <Table.HeadCell>Actions</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
        <Table.Row className="hover:bg-gray-100 dark:hover:bg-gray-700">
          <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
            <div className="text-base font-semibold text-gray-900 dark:text-white">
              Education Dashboard
            </div>
            <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Html templates
            </div>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export default PenggunaPage;
