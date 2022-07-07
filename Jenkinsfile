node {

  stage('Checkout'){
    git brach: 'main', url: 'https://github.com/baraneha5997/tldp-team10-project-server.git'
   }
   
   stage('Install Dependencies'){
    sh 'npm install'
   }
   
   stage('Run'){
    sh 'node server &'
   }
   
   stage('Postman Tests'){
    sh 'npx newman run Tests.postman_collection.json'
   }
}
