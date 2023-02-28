import { nanoid } from "nanoid";

export type Status = "TODO" | "IN_PROGRESS";

export type Priority = "LOW" | "NORMAL" | "HIGH";

export type Todo = {
  id: string;
  name: string;
  description: string;
  done: boolean;
  status: Status;
  priority: Priority;
};

export const createTodo = (name: string): Todo => ({
  id: nanoid(),
  name,
  description: "",
  done: false,
  status: "TODO",
  priority: "NORMAL",
});