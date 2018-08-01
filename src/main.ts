import express, { Application } from 'express'
import app from './server'
import { isMaster,fork } from 'cluster'
import { config as env } from 'dotenv'
env()
function createServer () {
  const server: Application = express()
  server.use(app)
  server.listen('3000', () => {
    console.log(`listening on port 3000`)
  })
}

// Code to run if we're in the master process
if (isMaster && process.env.NODE_ENV !== 'development') {
  // Count the machine's CPUs
  const cpuCount = require('os').cpus().length

  // Create a worker for each CPU
  for (let i = 0; i < cpuCount; i += 1) {
    fork()
  }
  // Code to run if we're in a worker process
} else {
  createServer()
}
