"use strict";
exports.__esModule = true;
var carnivoreClass_1 = require("./files.ts/carnivoreClass");
var herbivoreClass_1 = require("./files.ts/herbivoreClass");
var omnivoreClass_1 = require("./files.ts/omnivoreClass");
var animal1 = new carnivoreClass_1.Carnivore('Leon', 25, 'Terrestre', 190, true);
var animal2 = new carnivoreClass_1.Carnivore('Foca', 20, 'Acuatico', 85, false);
var animal3 = new herbivoreClass_1.Hervibore('Caballo', 10, 'Terrestre', 150, true);
var animal4 = new herbivoreClass_1.Hervibore('Elefante Africano', 60, 'Terrestre', 5000, false);
var animal5 = new omnivoreClass_1.Omnivore('Oso', 15, 'Terreste', 400, true);
var animal6 = new omnivoreClass_1.Omnivore('Perro', 5, 'Terrestre', 7, true);
var searchAnimal = animal1.getWeight();
console.log(searchAnimal);
animal4.feed();
