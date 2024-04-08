import React from "react";
import * as Survey from "survey-react"; // import surveyjs
import { questions, questions2, questions3 } from "./content"; // these are the survey questions
import "survey-core/modern.min.css";
import axios from "axios";

const SurveyComponent = ({ num_oc, cliente, navegador, surveyId }) => {
    // Apply theme
    Survey.StylesManager.applyTheme("modern");


    // Create a modal
    const survey =
        surveyId === "survey1"
            ? new Survey.Model(questions)
            : surveyId === "survey2"
                ? new Survey.Model(questions2)
                : new Survey.Model(questions3);

    survey.onComplete.add(async (sender, option) => {
        const result = survey.getQuestionByName("satisfaction-numeric").value;
        const result2 = survey.getQuestionByName("comment").value;
        

        const headers = {
            "Content-Type": "dbsync/json*",
            "DBSync-Client": "mbs",
        };

        const { data } = await axios.post(
      //      "https://ws.marmotech.com.do/gas/ws/r/restserver",
            "http://192.168.40.9/gas/ws/r/restserver",
            `{"oper":"respuesta_laboral","data":"{\\"usuario\\":\\"conecta\\",\\"clave\\":\\"conecta\\",\\"num_emp\\":\\"${num_oc}\\",\\"nombre\\":\\"${cliente}\\",\\"respuesta\\":\\"${result}\\",\\"dispositivo\\":\\"${navegador}\\",\\"comentario\\":\\"${result2}\\"}"}`,
            { headers }
        );
        
    });

    // Render the survey
    return (
        <div className="container">
            <Survey.Survey model={survey} />
        </div>
    );
};

export default SurveyComponent;
