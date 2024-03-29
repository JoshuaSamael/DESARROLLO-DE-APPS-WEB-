let nombreArtista = document.getElementById('nombreArtista');
let nombreAlbum = document.getElementById('nombreAlbum');
let fotoArtista = document.getElementById('fotoArtista');
let listaCanciones = document.getElementById('listaCanciones');

const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': '1bad90b252mshccdd54dd3c48445p11ad3bjsn9190b68d3b04',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};
fetch('https://spotify23.p.rapidapi.com/albums/?ids=7tWP3OG5dWphctKg4NMACt', options)
	.then(response => response.json())
	.then(response => {
        //nombreArtista.innerHTML = response.albums[0].name;
            console.log(response.albums[0].name);
            console.log(response.albums[0].artists[0].name);
            console.log(response.albums[0].images[0].url);
            console.log(response.albums[0].tracks.items[0].preview_url);

            nombreArtista.innerHTML = response.albums[0].name;
            nombreAlbum.innerHTML = response.albums[0].artists[0].name;
            fotoArtista.src = response.albums[0].images[0].url;

            let canciones = response.albums[0].tracks.items;
            
            let todasLasCanciones = '';
            canciones.forEach((cancion,index)=>{
                let nombreCancion = cancion.name;
                let cancionUrl = cancion.preview_url;
                todasLasCanciones += `
                <div class="col-12 col-md-4 text-center">
                    <p>${nombreCancion}</p>
                    <audio controls>
                        <source src="${cancionUrl}" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio>
                </div>`;
                console.log(nombreCancion);
                console.log(cancion.preview_url);
            });
            listaCanciones.innerHTML = todasLasCanciones;
        })
	.catch(err => console.error(err));
