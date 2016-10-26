"use strict";
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        cssmin: {
            options: {
                banner:"商务厅改版样式压缩文件"
            },
            one: {
                files: {
                    "css/index.min.css": ["css/index.css"]
                }  
            },
            two: {
                src: ["css/list.css"],
                dest:"css/list.min.css"
            },
            three: {
                files: [
                    {
                        src: ["css/other.css"],
                        dest:"css/other.min.css"
                    }
                ]
            },
            four: {
                files: {
                    "css/public.min.css":["css/public.css"]
                }
            }

        },
        watch: {
            one: {
                files: ["css/index.css"],
                tasks:["cssmin:one"]
            },
            two: {
                files: ["css/list.css"],
                tasks:["cssmin:two"]
            },
            three: {
                files: ["css/other.css"],
                tasks:["cssmin:three"]
            }
        }
    });

    //加载任务插件
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-watch");


    //执行任务
    grunt.registerTask("default", ["watch"]);
    grunt.registerTask("one", ["watch:one"]);
    grunt.registerTask("two", ["watch:two"]);
    grunt.registerTask("three", ["watch:three"]);
    grunt.registerTask("four", ["cssmin"]);
};