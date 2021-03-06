# Poncho
Poncho projectis setup using BDD Features and Scenarios in Cucumber Studios linked to the Poncho TestComplete Project.

The TestComplete project will be executed as part of a CICD pipeline, triggered by PR's in feature or master branches.

# Feature Scenarios and BDD Setup
- Create Cucumber Studio accounts by signing up on https://studio.cucumber.io/users/sign_up 
- Request Cucumber Studio Access to Poncho Project by emailing sheltyb@gmail.com and providing your email address
- Logon to Cucumber Studios pONCHO project: https://studio.cucumber.io/projects/220411
- Create BDD Scenarios as per Business and Customer Given, When, Then BDD Actions
- Each Feature Area should have its own BDD Cucumber folder eg. 
- Poncho
	- Get A Quote
		- Cars
- BDD Features and Scenarios structures will be retained in the folder structure of the Code Repository
- All Automated Scenarios with Test Runs will be connected via Cucumber to Jira Integration and results will display pass failures in Jira
- Test Runs will list all BDD Scenarios that are executed by TestComplete/TestExecute and bound to Cucumber Studios.
- Add all Scenarios that are Automated to the Test Run list to be monitored by cucumber Studios
		
# GitHub Repository
- Create a GitHub Account
- Request Access by sending your email and github account details to sheltyb@gmail.com
- Once you have access - Connect and Checkout GitHub Repository - https://github.com/Sheltyb/Poncho
- eg Repo location C:\Repos\Poncho
- GitHub Project will be integrated into Jira, Comms channels (Slack/Teams) for notification's and CICD pipeline products
- PR's will trigger Smoke Tests and will prevent Merge on failures
- Merge into master branch will not occur until all Automation passes
- CICD pipeline is integrated into TestExecute Agents enabled on VM's or AWS servers
- GitHib Repo will be integrated into Jira
- the branch names for features, commit messages and Pull Requests/Merges should contain the #JiraNumber so that the Jira User Storys and features will contain commit/branch/PR's

# Local Automation Dev Setup
- Download Trial or full version of TestComplete and install on your local desktop
- https://smartbear.com/product/testcomplete/free-trial/
- TestComplete Chrome extension is required for this project and should be automatically installed 
- Start TestComplete 14 or higher
- Open the TestComplete Project
- Ensure TC project is bound to Cucumber Studio via Tools --> Options --> Cucmber Studio --> Select Poncho project 
- https://studio.cucumber.io/projects/220411
- The latest BDD Scenarios will load automatically, but to ensure this is done right click on the Pronto Project from project explorer and select Update from Cucumber Studios

# Coding Practices
- Object Identification and coding structurers should be based Page Object Modelling (POM)
- All Object Name Mapping will be based on Features in Cucumber BDD - eg. all functions from Get a Quote Feature will be located under the Name Mapping pageGetAQuote page object
	- browser
		- pageGetAQuote
			- buttonGetAQuote
- All Code folder structures will follow Feature structures in BDD eg:
	- Poncho\Common    		[containing browser and common functions used throughout the project]
	- Poncho\Get a Quote 	[contains all Test Actions that occur against the Get a Quote page https://quote.ponchoinsurance.com.au/]
	- Poncho\Get a Quote\Cars [ contains all test actions against the Cars features of get a quote]
- Create a new Name Mapping entry for each unique page object eg. pagePonchoInsuranceHome, pageGetAQuote, pageAddTheCarYouWantToCover etc
- Ensure all NameMapping objects have had a meaningful name so that they are clearly identified
- Comments for PR's should include User Story Jira ticket number followed by description of whats changed in that commit
- All Tests in BDD will default to failed condition - requiring update to pass the test
- All Tests PR'd should meet the User Story acceptance Test criteria
- Branches should be created for each Feature UI Tests are created for

# Local Test Execution
- Once you have completed Scenario development
- Open the Project Explorer
- double Click Poncho project
- Open Test Items tab
- Add New Test Items in the flow of E2E scenarios - select scenario feature file and scenario to address
- ensure checbox is enabled - so that new item is part of the test execution flow

To Execute TC Project Tests 
- While in Project Eplorer --> Test Items list
- Click on Run Project button or Test Menu --> Run Project
- Note This may close all browsers if this step ius enabled
 
 # Remote Test Execution
 - TestExecute will be deployed
 - CICD will trigger 
 - Deploy of latest code
 - Latest TC Project
 - Exec TestExecute run Smoke or Full E2E UI Tests on PR and Merge requests
 - Test Results visible to Cucumber Studios Dashboard for Test Runs against Poncho project
 
 # Multi browser testing
 - invoked by TC's multi browser test feature

# API Testing
- API Testing uses Smartbear ReadyAPI and SOAPUI toolsets via licenced installation or free trial: https://smartbear.com/product/ready-api/free-trial/
- Test Project is stored under GitHub \Repo location\Poncho\Poncho_API\Poncho-API-readyapi-project.xml
- Open the project file using ReadyAPI
- To Manually execute All Test API's click on the project --> SOAPUI Pro level in the project navigation and click the green Run arrow
- The will be called via TestComplete or via CICD pipeline to run TestExecute agent
- Parameters passed into executable test runs will include: 
	- key - webservices Weather API key - defaulting to the current key used to access weather api/free-trial/
	- version weather API webservices version [default = v2.0]

#ToDo
- Poncho_API Test data is currently hard coded in local loop Grid tables and Test Project parameters, but will be stored Config files and EXCEL or CSV files that will be imported
- Test Data and config files will include information about environments for staged deployment from DEV --> Test --> Staging --> PROD for code build deployments 
- Need to add extra field in the API-readyapi-project to allow for Country + postal_code options	
- TestComplete UI project requires better Name Mapping that reduces structure dependencies and better readable object identification layers for Page Object Modelling POM.

# Integration
- Enable Jira Integration for TC, ReadyAPI and Cucumber Studios - to make Branching, PR, and Build details visible for User Stories and Epics
- Enable Jira integration into CICD tools 
- enable CICD Tool integration for TC and SOAPUI execution - TestExecute
- Enable Integraion of GitHub and Comms tools for Notification of Build success