import { FC } from "react";

const ModalPreloader: FC = () => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="animate-spin rounded-full h-24 w-24 border-b-4 border-white dark:border-blue-600"></div>
    </div>
  );
};

export default ModalPreloader;
