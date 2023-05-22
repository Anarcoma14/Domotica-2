const url = "https://domotica-cuauhtemoc.onrender.com/api/v1/rooms"
const recamara = document.querySelector(".houseRecamara");
const cocina = document.querySelector(".houseCocina");
const banio = document.querySelector(".houseBanio");
const cochera = document.querySelector(".houseCochera");
const send = document.querySelector(".send");

const loadRooms = async (num)=>{
    await axios.get(url)
        .then(response => {
            const {data} = response;
            const rooms = data.room.map(obj => obj.energy);
            if(rooms[0]){
                recamara.classList.add("active");
            }else{
                recamara.classList.remove("active");
            }
        
            if(rooms[1]){
                cocina.classList.add("active");
            }else{
                cocina.classList.remove("active");
            }
        
            if(rooms[2]){
                banio.classList.add("active");
            }else{
                banio.classList.remove("active");
            }
        
            if(rooms[3]){
                cochera.classList.add("active");
            }else{
                cochera.classList.remove("active");
            }
        })
        .catch(error => console.log(error));
}

addEventListener("load", loadRooms());
    
recamara.addEventListener("click",()=>{
    recamara.classList.toggle("active");
})

cocina.addEventListener("click",()=>{
    cocina.classList.toggle("active");
})

banio.addEventListener("click",()=>{
    banio.classList.toggle("active");
})

cochera.addEventListener("click",()=>{
    cochera.classList.toggle("active");
})

send.addEventListener("click", async ()=>{
    await axios.patch(url, {
        room: 1,
        energy:recamara.classList.contains("active")
      })
    await axios.patch(url, {
        room: 2,
        energy:cocina.classList.contains("active")
      })
    await axios.patch(url, {
        room: 3,
        energy:banio.classList.contains("active")
      })
    await axios.patch(url, {
        room: 4,
        energy:cochera.classList.contains("active")
      })
})

