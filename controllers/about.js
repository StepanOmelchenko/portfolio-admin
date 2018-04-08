const http = require('request');

const apiOptions = {
  server: 'http://localhost:3000'
};

module.exports.index = function (req, res) {
  const pathAPI = '/api/admin';
  const requestOptions = {
    url: apiOptions.server + pathAPI,
    method: 'GET',
    json: {}
  };

  http(requestOptions, function (error, response, body) {
    if (error) {
      console.log(error);
    }
    //console.log(body);
    let skills = {
      frontend: [],
      workflow: [],
      backend: []
    };

    body.skills.forEach((item) => {
      if (item.type == 1) {
        item.type = 'frontend';
        skills.frontend.push(item);
      } else if (item.type == 2) {
        item.type = 'workflow';
        skills.workflow.push(item);
      } else if (item.type == 3) {
        item.type = 'backend';
        skills.backend.push(item);
      }
    });

    body.skills = skills;

    //console.log(skills);

    console.log(body.skills);

    res.render('pages/about', Object.assign({}/* , sendObj */, body));
  });
}