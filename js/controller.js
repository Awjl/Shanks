angular.module("ShanksController",[])
  .controller("homeController",["$scope","ShanksFactory","$ionicScrollDelegate",function($scope,ShanksFactory,$ionicScrollDelegate){
      $scope.$on('$ionicView.beforeEnter', function() {
        var loginmsg=ShanksFactory.login_info;
        if(loginmsg==undefined){
          loginmsg=false;
        }
        $scope.userShow=loginmsg;
        $scope.showInfo=false;
      });
      $scope.showInfo=false;
      $scope.showList=function(){
        $scope.showInfo=!$scope.showInfo;
      }
      $scope.exit=function(){
        $scope.showInfo=false;
        $scope.userShow=false;
        ShanksFactory.login_info=false;
      }
      ShanksFactory.loadShow();
      var windowHeight=window.innerHeight;
      $scope.items=[];
      ShanksFactory.getData("./data/index/index1.json",function(result){
        var data=ShanksFactory.concatArr(result.data.data.feeds);
        angular.forEach(data,function (e) {
          $scope.items.push(e);
        })
        ShanksFactory.loadHide();
      });
      $scope.count=1;
      $scope.doLoad=function(){
        $scope.count++;
        ShanksFactory.getData("./data/index/index"+$scope.count+".json",function(result){
          var newdata=ShanksFactory.concatArr(result.data.data.feeds);
          angular.forEach(newdata,function (e) {
            $scope.items.push(e);
          })
        });
        $scope.$broadcast("scroll.infiniteScrollComplete");
      }
      $scope.goTop=function(){
       $ionicScrollDelegate.scrollTop(true);
      }
      $scope.getPosition=function(){
        var top=$ionicScrollDelegate.getScrollPosition().top;
        $scope.showBtn=top>windowHeight;
      }
  }])
  .controller("classifyController",["$scope","ShanksFactory",function($scope,ShanksFactory){
    $scope.info="分类";
    $scope.$on('$ionicView.beforeEnter', function() {
      var loginmsg=ShanksFactory.login_info;
      if(loginmsg==undefined){
        loginmsg=false;
      }
      $scope.userShow=loginmsg;
      $scope.showInfo=false;
    });
    $scope.exit=function(){
      $scope.showInfo=false;
      $scope.userShow=false;
      ShanksFactory.login_info=false;
    }
    $scope.showInfo=false;
    $scope.showList=function(){
      $scope.showInfo=!$scope.showInfo;
    }
  }])
  .controller("columnController",["$scope","ShanksFactory","$ionicScrollDelegate", function($scope,ShanksFactory,$ionicScrollDelegate){
    $scope.$on('$ionicView.beforeEnter', function() {
      var loginmsg=ShanksFactory.login_info;
      if(loginmsg==undefined){
        loginmsg=false;
      }
      $scope.userShow=loginmsg;
      $scope.showInfo=false;
    });
    $scope.exit=function(){
      $scope.showInfo=false;
      $scope.userShow=false;
      ShanksFactory.login_info=false;
    }
    $scope.showInfo=false;
    $scope.showList=function(){
      $scope.showInfo=!$scope.showInfo;
    }
    ShanksFactory.loadShow();
    $scope.items=[];
    $scope.index=1;
    ShanksFactory.getData("./data/column/column1.json",function(res){
      var data=res.data.data.columns;
      angular.forEach(data,function(res){
        $scope.items.push(res);
      })
      ShanksFactory.loadHide();
    })
    $scope.doLoad=function(){
      $scope.index++;
      ShanksFactory.getData("./data/column/column2.json",function(res) {
        var data=res.data.data.columns;
        angular.forEach(data,function(res){
          $scope.items.push(res);
        })
      })
    }
    $scope.$broadcast("scroll.infiniteScrollComplete");
  }])
  .controller("lifeController",["$scope","ShanksFactory",function($scope,ShanksFactory){
    $scope.$on('$ionicView.beforeEnter', function() {
      var loginmsg=ShanksFactory.login_info;
      if(loginmsg==undefined){
        loginmsg=false;
      }
      $scope.userShow=loginmsg;
      $scope.showInfo=false;
    });
    $scope.exit=function(){
      $scope.showInfo=false;
      $scope.userShow=false;
      ShanksFactory.login_info=false;
    }
    $scope.showInfo=false;
    $scope.showList=function(){
      $scope.showInfo=!$scope.showInfo;
    }
    $scope.info = [];
    $scope.item=1;
    $scope.loadMore = function() {
      ShanksFactory.getData("./data/life/life"+$scope.item+".json",function(result){
        var data=result.data.data.feeds;
        angular.forEach(data, function (e) {
          $scope.info.push(e);
        })
        $scope.$broadcast("scroll.infiniteScrollComplete");
        $scope.item++;
      });
    };
    $scope.loadMore();
    $scope.white=function(e){
      console.log(1);
      var _this=angular.element(e);
      console.log(_this);
    }
  }])
  .controller("lifelistController",["$scope","ShanksFactory","$stateParams","$ionicHistory","$ionicActionSheet",function($scope,ShanksFactory,$stateParams,$ionicHistory,$ionicActionSheet){
    $scope.infos=$stateParams;
    $scope.info = [];
    $scope.item=1;
    $scope.loadMore = function() {
      ShanksFactory.getData("./data/life/life-data/life-data"+$scope.item+".json",function(result){
        var data=result.data.data.options;
        angular.forEach(data, function (e) {
          $scope.info.push(e);
        })
        $scope.$broadcast("scroll.infiniteScrollComplete");
        $scope.item++;
      });
    };
    /*$scope.$on('$stateChangeSuccess', function() {
      $scope.loadMore();
    });*/
    $scope.back=function(){
      $ionicHistory.goBack();
    }
    $scope.show=function(){
      var hideSheet= $ionicActionSheet.show({
        cancelOnStateChange:true,
        titleText: "分享当前文章",
        buttons: [
          { text: "分享到Q Q" },
          { text: "分享到微信" },
          { text: "分享到微博" }
        ],
        buttonClicked: function(index) {
          /*console.log('操作了第'+index+'个文章');*/
          return true;
        },
        cancelText: "取消",
        cancel: function() {

         /* console.log('执行了取消操作');*/
        }
      });
    }
  }])
  .controller("classifyListController",["$scope","$stateParams","ShanksFactory","$ionicScrollDelegate","$ionicHistory","$ionicLoading",function($scope,$stateParams,ShanksFactory,$ionicScrollDelegate,$ionicHistory,$ionicLoading){
    $scope.items=[];
    ShanksFactory.loadShow()
    var title=$stateParams.title;
    $scope.namE=$stateParams.name;
    var url="./data/classify/"+title+"/"+title+"1"+".json";
    ShanksFactory.getData(url,function(res){
      var arr=res.data.data.feeds;
      angular.forEach(arr,function (e) {
        $scope.items.push(e);
      })
      ShanksFactory.loadHide();
    })
    $scope.index=1;
    $scope.doLoad=function(){
      $scope.index++;
      ShanksFactory.getData("./data/classify/"+title+"/"+title+$scope.index+".json",function(res){
        var data=res.data.data.feeds;
        angular.forEach(data,function (res) {
          $scope.items.push(res);
        })
      })
      $scope.$broadcast("scroll.infiniteScrollComplete");
    }
    $scope.back=function(){
      $ionicHistory.goBack();
    }
  }])
  .controller("colDetailController",["$scope","ShanksFactory","$stateParams","$ionicScrollDelegate","$ionicHistory",function($scope,ShanksFactory,$stateParams,$ionicScrollDelegate,$ionicHistory){
    ShanksFactory.loadShow();
    $scope.largeimg=$stateParams.image;
    $scope.title=$stateParams.title;
    $scope.descripts=$stateParams.descripts;
    $scope.num=$stateParams.num;
    $scope.items=[];
    var url=ShanksFactory.setColdUrl($stateParams.index);
    ShanksFactory.getData(url,function(res) {
      var data=res.data.data.feeds;
      angular.forEach(data,function(res){
        $scope.items.push(res);
      })
      ShanksFactory.loadHide();
    })
    $scope.item = 1;
    $scope.loadMore = function () {
      var itemurl=ShanksFactory.setItemUrl($stateParams.index,$scope.item);
      ShanksFactory.getData(itemurl, function (result) {
        var data = result.data.data.feeds;
        angular.forEach(data, function (e) {
          $scope.items.push(e);
        })
        $scope.item++;
        $scope.$broadcast("scroll.infiniteScrollComplete");
      });
    };
    $scope.back=function(){
      $ionicHistory.goBack();
    }
  }])
  .controller("searchController",["$scope","$ionicHistory",function($scope,$ionicHistory){
    $scope.back=function(){
      $ionicHistory.goBack();
    }
  }])
  .controller("searchArticleController",["$scope","$stateParams","ShanksFactory","$ionicHistory",function($scope,$stateParams,ShanksFactory,$ionicHistory){
    ShanksFactory.loadShow();
    var count=$stateParams.count;
    $scope.keyword=$stateParams.title;
    var url="./data/search/search"+count+".json";
    $scope.items=[];
    ShanksFactory.getData(url,function(res){
      $scope.total=res.data.data.total_count;
      var data=res.data.data.feeds;
      angular.forEach(data,function(e){
        $scope.items.push(e);
      })
      ShanksFactory.loadHide();
    })
    $scope.back=function(){
      $ionicHistory.goBack();
    }
  }])
  .controller("detailController",["$scope","$stateParams","$ionicHistory","$ionicActionSheet",function($scope,$stateParams,$ionicHistory,$ionicActionSheet){
    $scope.title=$stateParams.title;
    $scope.image=$stateParams.image;
    $scope.avatar=$stateParams.avatar;
    $scope.description=$stateParams.description;
    $scope.catetitle=$stateParams.catetitle;
    $scope.cateimg=$stateParams.cateimg;
    $scope.time=$stateParams.time;
    $scope.back=function(){
      $ionicHistory.goBack();
    }
    $scope.show=function(){
      var hideSheet= $ionicActionSheet.show({
        cancelOnStateChange:true,
        titleText: "分享当前文章",
        buttons: [
          { text: "分享到Q Q" },
          { text: "分享到微信" },
          { text: "分享到微博" }
        ],
        buttonClicked: function(index) {
          /*console.log('操作了第'+index+'个文章');*/
          return true;
        },
        cancelText: "取消",
        cancel: function() {

          /* console.log('执行了取消操作');*/
        }
      });
    }
  }])
  .controller("bannerController",["$scope","$stateParams","$ionicHistory","$ionicActionSheet","ShanksFactory",function($scope,$stateParams,$ionicHistory,$ionicActionSheet,ShanksFactory){
    var index=$stateParams.index;
    ShanksFactory.getData("./data/banner.json",function(res){
      $scope.content=res.data[index];
    })
    $scope.back=function(){
      $ionicHistory.goBack();
    }
    $scope.show=function(){
      var hideSheet= $ionicActionSheet.show({
        cancelOnStateChange:true,
        titleText: "分享当前文章",
        buttons: [
          { text: "分享到Q Q" },
          { text: "分享到微信" },
          { text: "分享到微博" }
        ],
        buttonClicked: function(index) {
          /*console.log('操作了第'+index+'个文章');*/
          return true;
        },
        cancelText: "取消",
        cancel: function() {

          /* console.log('执行了取消操作');*/
        }
      });
    }
  }])
  .controller("loginController", ["$scope", "$ionicHistory","$state","ShanksFactory",function ($scope,$ionicHistory,$state,ShanksFactory) {
    $scope.back=function(){
      $ionicHistory.goBack();
    }
    $scope.info={
      emails:"",
      password:""
    }
    $scope.login=function(){
        ShanksFactory.login_info=true;
        $ionicHistory.goBack();
    }
  }])
  .controller("registerController", ["$scope","$ionicHistory" ,function ($scope,$ionicHistory) {
    $scope.back=function(){
      $ionicHistory.goBack();
    }
    $scope.data=function(){
      var mail_all=document.getElementById("mail").value;
      var mail_1=document.getElementById("mail_1");
      var mail_2=document.getElementById("mail_2");

      var pwd_all=document.getElementById("pwd").value;
      var pwd2_all=document.getElementById("pwd2").value;
      var pwd_1=document.getElementById("pwd_1");
      var pwd_2=document.getElementById("pwd_2");
      var pwd_3=document.getElementById("pwd_3");
      document.getElementById("mail").onfocus=function(){
        mail_1.style.display="none"
        mail_2.style.display="none"
      }
      document.getElementById("pwd").onfocus=function(){
        pwd_1.style.display="none"
        pwd_2.style.display="none"
      }
      document.getElementById("pwd2").onfocus=function(){
        pwd_3.style.display="none"
      }
      var reg2=/^[0-9]{6}$/;
      var reg=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;

      if(mail_all != "") {
        if(reg.test(mail_all) == false){
          mail_1.style.display = "block";
        }
      } else{
        mail_2.style.display = "block";
      }
      if(pwd_all != "") {
        if(reg2.test(pwd_all) == false){
          pwd_2.style.display = "block";
        }
      } else{
        pwd_1.style.display = "block";
      }
      if(pwd_all != pwd2_all ) {
        pwd_3.style.display = "block";
      }

    }
  }])
  .controller("forgetController",["$scope","$ionicHistory",function($scope,$ionicHistory){
    $scope.back=function(){
      $ionicHistory.goBack();
    }
  }])
  .controller("informationController", ["$scope", "$ionicHistory",function ($scope,$ionicHistory) {
    $scope.back=function(){
      $ionicHistory.goBack();
    }
  }])
  .controller("modifyController", ["$scope","$ionicHistory" ,function ($scope,$ionicHistory) {
    $scope.back=function(){
      $ionicHistory.goBack();
    }
  }])
  .controller("selfcenterController", ["$scope","$ionicHistory","$state" ,"$stateParams",function ($scope,$ionicHistory,$state,$stateParams) {
    $scope.index=0;
    $scope.back=function(){
      $state.go($stateParams.state);
    }
    $scope.items=["我的收藏","我的参与"]
    $state.go("myselfCenter.left");
    $scope.goOther=function(index){
      $scope.index=index;
      if(index==0){
        $state.go("myselfCenter.left");
      }else{
        $state.go("myselfCenter.right");
      }

    }
  }])
