export type Category = {
  id: number; 
  icon: JSX.Element; 
  name: string; 
  upper_limit: number;
  mono_data?: Mono[];
};

export type Mono = {
  id: number;
  category_id: number;
  icon: JSX.Element;
  name: string;
  reason: string;
};
