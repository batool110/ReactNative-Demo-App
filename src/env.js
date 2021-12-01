import { 
    DEV_API_URL, 
    DEV_API_TOKEN, 
    PROD_API_URL, 
    PROD_API_TOKEN } from "@env"

const devEnvironmentVariables = {
    DEV_API_URL,
    DEV_API_TOKEN,
}

const prodEnvironmentVariables = {
    PROD_API_URL,
    PROD_API_TOKEN
}

export default __DEV__ ? devEnvironmentVariables : prodEnvironmentVariables