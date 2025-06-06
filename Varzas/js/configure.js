import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getFirestore, collection, getDocs, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";

// Конфигурация Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDObglb4gU10Xms1Es6-45UMSeT5vZvBxg",
  authDomain: "varzas.firebaseapp.com",
  projectId: "varzas",
  storageBucket: "varzas.firebasestorage.app",
  messagingSenderId: "256701912950",
  appId: "1:256701912950:web:02c63f4bd8d3e893828c57"
};

// Инициализация Firebase
let app;
try {
  app = initializeApp(firebaseConfig);
  console.log("Firebase инициализирован успешно");
} catch (error) {
  console.error("Ошибка при инициализации Firebase:", error);
}

// Инициализация Firestore, если Firebase инициализирован
let db;
if (app) {
  try {
    db = getFirestore(app);
    console.log("Firestore подключен успешно");
  } catch (error) {
    console.error("Ошибка при подключении к Firestore:", error);
  }
}

// Функция для создания коллекции и документа на основе значения <title> страницы
const createCollectionAndDoc = async () => {
  if (!db) {
    console.error("Firestore не подключён. Операция отменена.");
    return;
  }

  // Получаем title страницы как есть
  const collectionName = document.title;
  const docName = collectionName;

  if (!collectionName) {
    console.error("Не удалось получить значение title страницы.");
    return;
  }

  try {
    const collRef = collection(db, collectionName);
    const snapshot = await getDocs(collRef);

    if (snapshot.empty) {
      const docRef = doc(collRef, docName);
      await setDoc(docRef, { status: "okay", createdAt: new Date() });
      console.log(`Создана коллекция "${collectionName}" с документом "${docName}".`);
    } else {
      console.log(`Коллекция "${collectionName}" уже существует.`);
    }
  } catch (error) {
    console.error("Ошибка при работе с Firestore:", error);
  }
};



// При загрузке страницы вызываем функцию для создания коллекции и документа
window.addEventListener('DOMContentLoaded', createCollectionAndDoc);
