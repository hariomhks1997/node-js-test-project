const url=window.location.href
const parts = url.split('/');
const lastPart = parts[parts.length - 1];
console.log(lastPart)
async function abc(){
    try{
        const get = await axios.get("http://localhost:3000/add-product")
        console.log(get)
        for (var i = 0; i < get.data.length; i++) {
            
            showdata(get.data[i])
          ///window.location.href="/"
        }
    }catch(err){
console.log(err)
    }
   
}
abc()
function showdata(obj){
//     if(obj.sellingprice==lastPart){
// console.log(obj)
// const showdata=document.getElementById("showdata").innerHTML+=obj.items+obj.sellingprice+obj.fooditems
// console.log(showdata)
//     }
    const parentelement1 = document.getElementById("itemsofelectronics")
    const parentelement2 = document.getElementById("itemsoffood")
    const parentelement3 = document.getElementById("itemsofskincare")
    const parentelement4 = document.getElementById("total")
    parentelement4.style.display = "contents"

    var deletebtn1 = document.createElement("button")
    var deletebtn2 = document.createElement("button")
    // deletebtn1.style.marginRight="0%"
    // deletebtn2.style.marginRight="0%"
    const span=document.createElement("p")
    span.style.display="flex"
    span.style.alignItems="center"

    span.appendChild(deletebtn1)
    span.appendChild(deletebtn2)
    deletebtn1.appendChild(document.createTextNode("DELETE ORDER"))
deletebtn1.style.fontWeight="bold"
deletebtn2.style.fontWeight="bold"
    deletebtn2.appendChild(document.createTextNode("EDIT ORDER"))

    const price = parseInt(obj.sellingprice)
    parentelement4.textContent = parseInt(parentelement4.textContent) + price
    if (obj.items == "Electronics") {
    
        var childelem1 = document.createElement("span");
childelem1.style.display="flex";

childelem1.style.fontSize="1vw"
childelem1.style.justifyContent="space-between"


const p1=document.createElement("div")

p1.append(document.createTextNode(obj.sellingprice + "-" + obj.fooditems + "-" + obj.items))

childelem1.appendChild(p1)
childelem1.appendChild(span)

parentelement1.appendChild(childelem1)

    }
    else if (obj.items == "Food") {
       
        var childelem2 = document.createElement("span");
childelem2.style.display="flex";

childelem2.style.fontSize="1vw"
childelem2.style.justifyContent="space-between"

const p2=document.createElement("p")

p2.append(document.createTextNode(obj.sellingprice + "-" + obj.fooditems + "-" + obj.items))
childelem2.appendChild(p2)
childelem2.appendChild(span)

parentelement2.appendChild(childelem2)
    }
    else {
       
        var childelem3 = document.createElement("span");
childelem3.style.display="flex";

childelem3.style.fontSize="1vw"
childelem3.style.justifyContent="space-between"

const p3=document.createElement("p")

p3.append(document.createTextNode(obj.sellingprice + "-" + obj.fooditems + "-" + obj.items))
childelem3.appendChild(p3)
childelem3.appendChild(span)

parentelement3.appendChild(childelem3)
    }
    deletebtn1.onclick = async () => {
        if (obj.items == "Electronics") {
            parentelement1.removeChild(childelem1);
        }
        else if (obj.items == "Food") {
            parentelement2.removeChild(childelem2);
        }
        else {
            parentelement3.removeChild(childelem3);
        }
        const price = parseInt(obj.sellingprice)
        parentelement4.textContent = parseInt(parentelement4.textContent) - price;
        try {
            const delet = await axios.delete(`http://localhost:3000/deleteuser/${obj.id}`)
            console.log(delet)

        } catch (err) {
            console.log(err)
        }

    }
    deletebtn2.onclick = async () => {
        if (obj.items == "Electronics") {
            parentelement1.removeChild(childelem1);
           //document.getElementById("electronictag").value=obj.items
        }
        else if (obj.items == "Food") {
            parentelement2.removeChild(childelem2);
           // document.getElementById("foodtag").value=obj.items
        }
        else {
            parentelement3.removeChild(childelem3);
          //  document.getElementById("skincaretag").value=obj.items
        }
        const price = parseInt(obj.sellingprice)
        parentelement4.textContent = parseInt(parentelement4.textContent) - price;
        // try {
        //     const delet = await axios.delete(`http://localhost:3000/add-product/${obj.id}`)
        //     console.log(delet)

        // } catch (err) {
        //     console.log(err)
        // }

      document.getElementById("usernametag").value=obj.sellingprice;
      document.getElementById("producttag").value=obj.fooditems;
     document.getElementById("origin").value=obj.items;
     document.getElementById("edit").value=obj.id;

    } 
}


