import { Router, Request, Response } from 'express'
import ItemsController from './controllers/items_controller'
import PointsController from './controllers/points_controller'
import multer from 'multer'
import { celebrate, Joi } from 'celebrate'

import multerConfig from './configs/multer'

const router = Router()
const upload = multer(multerConfig)

const pointsController = new PointsController() 
const itemsController = new ItemsController() 

router.get('/items', itemsController.index)

router.get('/points', pointsController.index)
router.get('/points/:id', pointsController.show)

router.post('/points', 
    upload.single('image'),
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.number().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            items: Joi.string().required(),
        })
    }, {
        abotEarly: false
    }),
    pointsController.create
)

export default router