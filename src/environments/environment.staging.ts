import { EnvironementModel } from './environment.model';

export const environment = {
  production: false
};


export const config: EnvironementModel = {
  projectName: 'Hapkido Brisbane Administrators',
  environmentName: 'Staging Environment',
  ionicEnvName: 'staging',
  aws_cognito_region: 'ap-southeast-2',
  aws_user_pools_id: 'ap-southeast-2_iSE7Uw8vG',
  aws_user_pools_web_client_id: '6cmv8equdgsmvrhrphbggmd2at',
  feature_toggle: {
    cognito_login: true,
  },
  static_image_location: 'https://hapkido-convert-videos.s3-ap-southeast-2.amazonaws.com/static_images/',
  default_logo: 'hapkido_brisbane_logo.png'

};
