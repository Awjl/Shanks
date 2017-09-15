angular.module("ShanksService",[])
  .factory("ShanksFactory",["$http","$ionicLoading",function($http,$ionicLoading){
    return{
      getData:function(url,call_back){
        $http.get(url)
          .then(function success(res){
              call_back(res);
          },function err(err){
            console.log(err);
          })
      },
      concatArr:function(arr){
        var small_img=[];
        var big_img=[];
        var new_arr=[];
        for(var i=0;i<arr.length;i++){
          if(arr[i].type==1){
            small_img.push(arr[i]);
          }else{
            big_img.push(arr[i]);
          }
        }
        var bi=0;
        var si=0;
        for(var j=0;j<20;j++){
          if((j==4||j==9||j==14||j==19)&&bi<big_img.length){
            new_arr.push(big_img[bi]);
            bi++;
          }else{
            new_arr.push(small_img[si]);
            si++;
          }
        }
        return new_arr;
      },
      setColdUrl:function(index){
        if(index>13){
          index=0;
        }
        var url="./data/column/coldetail/cold"+index+"1.json";
        return url;
      },
      setItemUrl:function(index,item){
        if(index>13){
          index=0;
        }
        var itemUrl="./data/column/coldetail/cold"+index+item+".json";
        return itemUrl;
      },
      loadShow:function(){
        $ionicLoading.show();
      },
      loadHide:function(){
        $ionicLoading.hide();
      },
      login_info:false
    }
  }])
