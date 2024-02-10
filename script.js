const recipesContainer=document.querySelector('.recipes-container');
const serchbr=document.querySelector('.serchbx');
const btn=document.querySelector('.btn');

async function  fetchdataApi(data){
    recipesContainer.innerHTML='ferching.......';
    // recipesContainer.innerHTML=`<img src="${loading.gif}">`;
   const responce= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${data}`)
   const revived=await responce.json();
    console.log(revived);
    recipesContainer.innerHTML='';
    revived.meals.forEach(element => {
        console.log(element);
       
        const recipediv=document.createElement('div');
        recipediv.classList.add('recipee');
        recipediv.innerHTML=`
        <img src="${element.strMealThumb}">
        <h3>${element.strMeal}<h3>
        <p>${element.strArea}</p>
        <a href="${element.strYoutube}">Recipes Video</a>
        `
        recipesContainer.appendChild(recipediv);
    });
}

btn.addEventListener('click',function(eve){
    eve.preventDefault();
    // let val=serchbr.innerHTML;
    // console.log(val);
    const data= serchbr.value;
    fetchdataApi(data);
})