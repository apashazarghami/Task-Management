import { useSelector } from "react-redux";

const useSelectorHelper = () => {
  const { isLoading, tasks, error } = useSelector((state) => state.task);
  return { isLoading, tasks, error };
};

export { useSelectorHelper };
