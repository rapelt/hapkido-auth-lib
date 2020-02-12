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

export interface Config {
  environmentName: string;
  aws_cognito_region: string;
  aws_user_pools_id: string;
  aws_user_pools_web_client_id: string;
}
