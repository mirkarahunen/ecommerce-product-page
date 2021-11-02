const { src, dest, watch } = require("gulp");
const sass = require("gulp-dart-sass");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");
const mqpacker = require("css-mquery-packer");
const uglify = require("gulp-uglify");
const browserSync = require('browser-sync').create();

const scssFiles = "./src/scss/**/*.scss";
const jsFiles = "./src/js/**/*.js";

const postCssPlugins = [
    autoprefixer(),
    mqpacker({
        sort: true
    }),
    cssnano()
];

function compileCss() {
    return src("./src/scss/main.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(postcss(postCssPlugins))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(dest("./css/"))
        .pipe(browserSync.stream());
}

function generateJS() {
    return src("./src/js/functions.js")
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(dest("./js/"))
        .pipe(browserSync.stream());
}

function watchFiles() {
    browserSync.init({
        server: {
           baseDir: "./",
           index: "/index.html"
        }
    });
    watch(scssFiles, { ignoreInitial: false }, compileCss);
    watch(jsFiles, { ignoreInitial: false }, generateJS);
    watch('./*.html').on('change',browserSync.reload);
}

exports.default = watchFiles;