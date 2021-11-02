# FRONTEND DEVELOPMENT TEMPLATE


This is basic template for frontend development. In this template for SASS, 7-1 pattern is used.

Javascript should be written in **src/functions.js** using old ES5 syntax since gulp task for minimizing javascript will fail otherwise if modern syntax is used (mainly arrow functions).

In **js/** folder there is **modernizr-touch-detect.js** file. It check if device has touch support or not, and it is adding appropriate classes to **< html >** element.

example of using modernizr in sass to style hover state of button or link  
`.button {  
.no-touchevents & {   
&:hover {  
//write your styles here  
}   
}  
}`


# Getting started  
Download repository as zip file, and unpack it to desired place
![Download image](/src/download.png)


# Installing necessary dependencies
To install necessary development dependecies, you will need to have installed nodeJS and npm packages, then navigate to root folder and type `npm install` command in terminal.  


# Folder structure
- **img** folder - place static images here. Static images can be icons, and images in general which won't be maintainable via backend  
- **assets** folder - place dynamic images/videos here. Dynamic assets are images which can be edited from backed. Content of this folder is ingored in git!


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

# Using Sass variables
Sass is slowly migrating towards @use rule instead of @import. Because of that, I have migrated our setup to reflect this change.  

## How to import partials with new Sass syntax?
You can import partials same way as you did before, just instead of   
`@import 'path-to-scss-file'` use   
`@use 'path-to-scss-file'`  

## How to use variables, mixins and functions with new Sass syntax?
You have noticed that `_variables.scss` file is no longer globaly included in `main.scss` file. In order to use variables, mixins and functions, you must include them in file where you want to use them. On top of your file where you want to use them.  
`@use '../utils/variables' as *` - wildcard selector will enable you to use variables as you have used to `$variable-name`  
If you don't provide "**as**" value, in order to call you variable, you will use `variables.$variable-name`  

For more informations about @use, @import please check:  
https://sass-lang.com/documentation/at-rules/import  
https://sass-lang.com/documentation/at-rules/use  