import { useEffect } from "react";

type arryObj = {
  id: number;
  title: string;
  updatedAt?: string;
  DeletedAt?: string;
};

export type { arryObj };

export default function useStore(taskList: arryObj[]) {
  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);
}
