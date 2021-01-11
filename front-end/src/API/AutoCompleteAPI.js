const getJobAutoCompleteResults = async (input) => {
  const BASE_URL_JOB = 'http://api.dataatwork.org/v1/jobs/autocomplete?begins_with=' 
  let result = []
  if (!input){ // empty input, will return no autocomplete 
    return result
  }
  const response = await fetch(`${BASE_URL_JOB}${input}`);
  const data = await response.json();
  if (data.error){
    return result
  }
  let dataLen = data.length

  for (let i = 0; i < 10; i++){ // return only first ten responses
    if (i >= dataLen){ // break if there is less than 10 responses
      break;
    }
    result.push({
      "jobTitle":data[i]['suggestion'],
      "uuid":data[i]['uuid']})
  }
  return result;
};

const getSkillAutoCompleteResults = async (input) => {
const BASE_URL_SKILL = 'http://api.dataatwork.org/v1/skills/autocomplete?begins_with=' 
  let result = []
  if (!input){ // empty input, will return no autocomplete 
    return result
  }
  const response = await fetch(`${BASE_URL_SKILL}${input}`);
  const data = await response.json();
  if (data.error){
    return result
  }
  let dataLen = data.length

  for (let i = 0; i < 10; i++){ // return only first ten responses
    if (i >= dataLen){ // break if there is less than 10 responses
      break;
    }
    result.push({
      "skillName":data[i]['suggestion'],
      "uuid":data[i]['uuid']})
  }
  return result;
}
export {
  getJobAutoCompleteResults,
  getSkillAutoCompleteResults
};
