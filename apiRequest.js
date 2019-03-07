const axios = require('axios');
const moment = require('moment');
const GITHUB = {
    apiBase: "api.github.com", 
};

async function checkEvents(username){
    let url = `https://${GITHUB.apiBase}/users/${username}/events?per_page=300`;
    try{
        const resp = await axios.get(url);
        return resp;
    }catch(e){
        console.log(e);
        throw new Error(e);
    }
}

async function getDates(username){
    const events = await checkEvents(username);
    return events.data.map(x => x.created_at.substring(0, x.created_at.indexOf('T')));
}

async function getCommitsInARow(username){
    const dates = await getDates(username);
    let index;
    let amount = 0;

    if (moment().add(-1, 'days').format('L') > moment(dates[0], 'YYYY-MM-DD').format('L'))
        return amount;
            
    for(index = 0; index <= dates.length-1; index++){
        let a = moment(dates[index], 'YYYY-MM-DD');
        let b = moment(dates[index+1], 'YYYY-MM-DD');
        const dif = a.diff(b,'days');
            
        if(dif > 1)
            return amount + 1;
        else if(dif === 1)
            amount++;
    }
        return amount;
    }
    
async function main(username){
    
    try{
        let resp = await getCommitsInARow(username);
        return resp;
    }catch(e){
        console.log(e);
    }
}

main();
    
exports.handler = async function principal(context, event, callback) {
    let memory = JSON.parse(event.Memory);
    let username = memory.twilio.collected_data.ask_name.answers.bot_name.answer || 'None';
    let usrCommits;
    usrCommits = await main(username);
    
    
    if(typeof usrCommits != 'undefined'){
        let responseObject = {
            "actions": [
                {
                    "say": `Hi again, the user!,  ${username} has: ${usrCommits} days-in-row :bellhop_bell:`
                }
            ]
        };
        callback(null, responseObject);
    }
    else{
        let responseObject = {
            "actions": [
                {
                    "say": `The user entered does not exist :no_entry_sign:`
                }
            ]
        };
        callback(null, responseObject);
    }
}