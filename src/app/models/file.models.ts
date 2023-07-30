export interface NewFile {
  id?: string;
  label: string;
  image_path: File | null | string;
  image_path_thumbnail?: File | null | string;
  url?: string;
  thumbnail?: string;
}
