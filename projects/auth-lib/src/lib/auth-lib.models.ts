export interface RootObject {
  cats: Cat[];
  favoriteNumber: number;
  favoriteWord: string;
}

export interface Cat {
  name: string;
  nullableId?: number | string;
  optionalFeature?: string;
}
