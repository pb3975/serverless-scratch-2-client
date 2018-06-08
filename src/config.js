const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "serverless-scratch-2-api-dev-attachmentsbucket-11yav1l4q92x"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://api.will-metz.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_uz6QTTxmm",
    APP_CLIENT_ID: "3cmd7s19b05659gpujl89538gd",
    IDENTITY_POOL_ID: "us-east-1:e2a17346-85d6-458c-8367-815dc940c6bd"
  },
  STRIPE_KEY: "pk_test_qlz6O2uo6MhOuAR5RiwYh9Ie"
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "serverless-scratch-2-api-prod-attachmentsbucket-13xh5wfy5t6og"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://api.will-metz.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_obknMHW1u",
    APP_CLIENT_ID: "1ac9p4krhigdre0vd6sa1jmv1h",
    IDENTITY_POOL_ID: "us-east-1:993c8639-8886-4474-82cb-5cd0d69a3607"
  },
  STRIPE_KEY: "pk_test_qlz6O2uo6MhOuAR5RiwYh9Ie"
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};