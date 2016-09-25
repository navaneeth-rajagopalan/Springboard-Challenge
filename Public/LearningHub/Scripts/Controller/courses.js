var coursesCtrl = ["$scope", "coursesDataProv", function($scope, coursesDataProv){
    $scope.filterTag = "";
    $scope.courseList = [];
    $scope.sortValue = "";
    $scope.sortBy = {
        name: "sortCourses",
        values: [
            {
                id: "upVotes", text: "Votes (up)"
            },
            {
                id: "downVotes", text: "Votes (down)"
            },
            {
                id: "learner", text: "Listeners"
            },
            {
                id: "hours", text: "Duration"
            }
        ]
    };

    $scope.sortChanged = function(value){
        console.log(value);
        $scope.sortValue = value;
    }
    
    coursesDataProv.getCourseDetails()
        .then(
            // Success
            function(response){
                $scope.courseList = response.data.paths;
            },
            // Failure
            function(err){
                console.log(err);
                $scope.courseList = undefined;
            }
        );
        
}]