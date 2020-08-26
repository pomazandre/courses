
export function dateAsString(param, sep){
  if (typeof(param) !== Date){
   param = new Date();
   sep = "-";
 }

 let buf_day = param.getDate();
 let buf_month = param.getMonth() + 1;
 if (param.getDate() < 10)
    buf_day = "0" + buf_day;

 if (param.getMonth() + 1 < 10 )
   { buf_month = "0" + buf_month; }
 
 return param.getFullYear() + sep + buf_month + sep + buf_day;
};

export const iniState = { date : dateAsString(),  currencies : []};

export function reducer(state = iniState, action) {
  switch(action.type) {
    case 'REFRESH_DATE':
       return Object.assign({}, { date : action.date, currencies : action.currencies} );
    default:
      return state;
  }
};