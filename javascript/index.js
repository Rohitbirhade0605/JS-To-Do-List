// Dom Selectors -----
const input = document.querySelector("#search input");
const button = document.querySelector("button");
const taskBox = document.querySelector("#taskBox");






// Functions ------------

 
    function createTask(){

        const input = document.querySelector("#search input").value.trim();


        let adding = document.createElement("div");         // adding parent div inside taskBox 
            adding.classList.add("tasks");
      
        let img1 = document.createElement("img");          // adding img1 (unchecked) inside parent div
            img1.classList.add("box");
            img1.src="./images/unchecked.png";
      
            adding.appendChild(img1);                     // append img1 to parent div
      
        let childDiv = document.createElement("div");     // adding child Div to parent div
            childDiv.classList.add("list");
            childDiv.textContent = input;                 // sets childDiv text content as input value
      
            adding.appendChild(childDiv);                 
      
        let img2 = document.createElement("img");        // adding img2 (delete) to parent div
            img2.classList.add("delete");
            img2.src="./images/delete.png";
      
            adding.appendChild(img2);
      
            
      
            taskBox.appendChild(adding);                 // adding parent div to our taskBox
      
      }


    // Event listners ---------

    button.addEventListener("click", ()=> {             
        createTask()   
        input.value = "";
    })


    input.addEventListener("keydown", (e)=> {
    if (e.key ==="Enter"){
        createTask()
        input.value = "";
    }
    })



