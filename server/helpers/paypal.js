const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AZ_iJTPrDVjODJgonJCK9PmRo51PW8nHS9vFR6Yd5qN7GBpYF76Y1xkDdBT_h8wLihwlehdR4JE1jcmH",
  client_secret: "EOw38GY9u38UcMhILujBMuSj3SJ9G47NdWCzsFYqUsYl3aQ-pHTXdlBTus2FJO6eGLEEestiozIyNYZF",
});

module.exports = paypal;
