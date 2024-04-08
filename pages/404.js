import Link from "next/link";
import logo from "../public/Logo.png";
import Image from "next/image";

const NotFoundPage = () => {
	return (
		<div className="error-container">
			<Image className="error-logo" src={logo} />
			<h1>¡Oops! Página no encontrada.</h1>
			<p>Lo sentimos, pero la página que estás buscando no existe.</p>
			<Link href="/">
				<span>Volver a la página de inicio</span>
			</Link>
		</div>
	);
};

export default NotFoundPage;
