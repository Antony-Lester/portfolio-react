
export default function conversion(value, from, to) {
    console.log(value, from, to)
    let meters = null
    let result = null
switch(from){
    case 'millimetres': meters = value/1000; break;
    case 'centimeters': meters = value/100; break;
    case 'meters': meters = value; break;
    case 'kilometers': meters = value*1000; break;
    case 'miles': meters = value*1609.34; break;
    case 'Nautical miles': meters = value*1852; break;
    case 'inches': meters = value/39.37; break;
    case 'feet': meters = value/3.281; break;
    case 'yards': meters = value / 1.094; break; 
    default: meters = 0; break;
}
switch(to){
    case 'millimetres': result = meters*1000; break;
    case 'centimeters': result = meters*100 ;break;
    case 'meters': result = meters; break;
    case 'kilometers': result = meters/1000; break;
    case 'miles': result = meters/1609; break;
    case 'Nautical miles': result = meters/1852; break;
    case 'inches': result = meters*39.37; break;
    case 'feet': result = meters*3.281; break;
    case 'yards': result = meters*1.094; break;
    default: result = null;
}
    return `${value} ${from} is approximately ${Math.round(result * 100) / 100} ${to}`  
}