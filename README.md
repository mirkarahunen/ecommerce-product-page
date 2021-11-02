# E-COMMERCE PRODUCT PAGE


# Getting started  
Download repository as zip file, and unpack it to desired place


# Installing necessary dependencies
To install necessary development dependecies, you will need to have installed nodeJS and npm packages, then navigate to root folder and type `npm install` command in terminal.  


# Running gulp task  
To run gulp task, navigate to root folder and type `gulp` command.  
This gulp task will:  
- Compile your **scss** files
- Autoprefix (if needed) css rules for browsers defined in **package.json** file under **browserlist** section  
- Combines defined media queries starting from smallest to biggest  
- Minimizes generated **css** file  
- Minimize generated **js** file
- Run **browserSync**  
- Watch changes on **scss, js,** and **html** files
