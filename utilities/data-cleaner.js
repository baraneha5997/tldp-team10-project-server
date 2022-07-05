import Customer from '../models/customer.js'

const dataCleaner = {

  cleanCustomer: ( customer ) => {
    return {
      id: customer.CUSTOMER_ID,
      name: customer.CUSTOMER_NAME,
      password: customer.PASSWORD,
      email: customer.EMAIL 
    }
  },  

  cleanCustomers: ( customers ) => {
    var results = []
    for( const c in customers) {
      results.push(dataCleaner.cleanCustomer(customers[c]))
    }
    return results
  },

  cleanEvent: ( event ) => {
    return {
      id: event.EVENT_ID,
      code: event.EVENT_CD,
      title: event.EVENT_TITLE,
      decription: event.EVENT_DESC
    }
  },

  cleanEvents: ( events ) => {
    var results = []
    for( const e in events) {
      results.push(dataCleaner.cleanEvent(events[e]))
    }
    return results
  },

  cleanRegistration: ( registration ) => {
    return {
      id: registration.REGISTRATION_ID,
      title: registration.REGISTRATION_TITLE,
      registrantName: registration.REGISTRANT_NM,
      date: registration.REGISTRANT_DT,
      comment: registration.REGISTRATION_COMMENT
    }
  },

  cleanRegistrations: ( registrations ) => {
    var results = []
    for( const r in registrations) {
      results.push(dataCleaner.cleanRegistration(registrations[r]))
    }
    return results
  },
}

export default dataCleaner