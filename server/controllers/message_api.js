var express = require("express"),
router = express.Router(),
message = require("../models/message.js");

router.get("/:id", function(req, res) {
    var id = req.params.id;
    message.find({ 'belongs_to_group': id }, function(err, data) {
        if (err) {
            res.status(400).send("error");
            return;
        }
        res.status(200).send(data);
    });
 })


 router.post("/", function(req, res) {
    var obj = req.body;
    console.log(obj);
    var model = new message(obj);
    model.created_date = new Date;
    model.save(function(err,data) {
        if (err) {
            res.status(400).send(err);
            return;
        }
     res.status(200).send(data);
    });
 })

 router.delete("/:id", function(req, res) {
    var id = req.params.id;
    message.findByIdAndRemove(id, function(err) {
        if (err) {
            res.status(400).send("error");
            return;
        }
        res.status(200).send("deleted");
    });
 });

 router.put("/:id", function(req, res) {
    var id = req.params.id;
    var obj = req.body;
    var new_modified_date = new Date;
    user.findByIdAndUpdate(id, { text: obj.text, modified_date: new_modified_date}, 
    function(err) {
        if (err) {
            res.status(400).send("error");
            return;
        }
        res.status(200).send("updated");
    });
 })

let create_message= function(message_obj){
    var model = new message(obj);
    model.created_date = new Date;
}
 module.exports = router;
 