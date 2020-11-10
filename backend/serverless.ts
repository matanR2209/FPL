import type { Serverless } from 'serverless/aws';

const serverlessConfiguration: Serverless = {
  service: {
    name: 'FPL-FUNC'
  },
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true
    }
  },
  plugins: ['serverless-webpack', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs12.x',
    region: 'us-east-2',
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
  },
  functions: {
    updateCurrentTeam: {
      handler: 'functions/updateCurrentTeam.updateCurrentTeam',
      events: [
        {
          http: {
            path: "/updateCurrentTeam",
            method: "POST"
          }
        }
      ]
    }
  }
}

module.exports = serverlessConfiguration;