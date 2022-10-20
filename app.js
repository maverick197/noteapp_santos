const add = require('./add')
const write = require('./write')
const read = require('./read')
const present = require('./present')
const del = require('./del')

const data = process.argv

var note = {}

if(data[2] == 'add') {
   
    note = {
        id: data[3],
        title: data[4],
        body: data[5]
    }
   
    var oldNote = read()
   
    add(note, oldNote);
}
if(data[2] == 'read') {
    
    const present = require('./present')

    present(read())
}
if(data[2] === "delete") {
    let id=data[3]
    let oldNote=read()
    let del=require('./del')
    del(id,oldNote);
    console.log(read());
}