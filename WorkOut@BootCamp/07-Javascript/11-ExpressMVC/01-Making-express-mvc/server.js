const express = require("express");
const app = express();
const routes = require('./routes');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('assets'));
app.set('view engine', 'ejs');

// Routes
app.use('/', routes);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
