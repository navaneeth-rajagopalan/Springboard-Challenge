var learningHubRoute = ["$routeProvider", function($routeProvider){
  $routeProvider
    .when("/", {
      templateUrl: "/Assets/LearningHub/Views/Templates/CourseRepo.html",
      controller: coursesCtrl
    })
    .otherwise({
      redirectTo: "/"
    });
}];
