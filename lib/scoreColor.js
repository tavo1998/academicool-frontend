export const getScoreBgColor = (score) => {
  if(score >= 4) return 'bg-green-600'
  else if(score >= 3) return 'bg-orange-600'
  else return  'bg-red-600'
}