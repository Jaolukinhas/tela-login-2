// Dados das playlists (com músicas)
const playlists = {
    playlist1: {
      name: "Playlist 1",
      songs: ["musicas/Matuê - Isso é Sério ft. Brandão.mp3", "musicas/Horas Iguais.mp3", "musicas/Japa & Ryu, The Runner - FNB.mp3"]
    },
    playlist2: {
      name: "Playlist 2",
      songs: ["musicas/Castlevania.mp3", "musica5.mp3", "musica6.mp3"]
    },
    playlist3: {
      name: "Playlist 3",
      songs: ["musica7.mp3", "musica8.mp3", "musica9.mp3"]
    }
  };
  
  // Elementos
  const playlistElements = document.querySelectorAll(".playlist");
  const musicListContainer = document.getElementById("music-list");
  const songListElement = document.getElementById("song-list");
  const audio = document.getElementById("audio");
  const songTitle = document.getElementById("song-title");
  const songArtist = document.getElementById("song-artist");
  
  // Quando uma playlist for clicada
  playlistElements.forEach(playlistElement => {
    playlistElement.addEventListener("click", function() {
      const playlistId = this.id;
      const playlist = playlists[playlistId];
  
      // Exibe as músicas da playlist selecionada
      displaySongs(playlist);
    });
  });
  
  // Função para exibir as músicas da playlist
  function displaySongs(playlist) {
    // Limpa a lista de músicas
    songListElement.innerHTML = "";
  
    // Mostra a lista de músicas
    playlist.songs.forEach(song => {
      const li = document.createElement("li");
      li.textContent = song.replace('.mp3', ''); // Remove a extensão .mp3 para exibir o nome da música
      li.addEventListener("click", function() {
        playSong(song);
      });
      songListElement.appendChild(li);
    });
  
    // Exibe o título da playlist e a lista de músicas
    musicListContainer.style.display = "block";
  }
  
  // Função para tocar a música selecionada
  function playSong(song) {
    audio.src = song;
    audio.play();
    songTitle.textContent = song.replace('.mp3', ''); // Atualiza o título da música
    songArtist.textContent = "Artista"; // Nome do artista (você pode personalizar)
  }
  