import { Header, Footer } from "./";
import { Outlet } from "react-router";

export default function Layout() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}
