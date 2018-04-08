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
        skills.frontend.push(item);
      } else if (item.type == 2) {
        skills.workflow.push(item);
      } else if (item.type == 3) {
        skills.backend.push(item);
      }
    });

    body.skills = skills;

    //console.log(skills);

    for (skill in body.skills) {
      console.log(skill);
    } 

    res.render('pages/about', Object.assign({}/* , sendObj */, body));
  });
}