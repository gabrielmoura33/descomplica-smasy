import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInMonths,
  differenceInYears,
  format,
  parseISO,
} from 'date-fns';

function calculateDiferenceFromDate(
  initialDate: string,
  finalDate = new Date()
) {
  const initialDateFormatted = parseISO(initialDate) || new Date();
  const diff = differenceInYears(finalDate, initialDateFormatted);

  if (diff === 0) {
    const diffInMonths = +differenceInMonths(finalDate, initialDateFormatted);

    if (diffInMonths <= 1) {
      const differenceInDaysValue = differenceInDays(
        finalDate,
        initialDateFormatted
      );

      console.log(differenceInDaysValue <= 0);

      if (differenceInDaysValue <= 0) {
        const differenceInHoursValue = differenceInHours(
          finalDate,
          initialDateFormatted
        );

        if (differenceInHoursValue === 0) {
          const differenceInMinutesValue = differenceInMinutes(
            finalDate,
            initialDateFormatted
          );

          return `Há ${differenceInMinutesValue} minutos`;
        }
        return 'Há ' + differenceInHoursValue + ' Horas';
      }
      return 'Há ' + differenceInDaysValue + ' dias';
    }
    return 'Há ' + diffInMonths + ' meses';
  }

  return format(initialDateFormatted, 'dd/MM/yyyy');
}
export { calculateDiferenceFromDate };
