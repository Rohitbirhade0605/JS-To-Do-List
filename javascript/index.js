// Dom Selectors -----
const input = document.querySelector("#search input");
const button = document.querySelector("button");
const taskBox = document.querySelector("#taskBox");
const unchecked = document.querySelector(".box");
const list = document.querySelector(".list");
const remove = document.querySelector(".delete");





// Functions ------------

 
    function createTask(){

        const input = document.querySelector("#search input").value.trim();
        const a = input.slice(0, 1).toUpperCase();
        const b = input.slice(1,43);
        const uppercaseInput = a + b;                      // Change first letter to UpperCase
        


        let adding = document.createElement("div");        // adding parent div inside taskBox 
            adding.classList.add("tasks");
      
        let divImg = document.createElement("div");        // adding div with bg img (unchecked) inside parent div
            divImg.classList.add("box");
      
            adding.appendChild(divImg);                    // append divimg to parent div
      
        let childDiv = document.createElement("div");      // adding child Div to parent div
            childDiv.classList.add("list");
            childDiv.textContent = uppercaseInput;         // sets childDiv text content as input value
      
            adding.appendChild(childDiv);                 
      
        let img = document.createElement("img");           // adding img (delete) to parent div
            img.classList.add("delete");
            img.src="./images/delete.png";
      
            adding.appendChild(img);
      
            
      
            taskBox.appendChild(adding);                   // adding parent div to our taskBox 
            
            saveData()                                     // saves data each time we create new set
    }

      
    
    function saveData() {
        localStorage.setItem("storage", (taskBox.innerHTML));       //Save data in form of func in local storage
    }

    function show(){
        taskBox.innerHTML = localStorage.getItem("storage");        //Shows the data to browser saved in SaveData()
    }




    // Event listners ---------

    button.addEventListener("click", ()=> {                   
        
        if (input.value === "") {                                // handling empty input value
            input.placeholder = "Please add your task first"    
        }
        else {
            createTask()                                            
            input.value = "";                                    //reset value and placeholder
            input.placeholder = ""
        }
    })



    input.addEventListener("keydown", (e)=> {                   
      if (e.key ==="Enter"){                                     //if input key "Enter" then func              

         if (input.value === "") {                               // handling empty input value
            input.placeholder = "Please add your task first"
         }
         else {
            createTask()                                         
            input.value = "";                                    //reset value and placeholder
            input.placeholder = ""
         }
    }
    else {
    }
    })



    taskBox.addEventListener("click", (e)=> {                    //target parent of selected child listner
        
       if (e.target.classList.contains("box")) {                 //action trigger if parent contains a child
           e.target.classList.toggle("boxSwitch")
           saveData()                                            // Saves data of eventlistner aswell
       }
       else if (e.target.classList.contains("delete")) {         
                e.target.parentElement.remove();                 //delete the parent by target child elem
                saveData()
       }
       else {

       }
    })

    

    show();                                                      // calls the local storage Getitem






     
       
          
 

   
           
