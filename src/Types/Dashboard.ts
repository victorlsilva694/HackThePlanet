export type Transaction = {
  covid_data: string;
  created_at: string;
  id: number;
  passport: string;
  price_values: string;
  transaction_name: string;
  travel_code: string;
  updated_at: string;
  user_id: number;
  warning_annotation: string;
};

export type IFilesDataLenght = {
  file_name: string;
  file_size_mb: number;
  user_name: string;
}