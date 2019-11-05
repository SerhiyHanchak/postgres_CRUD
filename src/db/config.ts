import * as config from '../../knexfile';
const environment = process.env.NODE_ENV||"development";
const environmentConfig = config[environment];

export default environmentConfig;