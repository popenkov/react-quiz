//набор функций для создангия контролов, функция вернет объект, похожий, что мы делали в блоке авторизации.





export function createControl(config, validation) {
    return {
      ...config,
      validation, //обьект с параметрами валидации
      valid: !validation, //если передали объект с параметрами валидации, то по умолчанию вэлид = фолс
      touched: false,
      value: ''
    }
  }
  
  export function validate(value, validation = null) {
    if (!validation) {
      return true
    }
  
    let isValid = true
  
    if (validation.required) {
      isValid = value.trim() !== '' && isValid
    }
  
    return isValid
  }
  
  export function validateForm(formControls) {
    let isFormValid = true
  
    for (let control in formControls) {
      if (formControls.hasOwnProperty(control)) { //проверяем только те поля, которые есть у самого объекта forMcONTROLS, унаследованные свойства из прототипа не будут рассматриваться
        isFormValid = formControls[control].valid && isFormValid
      }
    }
  
    return isFormValid
  }