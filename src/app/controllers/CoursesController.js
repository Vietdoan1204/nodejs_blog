const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CoursesController {

    show (req, res, next){
        Course.findOne({slug: req.params.slug})
            .then(course => {
                res.render('courses/show', { course: mongooseToObject(course) });
            })
            .catch(next);
    }

    create (req, res, next) {
        res.render('courses/create');
    }

    store (req, res, next) {
        // const formData = req.body;
        // formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        // const course = new Course(formData);
        // course.save()
        //     .then(() => res.redirect('/'))
        //     .catch(next);
        // res.json(req.body);
        req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(req.body);
        course.save()
            .then(() => res.redirect('/'))
            .catch(next);
    }

}

module.exports = new CoursesController;