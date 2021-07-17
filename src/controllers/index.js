const get = helperFecthApi();
const app = new Vue({
    el:"#app",
      data() {
          return {
              items: []
        }
      },
      created:function(){
        const getData = async ()=>{
            this.$data.items = await get('https://ghibliapi.herokuapp.com/films/',{'content-type':'application/json'});
            console.log(this.$data.items);
            this.$data.items = this.$data.items.map(data=>{
                const {title,original_title,producer,director} = data;
                return {title,original_title,producer,director};
            });
        }
        getData();
        
        
      }
      
  }
  )