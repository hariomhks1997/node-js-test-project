console.log("dummy")
const ratingInputs = document.querySelectorAll('.rating input');
     async function a(event){
        event.preventDefault()
        let rate;
        ratingInputs.forEach(input=>{
            if(input.checked){
                rate=input.value
            }
        })
        const pros=event.target.pros.value;
        const cons=event.target.cons.value;
        const companyname=event.target.companyname.value;
        let rating=rate
       const obj={
        companyname,
        pros,
        cons,
        rating
       }
       try {
                const post = await axios.post("http://localhost:3000/add-user",obj)
                console.log(post)
               // window.location.href="http://localhost:3000/demopage"

               alert(`Company Name: ${obj.companyname} Rating: ${obj.rating} `)
               

            } catch (err) {
                console.log(err)
            }
           
    
       }
       
       
    async function b(event){
        event.preventDefault()
       const name=event.target.searchname.value;
        try {
            const get = await axios.get("http://localhost:3000/add-user")
            console.log(get)
            for (var i = 0; i < get.data.length; i++) {
                showuseronscreen(name,get.data[i])
            }
        } catch (err) {
            console.log(err)
        }
      function showuseronscreen(name,obj){
       
        if(name==obj.companyname){
           const ul=document.getElementById("ul")
           const header=document.createElement("header")
          
           header.append(document.createTextNode(`Company Name : ${obj.companyname}`))
          header.style.marginTop="1rem"
           const header1=document.createElement("header")
           header1.append(document.createTextNode(`Rating : ${obj.rating}`))
           const li=document.createElement("li")
           li.append(document.createTextNode(`Pros : ${obj.pros}`))
           const li1=document.createElement("li")
           li1.append(document.createTextNode(`Cons : ${obj.cons}`))
           //const rating=document.getElementById("ratn")
           ul.appendChild(header)
           ul.appendChild(header1)
           ul.appendChild(li)
           ul.appendChild(li1)
          
           ////ul.appendChild(rating)
        }

      }
    }