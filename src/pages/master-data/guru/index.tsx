/* eslint-disable jsx-a11y/anchor-is-valid */
import { Badge, Dropdown, Table, useTheme } from "flowbite-react";
import type { FC } from "react";
import NavbarSidebarLayout from "../../../layouts/navbar-sidebar";

const GuruPage: FC = function () {
  return (
    <NavbarSidebarLayout>
      <div className="px-4 pt-4">
        <div className="bg-white rounded border-2 border-gray-200">
          <div className="flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold">Guru</h1>
          </div>
        </div>
      </div>
    </NavbarSidebarLayout>
  );
};

export default GuruPage;
