function mostrarPlaylist(id) {
    const playlist = document.getElementById(`playlist${id}`);
    const isVisible = playlist.style.display === 'block';
  
    // Oculta todas as outras playlists
    document.querySelectorAll('.playlist').forEach(p => p.style.display = 'none');
  
    // Mostra ou oculta a clicada
    playlist.style.display = isVisible ? 'none' : 'block';
  }


  let audioPlayer = document.getElementById("audio-player");
  let playIcon = document.getElementById("play-icon");
  let progress = document.getElementById("progress");
  let volume = document.getElementById("volume");
  let listaMusicas = [];
  let musicaAtual = 0;
  
  function tocarMusica(src) {
    audioPlayer.src = src;
    audioPlayer.play();
    playIcon.className = "fas fa-pause";
  
    // Atualiza lista e índice
    if (!listaMusicas.includes(src)) {
      listaMusicas.push(src);
      musicaAtual = listaMusicas.length - 1;
    } else {
      musicaAtual = listaMusicas.indexOf(src);
    }
  }
  
  function playPause() {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playIcon.className = "fas fa-pause";
    } else {
      audioPlayer.pause();
      playIcon.className = "fas fa-play";
    }
  }
  
  function avancarMusica() {
    if (musicaAtual < listaMusicas.length - 1) {
      musicaAtual++;
      audioPlayer.src = listaMusicas[musicaAtual];
      audioPlayer.play();
      playIcon.className = "fas fa-pause";
    }
  }
  
  function voltarMusica() {
    if (musicaAtual > 0) {
      musicaAtual--;
      audioPlayer.src = listaMusicas[musicaAtual];
      audioPlayer.play();
      playIcon.className = "fas fa-pause";
    }
  }
  
  audioPlayer.ontimeupdate = () => {
    if (audioPlayer.duration) {
      progress.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    }
  };
  
  function mudarProgresso() {
    audioPlayer.currentTime = (progress.value / 100) * audioPlayer.duration;
  }
  
  function mudarVolume() {
    audioPlayer.volume = volume.value;
  }
  