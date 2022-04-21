export const daysOfWeek = ['Dom','Lun', 'Mar', 'Mie', 'Jue','Vie','Sab']
export const monthsOfYear = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
]

const getTotalDaysMonth = (date) => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
}

const getInitWeekDay = (date) => {
  return new Date(date.getFullYear(), date.getMonth()).getDay()
}

const getLastDayPrevMoth = (date) => {
  return new Date(date.getFullYear(), date.getMonth(), 0).getDate()
}

export const createPrevDates = (date) => {
  const lastDayPrevMoth = getLastDayPrevMoth(date)
  const dates = []
  for(let i = getInitWeekDay(date) - 1; i >= 0 ; i--){
    const newDate = new Date(date.getFullYear(), date.getMonth() - 1, lastDayPrevMoth - i)
    dates.push(newDate)
  }
  return dates
}

export const createDates = (date) => {
  const dates = []
  for(let i = 1; i <= getTotalDaysMonth(date); i++){
    const newDate = new Date(date.getFullYear(), date.getMonth(), i)
    dates.push(newDate)
  }
  
  return dates
}

export const areEqualDates = (date1, date2) => {
  const newDate1 = new Date(date1)
  const newDate2 = new Date(date2)
  newDate1.setHours(0,0,0,0)
  newDate2.setHours(0,0,0,0)
  return newDate1.getTime() === newDate2.getTime()
}

export const formatDateYMD = (date) => {
  return date.toISOString().split('T')[0]
}

export const formatDateString = (date) => {
  return date.split('T')[0]
}

export const getLocalISOString = (date) => {
  const timezoneOffset = new Date().getTimezoneOffset() * 60000
  return new Date(date.getTime() - timezoneOffset).toISOString()
}