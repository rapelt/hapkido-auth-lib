import { EnvironementModel } from './environment.model';

export const environment = {
  production: true
};


export const config: EnvironementModel = {
  projectName: 'Hapkido Brisbane Administrators',
  environmentName: 'Production Environment',
  ionicEnvName: 'prod',
  aws_cognito_region: 'ap-southeast-2',
  aws_user_pools_id: 'ap-southeast-2_qhhN68Qu1',
  aws_user_pools_web_client_id: '7anuv5a2ajn6u898qqaad958ti',
  feature_toggle: {
    cognito_login: true,
  },
  static_image_location: 'https://hapkido-convert-videos.s3-ap-southeast-2.amazonaws.com/static_images/',
  default_logo: 'hapkido_brisbane_logo.png'
};
