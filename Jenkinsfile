pipeline {
    agent any

    stages {
        stage('Frontend Build') {
            steps {
                dir(frontend)
                sh 'npm install -g @angular/cli'
                sh 'ng build'
            }
        }
        stage('Frontend Test') {
            steps {
                dir(frontend)
                sh 'ng test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}