const express = require('express');
const { check } = require('express-validator');

const fileUpload = require('../../../middleware/file-upload');
const checkAuth = require('../../../middleware/check-auth');
const { SecurityUser } = require('../../security/models/securityUser');
const checkSecurityUserID = require('../../../middleware/check-parentID')('securityUser', SecurityUser);



const controllers = require('../controllers');
const controller = controllers.leadController;

const router = express.Router();

//  - base route for module
// - /api/1.0.0/crm/Leads

// - /api/1.0.0/crm/Leads/:securityUserID/contacts
const baseRoute = `/lead`;

// router.use(checkAuth);

// - /api/1.0.0/crm/Leads/:securityUserID/lead/:id
router.get(`${baseRoute}/:id`, controller.getLead);

// - /api/1.0.0/crm/Leads/:securityUserID/lead/
router.get(`${baseRoute}/:securityUserID/lead/`,  controller.getLeads);

// - /api/1.0.0/crm/Leads/:securityUserID/lead/
router.post(`${baseRoute}/:securityUserID/lead/`, controller.postLead);

// - /api/1.0.0/crm/Leads/:LeadId/:securityUserID/:id
router.patch(`${baseRoute}/:securityUserID/lead/:id`,  controller.patchLead);

// - /api/1.0.0/crm/Leads/:securityUserID/:securityUserID/:id   checkSecurityUserID,
router.delete(`${baseRoute}/:securityUserID/lead/:id`,  controller.deleteLead);

// - /api/1.0.0/crm/leads/search
router.get(`/search`, controller.searchLeads);


module.exports = router;