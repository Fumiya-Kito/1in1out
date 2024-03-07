export type Mono = {
  _id: string;
  category_id: number;
  category_name?: string;
  name: string;
  icon: string;
  iconJsx?: JSX.Element;
  reason?: string;
};

export type Category = {
  _id: number; 
  icon: string; 
  name: string; 
  iconJsx?: JSX.Element;
  upper_limit: number;
  mono_data?: Mono[];
};

export type FormType = 'CREATE' | 'UPDATE';