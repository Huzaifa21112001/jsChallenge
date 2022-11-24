const express = require('express')
const stocks = require('./stocks')
const path = require('path');

const app = express()

app.set('view engine', 'ejs');
app.set('views', 'state');


app.listen(3000, () => console.log('Server Started!'))

app.get('/', async (req, res) => {
  const stockSymbols = await stocks.getStocks()
  res.render('st', {STOCKS: stockSymbols});
})

app.get('/stocks/:symbol', async (req, res) => {
  const { params: { symbol } } = req
  const data = await stocks.getStockPoints(symbol, new Date())
  res.send(data)
})


