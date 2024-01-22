export type Category = {
  id: number; 
  icon: string; 
  iconJsx: JSX.Element;
  name: string; 
  upper_limit?: number;
  mono_data?: Mono[];
};

export type Mono = {
  _id: string;
  category_id: number;
  icon: string;
  iconJsx?: JSX.Element;
  name: string;
  reason?: string;
};
