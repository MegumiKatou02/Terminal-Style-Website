import React from 'react'
const github_username = 'MegumiKatou02'
const discord_usertag = 'yukiooki_'
const discord_userid = '604949724788817920'
const email = 'ledinhchinh.dev@gmail.com'

const projects = [
	'MegumiKatou02/Anime-List',
	'MegumiKatou02/DiscordBotClient',
	'MegumiKatou02/NekoMangaNovel',
	'Koteru-Haiku/cli',
]

const links = [
	{
		name: 'GitHub',
		icon: 'fab fa-fw fa-github',
		link: 'https://github.com/MegumiKatou02',
		description: 'My profile on GitHub',
	},
	{
		name: 'Discord',
		link: `https://discord.com/users/${discord_userid}`,
		icon: 'fab fa-fw fa-discord',
		description: `${discord_usertag} | Add me as friend!`,
	},
	{
		name: 'E-mail',
		icon: 'fas fa-fw fa-at',
		link: `mailto:${email}`,
		description: 'Lets get in touch!',
	},
]

const info = (
	<>
		<p>Hello, I am a second-year student.</p>
		<p>
			Focusing on {' '}
			<span className="highlighted">back-end development</span>{' '}
			while also learning a bit of {' '}
			<span className="highlighted">front-end</span>{' '}
			as a hobby. Currently, I am studying{' '}
			<span className="highlighted">NuxtJS</span>{' and '}
			<span className="highlighted">Rust</span>
		</p>
		<p>
			I have knowledge of{' '}
			<span className="highlighted">TypeScript</span>{' and '}
			<span className="highlighted">Python</span>
		</p>
	</>
)

export {
	github_username,
	discord_usertag,
	discord_userid,
	email,
	projects,
	links,
	info,
}
