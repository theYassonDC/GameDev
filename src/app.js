const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();
// Configs server
app.set('port', process.env.PORT || 40);
app.set('views', path.join(__dirname, 'views'))
app.engine('hbs', engine({
  defaultLayout: 'base',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  extname: '.hbs'
}));
app.set('view engine', 'hbs')

//  Routes
app.use(require('./routes/base'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('configs-global'));

// Iniciar
app.listen(app.get(`port`),()=>{
    console.log(`----------------------------------------------------------------------------------------`)
    console.log(`||  Puerto numero de GameWeb listo: ` + app.get(`port`))
    console.log(`--------------------------------------| Logs |------------------------------------------`)
});