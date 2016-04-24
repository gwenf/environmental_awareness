import React from 'react'
import { render } from 'react-dom'
import App from './components/App.js'
import About from './components/About.js'


import { Router, Route, Link, browserHistory, DefaultRoute } from 'react-router'


// export default (
//   <Route path='/' handler={App}></Route>
// );
// render(<Route path='/' handler={App}></Route>,
//   document.getElementById('react-container'));
render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="about" component={About}/>
    <Route path="setting-goals" component={About}/>
    <Route path="tutorials" component={About}/>
    <Route path="take-action" component={About}/>
    <Route path="what-difference" component={About}/>
  </Router>
), document.getElementById('react-container'));

// app.use(router);
//
// function router (req, res, next) {
//   var context = {
//     routes: routes, location: req.url
//   };
//   Router.create(context).run(function ran (Handler, state) {
//     res.render('layout', {
//       reactHtml: React.renderToString(<Handler />)
//     });
//   });
// }

// <Route path="users" component={Users}/>
// <Route path="about" component={About}/>
//
// <Route path="*" component={NoMatch}/>
