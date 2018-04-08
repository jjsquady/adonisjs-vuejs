# AdonisJs with VueJs

### This project has build to learn Adonis basic stuff with VueJS integration.

> This 'guide' assumes that you have some knowledge about AdonisJS framework and it's basics.
> Some knowledge about JavaScript/ECMAScript6+, VueJS and Webpack can help you.
> If you dont have any this things, go ahead to the documentation - site/docs at end of this README.
> U are welcome! 

## Installation

Clone this repo, and install dependencies:

```$bash
$ git clone https://github.com/jjsquady/adonisjs-vuejs.git
$ cd adonisjs-vuejs
$ npm install
```

## Instructions

* Create a **database.sqlite** file in database folder.
* Change `DB_DATABASE=adonis` in **.env** file to `DB_DATABASE=database`.
* Run at terminal a migration and serve commands:

```$bash
$ adonis migration:run
$ adonis serve --dev
```
* Navigate to **http://127.0.0.1:3333** and bingo!

#### Credits

Created by Jorge "jjsquady" Gonçalves

Build with <3
* [AdonisJs](https://www.adonisjs.com)
* [VueJS](https://vuejs.org) 
* [Webpack](https://webpack.js.org).

