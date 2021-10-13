var fs = require('fs');
const service = {
    Displayfiles(req, res) {
        try {
            res.send(fs.readdirSync("Test/"))
        } catch (err) {
            console.log(err);
            res.status(500).send({ error: "Internal server error" })
        }
    }
}

module.exports = service;