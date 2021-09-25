const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const list = document.querySelector(".gallery");
const imgMarkup = createImgList(images);
list.insertAdjacentHTML('beforeend', imgMarkup)
list.classList = 'list_task3'
// const itemsEl = images.map((property) => {
//   const itemEl = document.createElement("li");
//   const imgEl = document.createElement("img");
//   imgEl.src = property.url;
//   imgEl.alt = property.alt;
//   imgEl.width = 320;
//   imgEl.height = 200;
//   imgEl.classList = 'item_task3'
//   itemEl.appendChild(imgEl);
//   return itemEl;
// });


// list.append(...itemsEl)
function createImgList(images) {
  return images
  .map(({url, alt})=>{
    return `
    <li class = "item_task3">
       <img src = '${url}' alt = '${alt}' width = '320' height = '200'>
    </li>`
  
  })
  .join('')
  
}
