const tagList = document.querySelector(".search-content");
const inputText = document.querySelector("input");
const removeAllBtn = document.querySelector(".removeAll-btn")

let tags = ["reactJs","MongoDB"];

createTag();

function createTag(){
    console.log("12212")
    tagList.innerHTML = "";
    tags.forEach((tag, index )=> {
        let item = `<li>
            ${tag}
            <i class="fa-sharp fa-solid fa-xmark close-btn" onclick="removeTag(this, '${index}')"></i>
        </li>`  
        tagList.innerHTML += item;
    });
    tagList.appendChild(inputText);
    inputText.focus();
}

inputText.addEventListener("keyup", addTag);

function addTag(e){
    if(e.key == "Enter"){
        let contentTag = e.target.value.trim();
        if(contentTag != "" && !tags.includes(contentTag)){
            tags.push(contentTag);
            createTag();  
        }   
        e.target.value = '';    
    }
}



function removeTag(element,tagIndex){
    tags.splice(tagIndex,1);
    element.parentElement.remove();
    createTag();
}

removeAllBtn.addEventListener("click", removeAll)

function removeAll(){
    tags = [];
    createTag()
}



