const newPost = document.getElementById("new-post");
const newPostForm = document.getElementById("new-post-form");

//Добавление нового поста
newPost.addEventListener("click", () => {
    newPostForm.style.display = "flex";
    newPost.style.display = "none";
})
//Открытие проводника
const OpenFileButton = document.getElementById('openFileBtn');
const OpenImageButton = document.getElementById("openImagesBtn");
const fileInput = document.getElementById('fileInput');

OpenFileButton.addEventListener('click', () => {
    fileInput.click();
});
OpenImageButton.addEventListener("click", () => {
    fileInput.click()
})

fileInput.addEventListener('change', () => {
    const files = fileInput.files;
    console.log('Выбрано файлов:', files.length);
    // Можно добавить обработку выбранных файлов здесь
});

//Генерация рандомного имени
const usernames = [
  "Али", "Магомед", "Зелимхан", "Руслан", "Саид", "Шамиль", "Хусейн", "Бекхан",
  "Исмаил", "Мурат", "Рамзан", "Ахмат", "Нурди", "Знаур", "Камил", "Аслан",
  "Зияудин", "Леча", "Муса", "Басаев", "Гамид", "Халид", "Бекхан", "Ваха",
  "Мухаммад", "Горхан", "Аюб", "Рамзан", "Ислам", "Ахмед", "Мурад", "Султан",
  "Эльхан", "Шаурбек", "Абдул", "Леван", "Эльдар", "Зураб", "Джамал", "Магомедали",
  "Хасан", "Рашид", "Махач", "Адам", "Ваха", "Абдулла", "Яхья", "Рамиль",
  "Сулейман", "Тамерлан", "Сергей", "Виталий", "Назар", "Руслан", "Ибрагим", "Ахсар",
  "Махмуд", "Заур", "Шах", "Гамзат", "Абдула", "Шамиль", "Ислам", "Зайнудин",
  "Муса", "Ваха", "Мирза", "Рамзан", "Махач", "Абдулвахаб", "Султан", "Исмаил",
  "Гамид", "Эльхан", "Бекхан", "Магомедрасул", "Мухаммад", "Зелимхан", "Нурдин",
  "Валид", "Ахмед", "Аслан", "Рамзан", "Давуд", "Мурат", "Шамиль", "Зинаудин",
  "Хусейн", "Леча", "Магомед", "Рамзан", "Ваха", "Муса", "Саид", "Ислам",
  "Хасан", "Эльдар", "Горхан", "Ахмат", "Абдулла", "Бекхан", "Шаурбек"
];


const generateBtn = document.getElementById("generateBtn");
const usernameInput = document.getElementById("usernameInput");

generateBtn.addEventListener("click", function() {
    const randomName = usernames[Math.floor(Math.random() * usernames.length)];
    usernameInput.value = randomName;
});


const postMain = document.getElementById("post-main");
const hideShowPost = document.getElementById("hide-show-post");
const postData = document.getElementById("post-data");
const replySlash = document.getElementById("reply-slash");
const replyPost = document.getElementById("reply-post");

hideShowPost.addEventListener("click", () => {

    const isVisible = window.getComputedStyle(postMain).display !== "none";

    if (isVisible) {
        postMain.style.display = "none";
        hideShowPost.src = "img/plus.jpg";
        postData.style.borderTop = "0.1vw solid rgb(219, 219, 219)";
        postData.style.borderBottom = "0.1vw solid rgb(219, 219, 219)";
        replySlash.style.display = "none";
        replyPost.style.display = "none";
    } else {
        postMain.style.display = "block";
        hideShowPost.src = "img/minus.jpg";
        postData.style.border = "none";
        replySlash.style.display = "flex";
        replyPost.style.display = "flex";
    }
});



