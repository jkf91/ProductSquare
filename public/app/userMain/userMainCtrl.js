angular.module('myApp.UserMain', [])

.controller('UserMainCtrl', ['$scope', '$http', '$routeParams', 'imageUpload', function($scope, $http, $routeParams, imageUpload){
  var vm = this;

  console.log("using user cntrl!");

  $scope.$on('gotUsers', function(event, user){
    console.log("ideas retrieved!", ideas);
    //set the scope variables here in the future.
  });

  $scope.name = "Dylan Wright";
  $scope.profilePic = "http://ds-wright.com/images/dylan-wright.png";
  $scope.projects = [
    {
      name: "Facebook",
      pic: "http://tctechcrunch2011.files.wordpress.com/2008/09/facebooknew.jpg",
      idea: "A social media website to connect friends, like mySpace, but better."
    },
    {
      name: "Google",
      pic: "http://brandthunder.com/wp/wp-content/uploads/2012/05/Google-Homepage-300x170.png",
      idea: "A search engine for the internet. Like Yahoo, but better"
    }
  ];

  $scope.ideas = [
    {
      name: "Product Square",
      idea: "A website for sharing ideas for students to to turn into a reality.",
    },
    {
      name: "Twitter",
      idea: "a useless website where people post useless content, called Tweets, with a maximum of 140 characters, to ensure uselessness."
    }
  ];

  console.log($routeParams.userID);

  $scope.imagePreview = "/img/default-user.png";

  $scope.uploadUserImage = function(){
    console.log("event", event);
    imageUpload.userImage($routeParams.userId, event, function(url){
      $scope.imagePreview = url;
      $scope.$apply();
    }); //run the userImage upload from the imageUpload factory.
  };

  $scope.sendEmail = function(message) {
    $('#contactModal').modal('hide'); //use jQuery to hide the modal when the submit email button his hit.
    console.log("in sendMail");
    $http.post('/email', {
      email: "dylansamuelwright@gmail.com", //to be populated from the factory.
      message: message,
      username: "Dylan" //to be populated from the factory.
    }).
    then(function(response) {
      console.log("email sent");
    }, function(response) {
      console.log("email error");
    });
  }
 
}])