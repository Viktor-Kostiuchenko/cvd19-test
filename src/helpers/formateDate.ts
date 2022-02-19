type CorrectDate = string | number;

export default function formateDate(startDate: Date, endDate: Date) {
  let start = new Date(startDate);
  let end = new Date(endDate);
  let correctedStartDate: CorrectDate = start.setDate(start.getDate() + 1);
  correctedStartDate = new Date(correctedStartDate).toISOString();
  let correctedEndDate: CorrectDate = end.setDate(end.getDate() + 1);
  correctedEndDate = new Date(correctedEndDate).toISOString();

  return [correctedStartDate, correctedEndDate]
}

