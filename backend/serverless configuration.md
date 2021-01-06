
https://blog.codecentric.de/en/2019/08/developing-aws-locally-with-serverless-offline-plugins/
###Plugins
This will make the plugins available for our project


###DynamoDB offline

* tableName: defines the name of the DynamoDB table, so that we can reuse it in other places
* migrate: ensures that the required DynamoDB tables are created automatically on start up.

In projects where no local plugins are used, the AWS SDK automatically takes care of the AWS configuration. 
But for local plugins, that behavior is restricted: We need to tell the SDK the DynamoDB endpoint later.
That’s why we configure it via

    custom: 
        endpoints:
            dynamodb-url: 'http://localhost:8000'

and publish the required values via

    provider:
        environment:
            CONFIG_USERS_TABLE: ${self:custom.tableNames.users}
            CONFIG_DYNAMODB_ENDPOINT: ${self:custom.endpoints.dynamodb-url}
as environment variables for later use


Finally, we need to create a DynamoDB table. 
We create a resource for it, described in a separate file resources/users-table.yml, and embed it via

    resources:
        - ${file(resources/users-table.yml)}