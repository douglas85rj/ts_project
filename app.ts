import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import express from 'express'
import { sequelize } from './db';
import * as AdminJSSequelize from '@adminjs/sequelize'
import { User, Stock, Product } from './models';

AdminJS.registerAdapter({
  Resource: AdminJSSequelize.Resource,
  Database: AdminJSSequelize.Database,
});



const PORT = 3000

const start = async () => {
  const app = express()

  const admin = new AdminJS({

    resources: [
      {
        resource: sequelize.models.User,
        options: {
          properties: {
            encryptedPassword: {
              isVisible: false,
            },
            password: {
              type: 'string',
              isVisible: {
                list: false, edit: true, filter: false, show: false,
              },
            },
          },
        },
      },
      {
        resource: sequelize.models.Stock,
        options: {
          properties: {
            id: {
              isVisible: false,
            },
            createdAt: {
              isVisible: false,
            },            
            quantity: {
              isVisible: {
              list: true, edit: true, filter: false, show: true,
            },
            updatedAt: {
              isVisible: false,
            },
          },
        },
      },
      {
        resource: sequelize.models.Product,
        options: {
          properties: {
            id: {
              isVisible: false,
            },
            createdAt: {
              isVisible: true,
            },
            quantity: {
              isVisible: true,
            },
            updatedAt: {
              isVisible: true,
            },
          },
        },
      },
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