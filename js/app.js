// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('Shanks', ['ionic','ShanksController','ShanksService','ShanksFilter'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
})
  .config(["$stateProvider","$urlRouterProvider","$ionicConfigProvider",function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
      $ionicConfigProvider.tabs.position("bottom");
      $ionicConfigProvider.tabs.style("standard");
      $ionicConfigProvider.backButton.text("");
      $ionicConfigProvider.views.transition("ios");
      $ionicConfigProvider.navBar.alignTitle("center");
      $stateProvider
        .state("tabs",{
          url:"/tabs",
          abstract:"true",
          templateUrl:"./view/tabs.html"
        })
        .state("tabs.home",{
          url:"/home",
          views:{
            "tabs-home":{
              templateUrl:"view/tabs-home.html",
              controller:"homeController"
            }
          }
        })
        .state("tabs.classify",{
          url:"/classify",
          views:{
            "tabs-classify":{
              templateUrl:"view/tabs-classify.html",
              controller:"classifyController"
            }
          }
        })
        .state("tabs.column",{
          url:"/column",
          views:{
            "tabs-column":{
              templateUrl:"view/tabs-column.html",
              controller:"columnController"
            }
          }
        })
        .state("tabs.life",{
          url:"/life",
          views:{
            "tabs-life":{
              templateUrl:"view/tabs-life.html",
              controller:"lifeController"
            }
          }
        })
        .state("list",{
          url:"/life/list?image&title&desc",
          templateUrl:"view/lifeList.html",
          controller:"lifelistController"
        })
        .state("classifyList", {
          url: "/classifyList?title&name",
          templateUrl: "view/classify-list.html",
          controller:"classifyListController"
        })
        .state("classifySmallList", {
          url: "/classifySmallList?title&name",
          templateUrl: "view/classify-small-list.html",
          controller:"classifyListController"
        })
        .state("colDetail",{
          url:"/colDetail?image&title&descripts&num&index",
          templateUrl:"view/column_detail.html",
          controller:"colDetailController"
        })
        .state("search",{
          url:"/search",
          templateUrl:"view/search.html",
          controller:"searchController"
        })
        .state("searchArticle",{
          url:"/searchArticle?count&title",
          templateUrl:"view/search-article.html",
          controller:"searchArticleController"
        })
        .state("detail",{
          url:"/detail?image&title&avatar&description&catetitle&cateimg&time",
          templateUrl:"view/detail.html",
          controller:"detailController"
        })
        .state("myselfCenter",{
          url:"/myselfCenter/:state",
          templateUrl:"view/myself-center.html",
          controller:"selfcenterController"
        })
        .state("bannerDetail",{
          url:"/bannerDetail/:index",
          templateUrl:"view/bannerDetail.html",
          controller:"bannerController"
        })
        .state("login",{
          url:"/login",
          templateUrl:"./view/login.html",
          controller:"loginController",
        })
        .state("register",{
          url:"/register",
          templateUrl:"./view/register.html",
          controller:"registerController",
        })
        .state("forget",{
          url:"/forget",
          templateUrl:"./view/Forget.html",
          controller:"forgetController"
        })
        .state("information",{
          url:"/information",
          templateUrl:"./view/information.html",
          controller:"informationController",
        })
        .state("modify",{
          url:"/modify",
          templateUrl:"./view/modify.html",
          controller:"modifyController",
        })
        .state("myselfCenter.left",{
          url:"/myselfCenterLeft/:state",
          template:"没有更多了",
        })
        .state("myselfCenter.right",{
          url:"/myselfCenterright/:state",
          template:"没有更多了"
        })
      $urlRouterProvider.otherwise("/tabs/home");
  }])
