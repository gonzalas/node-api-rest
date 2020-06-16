const article1Title = document.getElementById('article-1-title');
const article1Desc = document.getElementById('article-1-description');
const article2Title = document.getElementById('article-2-title');
const article2Desc = document.getElementById('article-2-description');

fetch('http://localhost:3000/posts')
    .then((result) => {
        return result.json();
    })
    .then((data) => {
        console.log(data);
        article1Title.innerHTML = data[0].title;
        article1Desc.innerHTML = data[0].description;
        article2Title.innerHTML = data[1].title;
        article2Desc.innerHTML = data[1].description;
    });