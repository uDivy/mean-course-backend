const mongoose = require('../../mean-course-ui/node_modules/mongoose');

const postSchema = mongoose.Schema({
    title: { type: String, required: true },
    Content: { type: String, required: true },
    imagePath: { type: String, required: true }
}
);

module.exports = mongoose.model('Post', postSchema);