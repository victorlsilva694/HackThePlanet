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

export type IAllfilesSelected = {
  file_path: string;
  id: number;
  user_id: number;
  user_name: string;
}

export type IFilesDataLenght = {
  file_name: string;
  file_size_mb: number;
  user_name: string;
}

export type IFilesDataTotally = {
  all_files_selected: IAllfilesSelected[]
  file_payload: IFilesDataLenght[]
}

export type IDeleteItems = {
  name: string;
  username: string;
  getIdByIndexData: number;
}
