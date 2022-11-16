export interface TableData {
    trcid: string
    title: string
    details: Details
    types: Type[]
    location: Location
    urls: string[]
    media: Medum[]
    dates: Dates
    lastupdated: string
    eigenschappen: any
  }

  export interface Dates {
    startdate: string
    enddate: string
  }
  
  export interface Details {
    de: De
    en: En
    fr: Fr
    nl: Nl
    it: It
    es: Es
  }
  
  export interface De {
    language: string
    title: string
    calendarsummary: string
    shortdescription: string
    longdescription: string
  }
  
  export interface En {
    language: string
    title: string
    calendarsummary: string
    shortdescription: string
    longdescription: string
  }
  
  export interface Fr {
    language: string
    title: string
    calendarsummary: string
    shortdescription: string
    longdescription: string
  }
  
  export interface Nl {
    language: string
    title: string
    calendarsummary: string
    shortdescription: string
    longdescription: string
  }
  
  export interface It {
    language: string
    title: string
    calendarsummary: string
    shortdescription: string
    longdescription: string
  }
  
  export interface Es {
    language: string
    title: string
    calendarsummary: string
    shortdescription: string
    longdescription: string
  }
  
  export interface Type {
    type: string
    catid: string
  }
  
  export interface Location {
    name: string
    city: string
    adress: string
    zipcode: string
    latitude: string
    longitude: string
  }
  
  export interface Medum {
    url: string
    main: string
  }
  