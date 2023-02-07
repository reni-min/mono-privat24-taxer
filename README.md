# Імпорт операцій в taxer.ua

Дозволяє завантажити список операцій з Mono та Privat.

## How to

1) `git clone git@github.com:reni-min/mono-privat24-taxer.git`
2) `npm install`
3) створюємо і заповнюємо `.env` файл. Приклад- `example.env`
4) `npm start`

### Банки

1) Завантажити список операцій з бажаного банку в форматі xls/xlsx (підтримуються Моно і Приват)
2) Зберегти файл в `data\filename.xls` і додати `XLS_FILE_NAME=filename.xls` в `.env` файл

### Taxer

##### Cookie

1) Увійти в [Taxer](https://taxer.ua/)
2) Отримати  `document.cookie` в консолі браузера і додати `TAXER_COOKIE=` в `.env` файл

##### Bank account id

1) Зайти в [Бухгалтерія -&gt; Кошти](https://taxer.ua/uk/my/finances/accounts) з увімкненими *Network* в devtools
2) Додати id аккаунта `TAXER_BANK_ID=` в `.env` файл (на вкладці `Network` шукайте запит `load`, у відповіді є список усіх доступних акаунтів, обирайте бажаний)

##### FOP accound id

1) Зайти на будь яку сторінку [taxer](https://taxer.ua/) з увімкненими *Network* в devtools
2) Зайти в responce запиту `api/user/login/load_account`
3) В масиві **users** обрати необхідни рахунок і зберегти його **id** в  `TAXER_FOP_ID=` в `.env` файл

### Credits:

[@unickq](https://github.com/unickq) і його [privat24-taxer](https://github.com/unickq/privat24-taxerhttps://github.com/unickq/privat24-taxer) (було оновлено код відповідно до останньої версії API і додано підтримку експортованих даних з Моно)
