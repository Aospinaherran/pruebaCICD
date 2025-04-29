pipeline {
    agent any  // Esto ejecuta el pipeline en cualquier nodo disponible

    environment {
        // Aquí puedes definir variables de entorno si es necesario
    }

    stages {
        stage('Checkout') {
            steps {
                // Clonamos el repositorio
                git 'https://github.com/ejemplo/jenkins-nodejs-example.git'
            }
        }

        stage('Install dependencies') {
            steps {
                // Instalamos las dependencias de Node.js usando npm
                sh 'npm install'
            }
        }

        stage('Run tests') {
            steps {
                // Ejecutamos las pruebas con Jest
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                // Este paso es opcional, por si quieres agregar una etapa de build
                echo 'Construcción completada'
            }
        }
    }

    post {
        success {
            echo '¡Pipeline completado con éxito!'
        }
        failure {
            echo 'Hubo un error en el pipeline.'
        }
    }
}
