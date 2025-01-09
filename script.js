const GenerateMemeBtn = document.getElementById("mme-btn");
const GenerateMemeTittle = document.getElementById("mme-title");
const GenerateMemeImg = document.querySelector("img");
const GenerateMemeAuthor = document.getElementById("mme-author");

const update = (url, title, author) => {
    GenerateMemeImg.setAttribute("src", url); 
    GenerateMemeTittle.innerHTML = title;
    GenerateMemeAuthor.innerHTML = author;
};

const GenerateMeme = () => {
    fetch("https://meme-api.com/gimme/2")
        .then(res => res.json()) 
        .then(data => {
            const meme = data.memes[0]; 
            update(meme.url, meme.title, meme.author);
        })
        .catch(err => console.error("Error fetching meme:", err)); 
};

GenerateMemeBtn.addEventListener("click", GenerateMeme);

GenerateMeme();
