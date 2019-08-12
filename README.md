# TheBestEqualizer

Our equalizer is a high-level user interface that allows users to control the gain levels of an audio signal with the help of graphical controls. The graphical controllers and sliders allow the user to control the strength and correct the frequency response within a particular audio band.

This equalizer works like a series of filters. The input signal passes through each filter of a particular frequency, and by changing the slider positions, the frequency components of the signal can be boosted or cut. The vertical position of each slider denotes the gain applied at the frequency band. Thus, the knobs look like a graph depicting the equalizer`s response with respect to its frequency.

"TheBestEqualizer" is easier to use than parametric (physics) equalizers, as it implement the filters in a user-friendly manner.

[TheBestEqualizer](https://thebestequalizer.herokuapp.com/) - TheBestEqualizer on heroku

## Getting Started

We Are assuming that you are using Linux Ubuntu & you have to install or clone such packages

[Install MongoDB Community](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/) - step by step (official page)

Clone this repository to your local machine.
##### clone repository
`$ git clone https://github.com/lv-411-nodejs/TheBestEqualizer.git`

Go to the local copy of repository. Open terminal and run the following command
##### install all dependencies defined in package.json
`$ npm i`

##### run client dev server (each one in separate terminal)
`$ npm run dev:client`

##### run server (each one in separate terminal)
`$ npm run dev:server`

### ENVIRONMENT VARIABLES
##### (.env) - file in root of project
* PORT - by default 8080 (server)
* SECRET - Your private key for tokens
* DB_CONNECTION - Your mongodb connection string (local)

## Built With

* [Express](https://expressjs.com/) - server framework
* [React](https://reactjs.org/) - client library

## Authors
See also the list of [contributors](https://github.com/lv-411-nodejs/TheBestEqualizer/graphs/contributors) who participated in this project.
