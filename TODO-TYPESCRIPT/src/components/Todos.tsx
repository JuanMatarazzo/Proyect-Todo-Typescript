import { ModelCard } from "../type";
import { Todo } from "./Todo";

type Props = {
  Cards: ModelCard[],
  onRemoveTask: (id: number) => void;

};

export const Todos = ({ Cards,onRemoveTask }: Props) => {
  return (
    <div>
      {Cards?.map((task) => (
        <Todo name={task.name} id={task.id}  onRemoveTask={onRemoveTask} ></Todo>
      ))}
    </div>
  );
};
