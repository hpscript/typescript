import {Item} from './item';
var elem = document.getElementById('output');
var aBook = new Item('はじめてのTypeScript', 2500);
aBook.say(elem);