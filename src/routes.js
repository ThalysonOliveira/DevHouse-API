import {Router} from 'express'
const routes = new Router()

import multer from 'multer'
import uploadConfig from './config/upload'
const upload = multer(uploadConfig)

import SessionController from './controllers/SessionController'
import HouseController from './controllers/HouseController'

routes.post('/sessionuser',SessionController.store)

routes.post('/createhouse',upload.single('thumbnail'),HouseController.store)


export default routes