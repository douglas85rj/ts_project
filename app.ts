import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import express from 'express'
import { sequelize } from './db';
import * as AdminJSSequelize from '@adminjs/sequelize'
import { User, Stock, Product, Category } from './models';


AdminJS.registerAdapter({
  Resource: AdminJSSequelize.Resource,
  Database: AdminJSSequelize.Database,
});

const PORT = 3000


const start = async () => {
  const app = express()

  await sequelize.authenticate()
  console.log('Connection has been established successfully.')

  

  const admin = new AdminJS({

    resources: [
     User, Stock, Product, Category
    ],
    rootPath: '/admin',

  })  

  const adminRouter = AdminJSExpress.buildRouter(admin)
  app.use(admin.options.rootPath, adminRouter)

  app.listen(PORT, () => {
    console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`)
  })
}

start()