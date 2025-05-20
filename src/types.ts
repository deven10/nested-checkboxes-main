export interface DataType {
  id: number;
  name: string;
  children?: DataType[];
}
