export const config = {
  environmentName: 'Test Environment',
  ionicEnvName: 'test',
  classAPIEndpoint: 'http://localhost:8080/class/',
  studentAPIEndpoint: 'http://localhost:8080/student/',
  familyAPIEndpoint: 'http://localhost:8080/family/',
  getClassTime: 15000,
  aws_cognito_region: 'nnn',
  aws_user_pools_id: 'nnn',
  aws_user_pools_web_client_id: 'nnn',
  feature_toggle: {
    cognito_login: true,
    download_graphs: true
  }
};
