import { FC } from "react";

const Preloader: FC = () => {
  return (
    <div className="flex justify-center items-center h-screen transition-all duration-500 ease-in-out">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 dark:border-blue-600"></div>
    </div>
  );
};

export default Preloader;
