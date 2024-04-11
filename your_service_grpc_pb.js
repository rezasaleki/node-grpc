// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var your_service_pb = require('./your_service_pb.js');

function serialize_YourRequest(arg) {
  if (!(arg instanceof your_service_pb.YourRequest)) {
    throw new Error('Expected argument of type YourRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_YourRequest(buffer_arg) {
  return your_service_pb.YourRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_YourResponse(arg) {
  if (!(arg instanceof your_service_pb.YourResponse)) {
    throw new Error('Expected argument of type YourResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_YourResponse(buffer_arg) {
  return your_service_pb.YourResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var YourServiceService = exports.YourServiceService = {
  yourMethod: {
    path: '/YourService/YourMethod',
    requestStream: false,
    responseStream: false,
    requestType: your_service_pb.YourRequest,
    responseType: your_service_pb.YourResponse,
    requestSerialize: serialize_YourRequest,
    requestDeserialize: deserialize_YourRequest,
    responseSerialize: serialize_YourResponse,
    responseDeserialize: deserialize_YourResponse,
  },
};

exports.YourServiceClient = grpc.makeGenericClientConstructor(YourServiceService);
