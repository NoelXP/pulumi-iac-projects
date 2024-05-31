import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.Bucket("neds-bucket");

// Export the name of the bucket
export const bucketName = bucket.id;

// Create an AWS resource (ECS Cluster)
const cluster = new awsx.ecs.Cluster("neds-cluster");

// Export the ARN of the cluster
export const clusterArn = cluster.cluster.arn;

// Create an AWS resource (ECR Repository)
const repository = new aws.ecr.Repository("neds-repository");

// Export the name of the repository
export const repositoryName = repository.name;