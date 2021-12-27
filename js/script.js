document.body.innerHTML=`<div class="Heading-Container">
<h1 class="font-effect-fire"><span class="blue">ICE</span> <span>and</span> <span class="orange">FIRE</span></h1>
<img class="icon" src="https://www.pgsoft.com/uploads/Games/Images/aeb253f6-8f49-4ebb-9301-b5d8e6c61656.png" width="150" heigth="100" alt="icon">
</div>
<div id="maincontainer" class="main-container" ></div>
</br>
</br>
`;

const url="https://www.anapioficeandfire.com/api/books"
const fetchData= async()=>{
    try{
      const response=await fetch(url);
      console.log(response)
      const data=await response.json();
      console.log(data) 
    maincontainer.innerHtml="";
    data.forEach((data)=>{
        data.characters=character(data)
        console.log(data.characters)
        displayData(data);

       
            
    });
        
    }catch(error){
        console.log("Data not found :( ")

    }
}

fetchData();
function character(data) {
    let arr=[]
    for(i=0;i<5;i++){
        arr.push(data.characters[i])

    }
    return(arr)
}

const displayData=(objects)=>{
    maincontainer.innerHTML+=`
    </br>

    <div class = container>
    <ol>
    <h3 class="title" font-family="Lorem ipsum dolor sit amet">Book Name:    <b><span>${objects.name}</span></b></h3>
    </br>
    <h6 class="details">ISBN Number:    <i><span>${objects.isbn}</span></i></h6>
    <h6 class="details">Total Pages:    <i><span>${objects.numberOfPages}</span></i></h6>
    <h6 class="details">Author Name:    <u><span>${objects.authors}</span></u></h6>
    <h6 class="details">Publisher Name: <b><span>${objects.publisher}</span></b></h6>
    
    <h5 class="details">Character Name(api):
    <div> <ul><li><button class="btn" onclick="location.href='${objects.characters[0]}'">
    Character 1 </button></li>
    <li><button class="btn" onclick="location.href='${objects.characters[1]}'">
    Character 2 </button></li>
   <li> <button class="btn" onclick="location.href='${objects.characters[2]}'">
    Character 3 </button></li>
    <li> <button class="btn" onclick="location.href='${objects.characters[3]}'">
    Character 4 </button></li>
    <li><button class="btn" onclick="location.href='${objects.characters[4]}'">
    Character 5 </button></li>
    </ul></h5> 
    </ol>
    </div>
   
    </div>`;
    
}
