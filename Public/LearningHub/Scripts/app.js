angular.module("learningHub", ["ngRoute", "ngResource"])
.config(function(coursesDataProvProvider){
    coursesDataProvProvider.setBaseUrl("https://hackerearth.0x10.info/api/learning-paths");
})
.provider("coursesDataProv", coursesDataProv)
.controller("coursesCtrl", coursesCtrl)
.controller("headerCtrl", headerCtrl)
.directive("headerDir", headerDir)
.directive("courseSortDir", courseSortDir)
.directive("courseListDir", courseListDir)
.directive("courseDetailDir", courseDetailDir)
.config(learningHubRoute);