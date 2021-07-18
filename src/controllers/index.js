const get = helperFecthApi();
const app = new Vue({
    el:"#app",
      data() {
        return {
            ordenAZ:true,
            items: []
        }
      },
      created:function(){
        const getData = async ()=>{
            this.$data.items = await get('https://ghibliapi.herokuapp.com/films/',{'content-type':'application/json'});
            this.$data.items = this.$data.items.map(data=>{
                const {title,original_title,producer,director} = data;
                return {title,original_title,producer,director};
            });
            this.$data.items = this.ordenarA_Z;
        }
        getData();
      },
        computed:{
            ordenarZ_A:function(){
                let datos= this.$data.items;
                for(let i = 0; i < datos.length-1;i++){
                    let cambio = false;
                    for(let i = 0; i < datos.length-1;i++){
                        if(datos[i].title < datos[i+1].title){
                            aux = datos[i+1];
                            datos[i+1] = datos[i];
                            datos[i] = aux;
                            cambio = true;
                        }
                    }
            
                }
                return datos;
              },
              ordenarA_Z:function(){
                let datos= this.$data.items;
                for(let i = 0; i < datos.length-1;i++){
                    for(let i = 0; i < datos.length-1;i++){
                        if(datos[i].title > datos[i+1].title){
                            aux = datos[i+1];
                            datos[i+1] = datos[i];
                            datos[i] = aux;
                        }
                    }
                
                }
                return datos;
              }
        }
      
  }
  )