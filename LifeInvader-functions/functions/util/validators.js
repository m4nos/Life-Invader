const isEmpty = (string) => {
  if (string.trim() === '') return true; 
  else return false;
}
  
const isEmail = (email) => {
  const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(emailRegEx)) return true;
  else return false;
}
  
exports.validateSignupData = (data) => {
  let errors = {};

  if(isEmpty(data.email)) {
    errors.email = 'Must not be empty';
  } else if (!isEmail(data.email)) {
    errors.email = 'Must be a valid email address';
  }

  if(isEmpty(data.password)) errors.password = 'Must not be empty';
  if(data.password != data.confirmPassword) errors.password = 'Password must match!';
  if(isEmpty(data.handle)) errors.handle = 'Must not be empty';
  
  if (data.password.length < 6) errors.password = "Password must be above 6 characters";

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  }
}

exports.validateLoginData = (data) => {
  let errors = {};
   
  if (isEmpty(data.email)) errors.email = 'Must not be empty'; //user.email
  if (isEmpty(data.password)) errors.password = 'Must not be empty';
  
  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  }
}

exports.reduceUserDetails = (data) => {
  let userDetails = {};

  if (!isEmpty(data.bio.trim())) userDetails.bio = data.bio;
  if (!isEmpty(data.website.trim())) userDetails.website = data.website;
  if (!isEmpty(data.location.trim())) userDetails.location = data.location;
  
  return userDetails;
}
