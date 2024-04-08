export const questions = {
  showQuestionNumbers: "off",
  title: "Marmotech Encuestas",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "rating",
          name: "satisfaction-numeric",
          title:
            "¿CUAL SERIA LA PROBABILIDAD DE QUE RECOMENDARAS MARMOTECH A UN AMIGO O FAMILIAR?",
          rateMin: 0,
          rateMax: 10,
          minRateDescription: "NADA PROBABLE",
          maxRateDescription: "MUY PROBABLE",
        },
        {
          name: "comment",
          type: "text",
          title: "RAZON DE LA PUNTUACIÓN",
          inputType: "comment",
          placeholder: "Escriba su comentario",
          isRequired: false,
        },
      ],
    },
  ],
  completeText: "Enviar",
//  buttonColor: "yellow",
  completedHtml:
    "<p><h4>Gracias por sus comentarios, su opinión es muy importante para nosotros.</h4></p>",
};

export const questions2 = {
  showQuestionNumbers: "off",
  title: "Marmotech Surveys",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "rating",
          name: "satisfaction-numeric",
          title:
            "HOW LIKELY WOULD YOU RECOMMEND MARMOTECH TO A FRIEND OR FAMILY MEMBER?",
          rateMin: 0,
          rateMax: 10,
          minRateDescription: "NOT LIKELY",
          maxRateDescription: "VERY LIKELY",
        },
        {
          name: "comment",
          type: "text",
          title: "REASON FOR SCORE",
          inputType: "comment",
          placeholder: "Write your comment",
          isRequired: false,
        },
      ],
    },
  ],
  completeText: "Send",
  completedHtml:
    "<p><h4>Thank you for your comments, your opinion is very important to us.</h4></p>",
};

export const questions3 = {
  showQuestionNumbers: "off",
  title: "Marmotech Encuestas",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "rating",
          name: "satisfaction-numeric",
          title: "¿SE SIENTE SATISFECHO CON LA COMUNICACIÓN ESTABLECIDA CON EL PERSONAL DE MARMOTECH?",
          rateMin: 0,
          rateMax: 10,
          minRateDescription: "NADA SATISFECHO",
          maxRateDescription: "MUY SATISFECHO",
        },
        {
          name: "comment",
          type: "text",
          title: "RAZON DE LA PUNTUACIÓN",
          inputType: "comment",
          placeholder: "Escriba su comentario",
          isRequired: false,
        },
      ],
    },
  ],
  completeText: "Enviar",
  completedHtml:
    "<p><h4>Gracias por sus comentarios, su opinión es muy importante para nosotros.</h4></p>",
};