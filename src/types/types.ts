export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export type TaskInputProps = {
  value: string;
  onChange: (val: string) => void;
  onAdd: () => void;
};
