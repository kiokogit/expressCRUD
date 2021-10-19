import { members } from "../datafiles/MembersData.js";
import {v4 as uuidv4} from "uuid"
import { refreshMembersList } from "./dataHandler.js";

export const addMember = (req, res) => {
    
    let member = req.body;

    //create user ID (non-random)
    const memberID = members.length + 1;

    //create machine key code
    const keyCode = uuidv4();

    //add to list
    members.push({ ...member, memberID: memberID, KeyCode: keyCode });

    refreshMembersList(members);

    res.send(members);
}

export const getOneMember = (req, res) => {            //fetch member details
    const { id } = req.params;

    const member = members.find((member) => member.memberID === parseInt(id));

    res.send(member); 
};

export const getAllMembers = (req, res) => {           //fetch whole database sorted by names

    res.send(members);
};

export const deleteMember = (req, res) => {    //find member by ID, or probably filter by the name...

    const { id } = req.params;

    const allMembers = members.filter((user) => user.memberID !== parseInt(id));

    writeToFile(allMembers, `Member ID NO. ${id} deleted!`);
    
    res.send(allMembers);
};

export const modifyMemberDetails = (req, res) => {              //to change details

    console.log(req.body);

    const { residence, phoneNumber, leadershipRole } = req.body;

    const { id } = req.params;

    const member = members.find((user) => user.memberID === parseInt(id));

    if (phoneNumber) member.phoneNumber = phoneNumber;
    if (residence) member.residence = residence;
    if (leadershipRole) member.leadershipRole = leadershipRole;

    writeToFile(members, `Member details changed!`);

    res.send(member);
};

export const searchMembers = (req, res) => {                            //not sure on this
    //to search for all members according to a query done
    
    console.log(req.query);
    
    const { name, residence, chapter, gender } = req.query;
    
    let allMembers = [...members]

    if (name) {
        allMembers = allMembers.filter((member) => member.fullName.startsWith(name));
    }

    if (gender) {
        allMembers = allMembers.filter((member) => member.gender.startsWith(gender));
    }

    if (residence) {
        allMembers = allMembers.filter((member) => member.residence.startsWith(residence));
    }

    if (chapter) {
        allMembers = allMembers.filter((member) => member.chapterAffiliation.startsWith(chapter));
    }
     
    res.send(allMembers);
};
