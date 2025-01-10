import Link from "next/link";

const HobbiesPage = () => {
	return (
		<div>
			<ul>
				<li>
					Tinkering:I like building things and messing with stuff
					<ul>
						<li>Software</li>
						<li>LEDs</li>
						<li>low voltage electronics</li>
						<li>Cars</li>
					</ul>
				</li>
				<li>
					Cars. Mostly Classic Chevys, but a good build is a good build.
					<ul>
						<li>My 1974 Nova 4 door aka 74doorlsxbody</li>
						<li>My first car was a 1956 Belair</li>
						<li>Car Shows is my favorite weekend pasttime</li>
					</ul>
				</li>
				<li>
					Nerd Shit
					<ul>
						<li>
							Marvel:
							<ol>
								<li>Sexxy Red aka Deadpool</li>
								<li>Black Panther</li>
								<li>Magnito</li>
								<li>Thanos</li>
								<li>Blue Mavel</li>
							</ol>
						</li>
						<li>
							Star Wars
							<ul>
								<li>Sith Teachings and Science Lore</li>
								<li> Luke Skywalker</li>
								<li>
									{" "}
									Favorite Sithes
									<ol>
										<li>Sidius and Maul</li>
										<li> Plagus and Tinnerbrus</li>
									</ol>
								</li>
								<li>forrest moon of Endor</li>
								<li>Death Star</li>
							</ul>
						</li>
						<li>
							Video Games
							<ul>
								<li>twisted metal</li>
								<li>Star Wars Games</li>
								<li>Open World</li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	);
};

export default HobbiesPage;
