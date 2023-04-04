const startDate = new Date('2023-03-31');
const endDate = new Date('2023-04-04');
const timeDiff = endDate.getTime() - startDate.getTime();
const totalDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

function calculateDateDiff(startDate, endDate) {
    const timeDiff = endDate.getTime() - startDate.getTime();
    const totalDays = Math.ceil(1 + (timeDiff / (1000 * 60 * 60 * 24)));
    let workingDays = 0;
    let weekends = 0;
    
    const currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      const dayOfWeek = currentDate.getDay();
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        weekends++;
      } else {
        workingDays++;
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    return { totalDays, workingDays, weekends };
  }
  


const dateDiff = calculateDateDiff(startDate, endDate);
console.log(dateDiff);
