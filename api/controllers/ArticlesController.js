/**
 * ArticlesController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    create: function(req, res) {
        var data = req.body;
        // Create if id does not exist, else update
        if (data.id === undefined) {
            Articles.create(data).exec(function(err, createdRecord) {
                if (err) {
                    res.badRequest('Inputted article is not valid');
                } else {
                    return res.redirect('/articles');
                }
            });
        } else {
            Articles.update({
                id: data.id
            }, data).exec(function(err, updatedRecord) {
                if (err) {
                    res.badRequest();
                } else {
                    return res.redirect('/articles');
                }
            });
        }
    },
    delete: function(req, res) {
        var id = req.param('id');
        Articles.destroy({
            id: id
        }).exec(function(err) {
            if (err) {
                return res.negotiate(err);
            } else {
                return res.redirect('/articles');
            }
        });
    },
    getOne: function(req, res) {
        var id = req.param('id');
        Articles.findOne({
            id: id
        }).exec(function(err, record) {
            if (err) {
                return res.negotiate(err);
            } else {
                return res.view('articles/articleDetail', {
                    article: record
                });
            }
        });
    },
    getAll: function(req, res) {
        Articles.find({}).exec(function(err, records) {
            if (err) {
                return res.negotiate(err);
            } else {
                return res.view('articles/articlesList', {
                    articles: records
                });
            }
        });
    },
    toUpdateForm: function(req, res) {
        var id = req.param('id');
        Articles.findOne({
            id: id
        }).exec(function(err, record) {
            if (err) {
                res.serverError();
            } else {
                return res.view('articles/articleUpdate', {
                    article: record
                });
            }
        });
    }
};