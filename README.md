
Last Name: Ben Khalifa 
First Name: Hedi 
Email: hedi.benkhalifa@student.vinci.be 
GitHub URL: https://github.com/HediCaprio/ipl-social.git 


Project Explanation:
First, I initialized the project and configured the CI pipeline by creating the .yml file within GitHub Actions. I then structured the project by adding the necessary files for both the source code and the unit tests.
To follow industry best practices, I created a branch named feature/testAndCode to develop the email validation logic using the TDD (Test Driven Development) methodology taught in class. Each test was written to validate a specific constraint before implementing the corresponding code. Once the development was finished and the tests were successful, I merged this branch into the main branch.
Later, having identified a missing test scenario, I created a second branch feature/updateTest to update the test suite without disrupting the main branch. After verifying that everything was working correctly, I performed a final merge into main. Finally, I made a last correction to ensure the pipeline matched the exam requirements perfectly.

Command to run tests: npm test
