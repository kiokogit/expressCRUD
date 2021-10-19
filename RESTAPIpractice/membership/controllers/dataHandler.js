import { writeFileSync} from 'fs';
 
function writeToFile(path, members, msg) {          //write to file, passing message to browser;
    
    writeFileSync((path), `${msg} ${JSON.stringify(members, null, 4)};`);
    console.log('Writing...');

};

export const refreshMembersList = function (members) {
    const path = 'C:/RESTpRACTICE/membership/datafiles/MembersData.js'
    const msg = 'export let members = '
    writeToFile(path, members, msg);
};

export const refreshBudget = function(budget) {
    const path = 'C:/RESTpRACTICE/membership/datafiles/budget.js';
    const msg = 'export let budget = ';
writeToFile(path, budget, msg);
};


