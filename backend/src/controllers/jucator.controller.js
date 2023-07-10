const db= require("../models");
const Jucator=db.jucators;
const Op=db.Sequelize.Op;

exports.create=(req,res)=>
{
    if(!req.body)
    {
        res.status(400).send({message:"Continutul trimis este gol"});
    }

    const jucator=
    {
        nume:req.body.nume,
        prenume:req.body.prenume,
        pozitie:req.body.pozitie,
        salariu:req.body.salariu
    }
    Jucator.create(jucator).then(data=>{res.send(data)}).catch(err=>res.status(500).send({message:"Eroare la crearea jucatorului"}))
}

exports.findAll=(req,res)=>
{
    Jucator.findAll().then(jucatori=>res.send(jucatori)).catch(err=>res.status(500).send({
        message:"Eroare la obtinerea jucatorilor"
    }))
}

exports.update=(req,res)=>
{
    const id=req.params.id;

    Jucator.update(req.body,{where:{id:id}}).then(num =>
        {
            if(num==1)
            {
                res.send({
                    message:"Informatia a fost updatata cu succes"
                })
            }
            else{

                res.send(
                    {
                        message:`Nu se pote updata jucatorul cu id-ul: ${id}`
                    }
                )
            }
        }).catch(err=>res.status(500).send({
            message:`Eroare la updatate-ul jucatorului cu id-ul: ${id} `
        }));
}

exports.delete=(req,res)=>
{
    const id=req.params.id;
    Jucator.destroy({
        where:{id:id}
    }).then(num=>
        {
            if(num=1)
            {
                res.send({
                    message:"Jucatorul a fost sters cu succes"
                })
            }
            else
            {
                res.send({
                    message:`A aprarut o eraore la stergerea jucatorului cu id-ul: ${id}`
                })
            }
        }).catch(err =>{res.status(500).send({
            message:err.message||`Eroare la stergerea unui jucator`});
        });
};