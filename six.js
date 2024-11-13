const form = document.querySelector('form');
const container = document.querySelector('.image-container');
const container2 = document.querySelector('.second-container');
const input = document.getElementById('input')

// USING EVEMT LISTENER FOR TAKING INPUTS FROM 'HTML' ------------------>

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let query = form.querySelector('input').value;
    console.log(query);
    tvMazeApi(query);
})

//  TAKING INPUT END ---------------------------------------------------->

//  FETCH START WITH USING ASYNC AWAIT ------------------------------------->

async function tvMazeApi(query){
    const req = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${query}`)
    const movies = await req.json();
    console.log(movies);
    makeImages(movies)
    input.value = '';
}

//  FETCH END,, TAKING ELIMENTS FROM API------------------------------------>

function makeImages(movies){

//  CREATING ELEMENTS ----------------------------------------------------->

        const mainScreen = document.createElement('div')
        const screen = document.createElement('div');
        const screen2 = document.createElement('div');
        const img = document.createElement('img');
        const h = document.createElement('h');
        const h2 = document.createElement('h2');
        const h5 = document.createElement('h5');
        const div = document.createElement('div');
        const btn = document.createElement('button');
        img.src=movies.image.medium;
        
        // CREATING ELEMENTS END,, APPPEND START ---------------------------------------------------------->
        
        h5.append("Release Date = ", movies.premiered);
        h.append(movies.name);
        h2.append("summary");
        // console.log(h);
        screen.append(img, h, h5);
        // screen.append(h5);
        // screen.append(h);
        screen2.innerHTML = `${"Summary"}${movies.summary}`;
        console.log(h2);
        console.log(movies.summary);
        mainScreen.append(screen, screen2);
        container.append(mainScreen);
        // container.append(div);
        btn.append('+');
        screen2.style.display = "none";

//  APPEND END,, STYLE START ------------------------------------------------------------>

        screen.style.width = "212px";
        screen2.style.width = "250px";
        mainScreen.style.display = "flex";
        screen2.style.marginLeft = "20px";
        mainScreen.style.border = "2px solid white";
        mainScreen.style.backgroundColor = "white";
        mainScreen.style.width = "254px";
        mainScreen.style.height = "470px";
        img.style.width = "250px";
        screen.style.width = "250px";
        h2.style.width = "100px";
        h2.style.height = "auto";
        h.style.display = "flex";
        h.style.color = "rgb(255, 0, 0)";
        h.style.fontSize = "50px";
        h.style.fontWeight = "bolder";
        h.style.justifyContent = "center";
        h.style.border = "2px solid white";
        div.style.height = "30px";
        div.style.backgroundColor = "#555555";
        container.style.display = "flex";
        container.style.justifyContent = "row";
        container.style.flexWrap = "wrap";
        mainScreen.style.marginLeft = "20px";
        mainScreen.style.marginRight = "20px";
        mainScreen.style.marginBottom = "40px";



//  STYLE END -------------------------------------------------------------------------->

mainScreen.addEventListener('mouseover', () => screen2.style.display = "block");
mainScreen.addEventListener('mouseover', () => screen.style.display = "none");
mainScreen.addEventListener('mouseout', () => screen2.style.display = "none");
mainScreen.addEventListener('mouseout', () => screen.style.display = "block");
}

// START LOCAL STORAGE ----------------------------------------------------------->