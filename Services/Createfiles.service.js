var fs = require('fs');

const service = {
    Createnewfile(req, res) {
        try {
            var m = new Date();
            var dateString =
                m.getUTCFullYear() + "-" +
                ("0" + (m.getMonth() + 1)).slice(-2) + "-" +
                ("0" + m.getDate()).slice(-2)

            var hours = m.getHours();
            var minutes = m.getMinutes();
            var seconds = m.getSeconds();
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            var strTime = hours + '-' + minutes + '-' + seconds + "-" + ampm;

            fs.appendFile(`Test/${dateString} - ${strTime}.txt`, new Date().getTime().toString(), function (err) {
                if (err) return res.status(400).send({ error: err });
                res.send({ message: "Successfully Created" })
            });
        } catch (err) {
            console.log(err);
            res.status(500).send({ error: "Internal server error" })
        }

    }
}

module.exports = service;





