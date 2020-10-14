//Study hard calculator

const getStudyHours = (day) => {
  switch (day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 5;
      break;
    case 'wednesday':
      return 7;
      break;
    case 'thursday':
      return 9;
      break;
    case 'friday':
      return 5;
      break;
    case 'saturday':
      return 4;
      break;
    case 'sunday':
      return 8;
      break;
    default:
      alert('You entered incorrectly....');
      break;
  }

};

const getActualStudyHours = () => getStudyHours('monday') + getStudyHours('tuesday') + getStudyHours('wednesday') + getStudyHours('thursday') + getStudyHours('friday') + getStudyHours('saturday') + getStudyHours('sunday');

const getIdealStudyHours = () => {
  let idealHours = 5;
  return idealHours * 7;
}



const calculateStudyDebt = () => {
  let actualStudyHours = getActualStudyHours();
  let idealStudyHours = getIdealStudyHours();

  if (idealStudyHours === actualStudyHours) {
    console.log('The user got the perfect amount of study.')
  } else if (idealStudyHours < actualStudyHours) {
    console.log('The user got more study than planned. User can rest.')
  } else {
    console.log('The user should create some empty time to study.');
  }
  console.log('Gerçek :' + actualStudyHours)
  console.log('İdeal :' + idealStudyHours)
}




calculateStudyDebt();