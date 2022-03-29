import {HashStorage} from "./HashStorage.js";

const cocktailsStorage = new HashStorage();

cocktailsStorage.addValue('Маргарита', {
    name: "Маргарита",
    isAlcohol: "Да",
    ingredients: "Водка Finlandia: 50ml,Кофейный ликер: 25ml,Лед в кубиках: 120g",
    recipe: "Наполни стакан кубиками льда доверху, затем налей кофейный ликер 25 мл, водку 50 мл и размешай коктейльной ложкой.",
})
cocktailsStorage.addValue("Пеликан", {
    name: "Пеликан",
    isAlcohol: "Нет",
    ingredients: "Гренадин Monin: 10ml, Клубничный сироп Monin 10ml, Персиковый сок 150ml, Лимонный сок: 15ml, Банан: 110g, Клубника: 50g, Дробленый лед: 60g",
    recipe: "Положи в блендер очищенную и нарезанную половинку банана и клубнику 2 ягоды. Налей лимонный сок 15 мл, гренадин 10 мл, клубничный сироп 10 мл и персиковый сок 150 мл. Добавь в блендер совок дробленого льда и взбей. Перелей в хайбол. Укрась кружком банана и половинкой клубники на коктейльной шпажке.",
})
cocktailsStorage.addValue("Мохито", {
    name: "Мохито",
    isAlcohol: "Да",
    ingredients: "½ лайма, 10 свежих листьев мяты, 2 чайные ложки коричневого сахара, 200 г дроблёного льда, 50 мл белого рома, 100 мл содовой.",
    recipe: "Разрежьте лайм на 4 дольки. Положите листья мяты и 2 дольки лайма в стакан из толстого стекла. Подавите мяту и лайм мадлером или ложкой, чтобы они пустили сок. Добавьте ещё 1 дольку лайма и сахар, а после снова подавите.",
})
cocktailsStorage.addValue("Дайкири", {
    name: "Дайкири",
    isAlcohol: "Да",
    ingredients: "60 мл белого рома, 30 мл сока лайма, 1 чайная ложка сахарного сиропа, 200 г дроблёного льда.",
    recipe: "Влейте ром, сок лайма и сахарный сироп в шейкер для коктейлей. Добавьте лёд, накройте крышкой и встряхните до охлаждения. Процедите в охлаждённый бокал.",
})

const showResult = (cocktailsStorage) => {
    let names = document.querySelector("#name").innerHTML = cocktailsStorage.name
    let alcohol = document.querySelector("#isAlcohol").innerHTML = cocktailsStorage.isAlcohol
    let ingredient = document.querySelector("#ingredients").innerHTML = cocktailsStorage.ingredients
    let recipes = document.querySelector("#recipe").innerHTML = cocktailsStorage.recipe
}

const addButton = document.getElementById('addCocktail');
addButton.onclick = function () {
    const name = window.prompt('Введите название коктеля');
    let isAlcohol = ""
    isAlcohol = confirm("Напиток алкогольный?") ? isAlcohol = "Да" : isAlcohol = "Нет"
    const ingredients = window.prompt("Введите ингридиенты");
    const recipe = window.prompt("Опишите приготовление коктейля")
    cocktailsStorage.addValue(name, {isAlcohol, ingredients, recipe});

    /*let list = JSON.stringify(cocktailsStorage.state.name)
    document.getElementById("list").innerText = list*/
    showResult((name, {name, isAlcohol, ingredients, recipe}))
    console.log(cocktailsStorage.state)
}

const deleteButton = document.getElementById('deleteCocktail');
deleteButton.onclick = function () {
    const name = window.prompt('Введите название коктеля')
    const result = cocktailsStorage.deleteValue(name)
    !result ? alert("Нет такого коктейля!") : console.log(cocktailsStorage.state) & alert("Коктейль удален!")

}

const getKeys = document.getElementById("allCocktails");
getKeys.onclick = function () {
    alert(cocktailsStorage.getKeys([name]))
}

const getButton = document.getElementById('getCocktail');
getButton.onclick = function () {
    const name = window.prompt('Введите название коктеля');
    const result = cocktailsStorage.getValue(name)

    !result ? alert("Нет такого коктейля!") : showResult(result)
    console.log(result)
}
