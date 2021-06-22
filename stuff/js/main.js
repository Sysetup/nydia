async function getUsers () {
	let response = await fetch('https://ipinfo.io/json')
	let data = await response.json()
   
	console.table(data)
}
  
console.info('   ____             __\n\  / __/_ _____ ___ / /___ _____ _/|\n\ _\\ \\/ // (_-</ -_) __/ // / _ > _<\n\/___/\\_, /___/\\__/\\__/\\_,_/ .__//\n\    /___/                /_/       \n\> Software development company.')

getUsers() 
