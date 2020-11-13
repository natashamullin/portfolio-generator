const { truncate } = require('fs');
const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?(Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('please enter user name!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:'
        }
    ]);
};

// promptUser()
//     .then(answers => console.log(answers))
//     .then(promptProject)
//     .then(projectAnswers => console.log(projectAnswers));

const promptProject = portfolioData => {
    console.log(`
  =================
  Add a New Project
  =================
  `);
    if (!portfolioData.Projects) {
        portfolioData.Projects = [];
    }
    return inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('please enter project name!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please provide a description of your project.')
                    return false
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please provide the link to your project!')
                    return false
                }
            }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
            .then(promptProject())
    ]);
};


promptUser()
    .then(answer => console.log(answer))
    .then(promptProject)
    .then(projectAnswers => console.log(projectAnswers))
    .then(projectData => {
        portfolioData.projects.push(projectData)
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        }
        else {
            return portfolioData;
        }
    });




// const fs = require('fs');

// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw new Error(err);

//     console.log('portfolio complete! check out index.html to see the output!')
// });
