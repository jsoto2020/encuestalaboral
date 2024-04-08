import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const SurveyComponent = dynamic(() => import("../components/survey"), {
    ssr: false,
});

const Survey = ({ num_oc, cliente, surveyId }) => {
    const [navegador, setNavegador] = useState("");

    useEffect(() => {
        let sBrowser,
            sUsrAg = navigator.userAgent;

        if (sUsrAg.indexOf("Chrome") > -1) {
            sBrowser = "Google Chrome";
        } else if (sUsrAg.indexOf("Safari") > -1) {
            sBrowser = "Apple Safari";
        } else if (sUsrAg.indexOf("Opera") > -1) {
            sBrowser = "Opera";
        } else if (sUsrAg.indexOf("Firefox") > -1) {
            sBrowser = "Mozilla Firefox";
        } else if (sUsrAg.indexOf("MSIE") > -1) {
            sBrowser = "Microsoft Internet Explorer";
        }

        setNavegador("" + sBrowser);
    }, []);


    return (
        <div>
            <SurveyComponent
                num_oc={num_oc}
                cliente={cliente}
                navegador={navegador}
                surveyId={surveyId}
            />
        </div>
    );
};
export default Survey;
