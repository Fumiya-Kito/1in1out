export type Mono = {
  _id: string;
  category_id: number;
  icon: string;
  iconJsx?: JSX.Element;
  name: string;
  reason?: string;
};

export type Category = {
  _id: number; 
  icon: string; 
  name: string; 
  iconJsx?: JSX.Element;
  upper_limit?: number;
  mono_data?: Mono[];
};

