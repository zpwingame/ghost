window.ready = function(){
    var result = [];
    var root = document.getElementById('root');
    fetch('http://localhost:3000/location').then(response=>{
        return response.json().then(item=>{
            result = filter(item);
            root.appendChild('<div>hello world</div>')
            console.log(result)
        })
    })
}
function filter(list){
   return list.filter(function(item){
       return item.price<200;
   })
}