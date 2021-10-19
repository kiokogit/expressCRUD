import express from 'express';
import { addMember, deleteMember, getAllMembers, getOneMember, modifyMemberDetails, searchMembers } from '../controllers/MemControllers.js';

const router = express.Router();

//to pull all members database list
router.get('/', getAllMembers);

//to show specific member
router.get('/:id', getOneMember);

//to filter or search for members with particular category
router.get('/v1/query', searchMembers);

//to change member details
router.patch('/:id', modifyMemberDetails);

//to remove/delete a member from system (should later be able to mark the machine key never to be used again)
router.delete('/:id', deleteMember);

//to add a new member
router.post('/', addMember);

export default router;