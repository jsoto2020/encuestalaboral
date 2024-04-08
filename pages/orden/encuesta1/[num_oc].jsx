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
	let surveyId = "survey1";
  //  console.log('Esta es la orden:'+num_oc_decrypted)
	return (
		<div className="container">
			<div className="cabezera-cliente">
				<div className="cabezera-info uno">
					<p className="p-info">
						Estimado(a) Colaborador: <br /> <br />
						Por favor responda a la siguiente encuesta corta sobre
						su experiencia laborando en MARMOTECH, S.A.
						<br />
						<br />
						Esta encuesta solo le tomará un minuto y en ella no se
						solicita información personal.
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
//console.log('emp: '+num_oc)
	const headers = {
		"Content-Type": "dbsync/json*",
		"DBSync-Client": "mbs",
	};

	//const { data } = await axios.post<Orden>('https://ws.marmotech.com.do/gas/ws/r/restserver',

	const { data } = await axios.post(
		//    "http://192.168.40.9/gas/ws/r/restserver",
		"https://ws.marmotech.com.do/gas/ws/r/restserver",
		`{"oper":"cedula","data":"{\\"usuario\\":\\"conecta\\",\\"clave\\":\\"conecta\\",\\"num_emp\\":\\"${num_oc_decrypted}\\"}"}`,
		{ headers }
	);
	
	const {nombre} = data.empleado;

//	const cotizacion_no = String(data.credenciales.num_emp);
	let cliente = String(nombre);
	 

	return {
		props: {
			num_oc_decrypted,
			num_oc,
	//		cotizacion_no,
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
		"http://ws.marmotech.com.do/gas/ws/r/restserver",
		`{"oper":"cedula","data":"{\\"usuario\\":\\"conecta\\",\\"clave\\":\\"conecta\\",\\"num_emp\\":\\"3355\\"}"}`,
		{ headers }
	);

	
	const cliente = data.empleado.toString();
	const num_oc = encriptarParametro(cliente);

	console.log(`path ${num_oc}`);
//	console.log(`path ${cliente}`);

	return {
		paths: [{ params: { num_oc } }],
		fallback: "blocking",
	};
};

export default ordenPage;
