import { Router } from 'express';
import { getContactsController, getContactsByIdController, createContactController, deleteContactController, upsertContactController, patchContactController } from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createContactSchema, updateContactSchema } from '../validation/contacts.js';
import { isValidId } from '../middlewares/isValidId.js';
import { authenticate } from '../middlewares/authenticate.js';


const router = Router();

router.use(authenticate);

router.get('/contacts', ctrlWrapper(getContactsController));

router.post('/contacts',validateBody(createContactSchema), ctrlWrapper(createContactController));


router.get('/contacts/:contactId', isValidId, ctrlWrapper(getContactsByIdController));

router.post('/contacts',validateBody(createContactSchema), ctrlWrapper(createContactController));

router.delete('/contacts/:contactId', isValidId, ctrlWrapper(deleteContactController));

router.put('/contacts/:contactId', isValidId, validateBody(createContactSchema),  ctrlWrapper(upsertContactController));

router.patch('/contacts/:contactId', isValidId, validateBody(updateContactSchema),  ctrlWrapper(patchContactController));


export default router;
