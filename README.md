# pulumi-iac-projects

This repository contains a Pulumi project written in TypeScript for deploying a Kubernetes cluster in Amazon Elastic Kubernetes Service (EKS).

## Prerequisites

Before getting started, make sure you have the following prerequisites installed:

- Pulumi CLI
- AWS CLI
- Node.js
- TypeScript

## Getting Started

1. Clone this repository:

    ```bash
    git clone https://github.com/NoelXP/pulumi-iac-projects.git
    ```

2. Install dependencies:

    ```bash
    cd pulumi-iac-projects
    npm install
    ```

3. Configure your AWS credentials:

    ```bash
    aws configure
    ```

4. Deploy the Pulumi stack:

    ```bash
    pulumi up
    ```

5. Access your Kubernetes cluster:

    ```bash
    pulumi stack output kubeconfig > kubeconfig.yaml
    export KUBECONFIG=$PWD/kubeconfig.yaml
    kubectl get nodes
    ```

## Clean Up

To clean up and delete the resources created by Pulumi, run the following command:
