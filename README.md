# NodeJs-Installation steps
*For Windows:
Step 1. Download Node.js
Go to the official Node.js website: https://nodejs.org
Download the LTS version (Recommended for most users).

Step 2. Run the Installer
Double-click the downloaded .msi file.
Follow the steps in the setup wizard:
Accept the license agreement.
Choose installation path (default is fine).
Ensure "Install npm" is selected.
Click Next → Install.

Step 3. Verify Installation
Open Command Prompt and type:
node -v
npm -v
You should see version numbers (e.g., v20.12.2).


 #If you are creating a new Node.js project:
Step 1. Create a project folder
  mkdir my-node-app
  cd my-node-app
Step 2.Initialize the project
   npm init -y
Step 3.Install required packages
   npm install express
Step 4.Create an entry file (e.g., index.js)
  touch index.js
  Add a basic server code
Step 5.Run the app
 node index.js

