 //Array con plantas de vanilla
 urlPlantasVanilla = [
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/peacebloom",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/silverleaf",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/earthroot",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/Mageroyal",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/Briarthorn",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/Stranglekelp",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/Bruiseweed",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/Wild-Steelbloom",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/Grave-Moss",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/Kingsblood",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/Liferoot",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/Fadeleaf",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/Goldthorn",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/khadgars-whisker",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/Wintersbite",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/Firebloom",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/Purple-Lotus",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/arthas-tears",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/Sungrass",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/Blindweed",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/Ghost-Mushroom",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/Gromsblood",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/Golden-Sansam",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/Dreamfoil",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/Mountain-Silversage",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/Plaguebloom",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/Icecap",
]

//Array con plantas de TBC
urlPlantasTBC = [
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/felweed",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/terocone",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/mana-thistle",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/ragveil",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/netherbloom",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/ancient-lichen",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/nightmare-vine",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/dreaming-glory"
]

//Array con Pergaminos
urlPergaminos = [
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/scroll-of-agility-iv",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/scroll-of-agility-v",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/scroll-of-spirit-v",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/scroll-of-strength-iv",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/scroll-of-strength-v"
]

//Array con todas las menas
urlMenas = [
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/copper-ore",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/tin-ore",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/iron-ore",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/silver-ore",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/gold-ore",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/mithril-ore",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/Truesilver-ore",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/Dark-Iron-ore",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/Thorium-ore",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/fel-iron-ore",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/adamantite-ore",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/Khorium-ore",
    "https://api.nexushub.co/wow-classic/v1/items/pagle-alliance/Nethercite-ore"
]


// Funcion de las traducciones

 //Traduce todos los productos
 function TraduccionName(inglesName) {
    //Traduccion plantas classic
    if (inglesName == "Peacebloom") {
        productName = "Flor de Paz"
    } else if (inglesName == "Silverleaf") {
        productName = "Hojaplata"
    } else if (inglesName == "Earthroot") {
        productName = "Raíz de tierra"
    } else if (inglesName == "Mageroyal") {
        productName = "Marregal"
    } else if (inglesName == "Briarthorn") {
        productName = "Brezospina"
    } else if (inglesName == "Stranglekelp") {
        productName = "Alga estranguladora"
    } else if (inglesName == "Bruiseweed") {
        productName = "Hierba cardenal"
    } else if (inglesName == "Wild Steelbloom") {
        productName = "Acérita salvaje"
    } else if (inglesName == "Grave Moss") {
        productName = "Musgo de tumba"
    } else if (inglesName == "Kingsblood") {
        productName = "Sangrerregia"
    } else if (inglesName == "Liferoot") {
        productName = "Vidarraíz"
    } else if (inglesName == "Fadeleaf") {
        productName = "Pálida"
    } else if (inglesName == "Goldthorn") {
        productName = "Espina de oro"
    } else if (inglesName == "Wintersbite") {
        productName = "Ivernalia"
    } else if (inglesName == "Khadgar's Whisker") {
        productName = "Mostacho de Khadgar"
    } else if (inglesName == "Purple Lotus") {
        productName = "Loto cárdeno"
    } else if (inglesName == "Firebloom") {
        productName = "Flor de Fuego"
    } else if (inglesName == "Arthas' Tears") {
        productName = "Lágrimas de Arthas"
    } else if (inglesName == "Golden Sansam") {
        productName = "Sansam dorado"
    } else if (inglesName == "Sungrass") {
        productName = "Solea"
    } else if (inglesName == "Blindweed") {
        productName = "Carolina"
    } else if (inglesName == "Dreamfoil") {
        productName = "Hojasueño"
    } else if (inglesName == "Mountain Silversage") {
        productName = "Salviargenta de montaña"
    } else if (inglesName == "Gromsblood") {
        productName = "Gromsanguina"
    } else if (inglesName == "Ghost Mushroom") {
        productName = "Champiñón fantasma"
    } else if (inglesName == "Plaguebloom") {
        productName = "Flor de peste"
    } else if (inglesName == "Icecap") {
        productName = "Setelo"
    }

    //Plantas de TBC
    else if (inglesName == "Felweed") {
        productName = "Hierba vil"
    } else if (inglesName == "Ragveil") {
        productName = "Velada"
    } else if (inglesName == "Netherbloom") {
        productName = "Flor abisal"
    } else if (inglesName == "Terocone") {
        productName = "Teropiña"
    } else if (inglesName == "Mana Thistle") {
        productName = "Cardo de maná"
    } else if (inglesName == "Ancient Lichen") {
        productName = "Liquen antiguo"
    } else if (inglesName == "Nightmare Vine") {
        productName = "Vid pesadilla"
    } else if (inglesName == "Dreaming Glory") {
        productName = "Gloria de ensueño"
    }

    //Pergaminos
    else if (inglesName == "Scroll of Agility IV") {
        productName = "Pergamino de Agilidad IV"
    } else if (inglesName == "Scroll of Strength IV") {
        productName = "Pergamino de Fuerza IV"
    } else if (inglesName == "Scroll of Strength V") {
        productName = "Pergamino de Fuerza V"
    } else if (inglesName == "Scroll of Agility V") {
        productName = "Pergamino de Agilidad V"
    } else if (inglesName == "Scroll of Spirit V") {
        productName = "Pergamino de espíritu V"
    }

    //Menas
    else if (inglesName == "Copper Ore") {
        productName = "Mena de cobre"
    } else if (inglesName == "Tin Ore") {
        productName = "Mena de estaño"
    } else if (inglesName == "Fel Iron Ore") {
        productName = "Mena de hierro vil"
    } else if (inglesName == "Nethercite Ore") {
        productName = "Mineral de abisalita"
    } else if (inglesName == "Dark Iron Ore") {
        productName = "Mena de hierro negro"
    } else if (inglesName == "Truesilver Ore") {
        productName = "Mena de Veraplata"
    } else if (inglesName == "Thorium Ore") {
        productName = "Mena de torio"
    } else if (inglesName == "Silver Ore") {
        productName = "Mena de plata"
    } else if (inglesName == "Gold Ore") {
        productName = "Mena de oro"
    } else if (inglesName == "Mithril Ore") {
        productName = "Mena de mitril"
    } else if (inglesName == "Adamantite Ore") {
        productName = "Mena de adamantita"
    } else if (inglesName == "Khorium Ore") {
        productName = "Mena de korio"
    } else if (inglesName == "Iron Ore") {
        productName = "Mena de hierro"
    }

    return productName;
}
