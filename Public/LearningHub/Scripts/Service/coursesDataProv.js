var coursesDataProv = function(){
    var baseUrl;
    function getCourseData($http){
        return $http({
            method: "GET",
            url: baseUrl,
            params: {
                type: "json",
                query: "list_paths"
            } 
        })       
    }
    // Configure the baseUrl
    this.setBaseUrl = function(url){
        baseUrl = url;
    }

    // Exposed method.
    this.$get = ["$http", function($http){
        return {
            // Will return the course details array.
            getCourseDetails: function(){
                return getCourseData($http);
                //console.log(data);
            }
        };
    }]
};