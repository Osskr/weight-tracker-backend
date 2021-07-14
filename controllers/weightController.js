const weightGet = (req, res)=>{

    res.json({
        msg:'weigth list',
        user:'user'
    })
}


const newWeight = (req, res)=>{
    res.json({
        msg:'Weight'
    })
}
const updateWeight = (req, res)=>{
    res.json({
        msg:'Weight'
    })
}
const deleteWeight = (req, res)=>{
    res.json({
        msg:'Weight'
    })
}
module.exports={
    weightGet,
    newWeight,
    updateWeight,
    deleteWeight,
}