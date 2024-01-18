let divAll=document.querySelector(".m-divs");
let Sort=document.querySelector("#sort");
let Search=document.querySelector("#search");
let filterArr=[];
let copyArr=[]

function Show(){
fetch("http://localhost:3000/Pulse")
.then(res=>res.json())
.then(data=>{
    divAll.innerHTML=""
    copyArr=data
    filterArr=filterArr.length ||Search.value  ?filterArr:data;
    filterArr.forEach(element => {
        divAll.innerHTML+=`
        <div class="div8">
                        <h3>${element.name}</h3>
                        <div class="point">
                            <p>${element.des}</p>
                            ....................................
                            <h4>$${element.price}</h4>

                        </div>
                    </div>
        `
    });
})
}
Show()

Search.addEventListener("input", (e)=>{
    filterArr=copyArr;
    filterArr=filterArr.filter((el)=>
    el.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    )
    Show();
})



Sort.addEventListener("change", (e)=>{
    if(e.target.value==="as"){
        filterArr.sort((a,b) => a.price-b.price);
    }else if(e.target.value==="des"){
        filterArr.sort((a,b) => b.price-a.price);
    }else{
        filterArr=[]
    }
    Show();
})