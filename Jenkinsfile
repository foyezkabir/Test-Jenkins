pipeline {
    agent any

    // Environment variables available to all stages
    environment {
        // Simple environment variable
        NODE_VERSION = '18'
        
        // Credentials binding: 'vercel-token' is the ID from Jenkins Credentials
        // The value will be stored in the VERCEL_TOKEN variable
        VERCEL_TOKEN = credentials('vercel-token')
    }

    stages {
        stage('Setup') {
            steps {
                echo 'Installing dependencies...'
                // 'bat' is used for Windows agents. Use 'sh' for Linux.
                bat 'echo Using Node version: %NODE_VERSION%'
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo 'Building application...'
                bat 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                // Example test command
                bat 'echo Tests passed!'
            }
        }
        
        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                echo 'Deploying to Vercel...'
                // Deploy to Vercel using the token
                // --prod: Deploy to production
                // --yes: Skip confirmation prompts
                // --token: Use the authenticated token
                bat 'npx vercel --prod --yes --token=%VERCEL_TOKEN%'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
        success {
            echo 'Build succeeded!'
        }
        failure {
            echo 'Build failed.'
        }
    }
}
