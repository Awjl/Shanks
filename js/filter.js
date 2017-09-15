angular.module("ShanksFilter",[])
  .filter("getDate",function(){
      return function(){
        var date=new Date(arguments[0]);
        var mouse=date.getMonth()+1;
        var day=date.getDate();
        var time=mouse+"月"+day+"日";
        return  time;
      }
  })
  .filter('substr',function(){
    return function(){
      var val = arguments[0],
        start = arguments[1],
        count = arguments[2];
      if( count == undefined ){
        count = arguments[1];
        start = 0;
      }
      if( start == undefined ){
        start = 0;
        count = val.length;
      }
      return val.substr(start,count);
    }
  });
