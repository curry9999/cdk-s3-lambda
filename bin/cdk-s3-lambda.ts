#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkS3LambdaStack } from '../lib/cdk-s3-lambda-stack';

const app = new cdk.App();
new CdkS3LambdaStack(app, 'CdkS3LambdaStack');
