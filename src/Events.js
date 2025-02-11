'use strict'

const {isFunction, isObject} = require('./helpers')

module.exports = class Events {
  constructor (client) {
    this.client = client
  }

  track (eventName, metadata, customer, callback) {
    console.warn('This track method invocation is deprecated. Please use `events.create()` instead. Method will be removed in ver. 3.0')
    if (isFunction(customer)) {
      callback = customer
      customer = {}
    }

    return this.client.post(`/events`, {
      event: eventName,
      customer,
      metadata
    }, callback)
  }

  create (eventName, params, callback) {
    if (!isObject(params)) {
      params = {}
    }
    params['event'] = eventName
    return this.client.post(`/events`, params, callback)
  }
}
