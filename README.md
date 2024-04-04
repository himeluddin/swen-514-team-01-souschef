# Sous Chef

# Set up instructions 

1. git clone this repository https://github.com/himeluddin/swen-514-team-01-souschef 
2. set up amplify cli 
   1. npm install -g @aws-amplify/cli (from the root node)
   2. amplify configure 
      1. this will require you to have a user and an access key. This is provided from Angela Ngo and should be in the Discord. 
      2. this will allow you to see your changes on aws amplify. 


# How to see if code is deployed properly 
NOTE: this may require you to get an IAM from Angela or use one from Mackenize or Dom. 
1. In the AWS amplify console, we will be working in "souschef1"
2. clicking on the environment and "hosting environment" 
3. and then you can click on a branch that has been deployed and see its results. 


## Running Frontend Locally 
(the front end folder is currently only in ui branch and other related ui branches so do those commands there)
1. cd frontend
2. npm install 
3. npm run build (this will generate the build folder)
4. npm run start 


# CSS Used 
* currently trying to pick between Tailwind.css vs Materializ.css

