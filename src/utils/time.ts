export const format = (time, fomatter='YYYY-MM-DD HH:ii:ss')=>{
  const dateObj = new Date(time);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth()+1;
  const date =dateObj.getDate();
  const hour = dateObj.getHours();
  const minute = dateObj.getMinutes();
  const second = dateObj.getSeconds();
  const reg = /(Y+|M+|D+|H+|i+|s+)/g;
  return fomatter.replace(reg, (matched) => {
    switch(matched){
      case 'YYYY': return `${year}`;
      case 'MM': return `${month}`.padStart(2, '0');
      case 'M': return `${month}`;
      case 'DD': return `${date}`.padStart(2, '0');
      case 'D': return `${date}`;
      case 'HH': return `${hour}`.padStart(2, '0');
      case 'H': return `${hour}`;
      case 'ii': return `${minute}`.padStart(2, '0');
      case 'i': return `${minute}`;
      case 'ss': return `${second}`.padStart(2, '0');
      case 's': return `${second}`;
    }
    return '';
  })
}