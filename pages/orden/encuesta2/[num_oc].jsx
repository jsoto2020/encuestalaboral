import React from "react";
import axios from "axios";
import Image from "next/image";
import Survey from "../../survey";
import logo from "../../../public/Logo.png";
import {
  desencriptarParametro,
  encriptarParametro,
} from "../../../utils/webtoken";

export const ordenPage = ({ num_oc_decrypted, cotizacion_no, cliente }) => {
  let surveyId = "survey2";

  return (
    <div className="container">
      <div className="cabezera-cliente">
        <div className="cabezera-info uno">
          <p className="p-info">
            Dear {cliente}: <br /> <br />
            Please respond to the following short survey on Your listing
            experience: {num_oc_decrypted} <br />
            <br />
            This survey will only take a minute and does not ask for personal
            information.
          </p>
        </div>
        <Image className="logo dos" src={logo} alt="logo" />
      </div>
      <div className="footer"></div>
      <Survey
        num_oc={num_oc_decrypted}
        cotizacion_no={cotizacion_no}
        cliente={cliente}
        surveyId={surveyId}
      />
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const { num_oc } = params;
  const num_oc_decryptedo = desencriptarParametro(num_oc);
  const num_oc_decrypted = num_oc_decryptedo["parametro"];

  const headers = {
    "Content-Type": "dbsync/json*",
    "DBSync-Client": "mbs",
  };

  const { data } = await axios.post(
    "https://ws.marmotech.com.do/gas/ws/r/restserver",
    `{"oper":"orden_cliente","data":"{\\"usuario\\":\\"conecta\\",\\"clave\\":\\"conecta\\",\\"orden\\":\\"${num_oc_decrypted}\\"}"}`,
    { headers }
  );
  const cotizacion_no = String(data.orden_master.cotizacion_no);
  const cliente = String(data.orden_master.cliente);

  return {
    props: {
      num_oc_decrypted,
      num_oc,
      cotizacion_no,
      cliente,
    },
  };
};

export const getStaticPaths = async (ctx) => {
  const headers = {
    "Content-Type": "dbsync/json*",
    "DBSync-Client": "mbs",
  };

  const { data } = await axios.post(
    "https://ws.marmotech.com.do/gas/ws/r/restserver",
    `{"oper":"orden_cliente","data":"{\\"usuario\\":\\"conecta\\",\\"clave\\":\\"conecta\\",\\"orden\\":\\"205849\\"}"}`,
    { headers }
  );

  const cliente = data.orden_master.cotizacion_no.toString();
  const num_oc = encriptarParametro(cliente);

  console.log(`path ${num_oc}`);
  console.log(`path ${cliente}`);

  return {
    paths: [{ params: { num_oc } }],
    fallback: "blocking",
  };
};

export default ordenPage;
