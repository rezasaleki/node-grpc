const { loadPackageDefinition, credentials} = require('@grpc/grpc-js');
const { loadSync } = require('@grpc/proto-loader');

const packageDefinition = loadSync('your_service.proto');
const protoDescriptor = loadPackageDefinition(packageDefinition);
const YourService = protoDescriptor['YourService'];

const client = new YourService('localhost:50051', credentials.createInsecure());

client.yourMethod({ message: 'Hello' }, (error, response) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Response:', response.reply);
    }
});