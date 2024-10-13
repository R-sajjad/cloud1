pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git 'git@github.com:R-sajjad/FYP-of-cloud-.git'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'  // Replace with your project's build commands
            }
        }
    }
}
stage('Dockerize') {
    steps {
        sh 'docker build -t R-sajjad/Modren Portfolio .'
        sh 'docker login -u $DOCKER_USER -p $DOCKER_PASS'
        sh 'docker push R-sajjad/Modren Portfolio'
    }
}
