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