import { Link } from "@tanstack/react-router";

export default function Header() {
	return (
		<header className="p-4 flex items-center bg-white">
			<div className="w-full max-w-2xl mx-auto">
				<h1 className="ml-4 text-xl font-semibold">
					<Link to="/">
						<img src="/logo.svg" alt="level logo" className="h-10" />
					</Link>
				</h1>
			</div>
		</header>
	);
}
