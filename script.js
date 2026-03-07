/* ========== DATA (NETFLIX STYLE + REAL IMAGES) ========== */
const MOVIES = [
  { id: 1, title: "yacine: Folie à Deux", year: 2024, match: "98% Match", genre: "Crime / Drama", duration: "2h 18m", cast: "Joaquin Phoenix, Lady Gaga", poster: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=600&auto=format&fit=crop", backdrop: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=2000&auto=format&fit=crop", desc: "Arthur Fleck is institutionalized at Arkham awaiting trial for his crimes as Joker. While struggling with his dual identity, Arthur not only stumbles upon true love, but also finds the music that's always been inside him.", serverUrl: "https://firebasestorage.googleapis.com/v0/b/mtvmusalsal.appspot.com/o/16%2F4%2FBir_Gece_Masali_S01E07.mp4?alt=media&token=7e582411-7acd-4abd-88cd-77f65ae9406a" },
  { id: 2, title: "The Batman", year: 2022, match: "97% Match", genre: "Action / Crime", duration: "2h 56m", cast: "Robert Pattinson, Zoë Kravitz", poster: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=600&auto=format&fit=crop", backdrop: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=2000&auto=format&fit=crop", desc: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption.", serverUrl: "https://www.youtube.com/embed/mqqft2x_Aa4" },
  { id: 3, title: "Spider-Man: Across the Spider-Verse", year: 2023, match: "99% Match", genre: "Animation / Action", duration: "2h 20m", cast: "Shameik Moore, Hailee Steinfeld", poster: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=600&auto=format&fit=crop", backdrop: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2000&auto=format&fit=crop", desc: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.", serverUrl: "https://www.youtube.com/embed/shW9i6k8cB0" },
  { id: 4, title: "John Wick: Chapter 4", year: 2023, match: "96% Match", genre: "Action / Thriller", duration: "2h 49m", cast: "Keanu Reeves, Donnie Yen", poster: "https://images.unsplash.com/photo-1621682372775-53a4369e38f9?q=80&w=600&auto=format&fit=crop", backdrop: "https://images.unsplash.com/photo-1621682372775-53a4369e38f9?q=80&w=2000&auto=format&fit=crop", desc: "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy.", serverUrl: "https://www.youtube.com/embed/qEVUrkHuakA" },
  { id: 5, title: "The Godfather", year: 1972, match: "100% Match", genre: "Crime / Drama", duration: "2h 55m", cast: "Marlon Brando, Al Pacino", poster: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=600&auto=format&fit=crop", backdrop: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=2000&auto=format&fit=crop", desc: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.", serverUrl: "https://www.youtube.com/embed/UaVTIH8mujA" },
  { id: 6, title: "Pulp Fiction", year: 1994, match: "99% Match", genre: "Crime / Drama", duration: "2h 34m", cast: "John Travolta, Uma Thurman", poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=600&auto=format&fit=crop", backdrop: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2000&auto=format&fit=crop", desc: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.", serverUrl: "https://www.youtube.com/embed/s7EdQ4FqbhY" },
  { id: 7, title: "Furiosa: A Mad Max Saga", year: 2024, match: "95% Match", genre: "Action / Sci-Fi", duration: "2h 28m", cast: "Anya Taylor-Joy, Chris Hemsworth", poster: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=600&auto=format&fit=crop", backdrop: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=2000&auto=format&fit=crop", desc: "The origin story of renegade warrior Furiosa before her encounter and teamup with Mad Max in 'Fury Road'.", serverUrl: "https://www.youtube.com/embed/XJMuhwVlca4" },
  { id: 1, title: "yacine: Folie à Deux", year: 2024, match: "98% Match", genre: "Crime / Drama", duration: "2h 18m", cast: "Joaquin Phoenix, Lady Gaga", poster: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=600&auto=format&fit=crop", backdrop: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=2000&auto=format&fit=crop", desc: "Arthur Fleck is institutionalized at Arkham awaiting trial for his crimes as Joker. While struggling with his dual identity, Arthur not only stumbles upon true love, but also finds the music that's always been inside him.", serverUrl: "https://firebasestorage.googleapis.com/v0/b/mtvmusalsal.appspot.com/o/16%2F4%2FBir_Gece_Masali_S01E07.mp4?alt=media&token=7e582411-7acd-4abd-88cd-77f65ae9406a" },
  { id: 8, title: "Top Gun: Maverick", year: 2022, match: "98% Match", genre: "Action / Drama", duration: "2h 10m", cast: "Tom Cruise, Miles Teller", poster: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=600&auto=format&fit=crop", backdrop: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2000&auto=format&fit=crop", desc: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past.", serverUrl: "https://www.youtube.com/embed/giXcoGa8nzo" },
];

const SERIES = [
  { id: 101, title: "Shogun", year: "2024", match: "99% Match", genre: "History / Drama", duration: "1 Season", poster: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=600&auto=format&fit=crop", backdrop: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=2000&auto=format&fit=crop", desc: "When a mysterious European ship is found abandoned in a nearby fishing village, Lord Yoshii Toranaga discovers secrets that could tip the scales of power.", serverUrl: "https://www.youtube.com/embed/HIs9x49DK7I", cast: "Hiroyuki Sanada, Cosmo Jarvis" },
  { id: 102, title: "Fallout", year: "2024", match: "98% Match", genre: "Sci-Fi / Adventure", duration: "1 Season", poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop", backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000&auto=format&fit=crop", desc: "In a future, post-apocalyptic Los Angeles caused by nuclear decimation, citizens must live in underground bunkers to protect themselves from radiation, mutants and bandits.", serverUrl: "https://www.youtube.com/embed/V-mugKDQDuty", cast: "Ella Purnell, Walton Goggins" },
  { id: 103, title: "The Boys", year: "2024", match: "97% Match", genre: "Action / Comedy", duration: "4 Seasons", poster: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?q=80&w=600&auto=format&fit=crop", backdrop: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?q=80&w=2000&auto=format&fit=crop", desc: "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.", serverUrl: "https://www.youtube.com/embed/M1bhOaLv4FU", cast: "Karl Urban, Jack Quaid" },
  { id: 104, title: "Peaky Blinders", year: "2022", match: "99% Match", genre: "Crime / Drama", duration: "6 Seasons", poster: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=600&auto=format&fit=crop", backdrop: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=2000&auto=format&fit=crop", desc: "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.", serverUrl: "https://www.youtube.com/embed/oVzVdvGIC7U", cast: "Cillian Murphy" },
  { id: 105, title: "Game of Thrones", year: "2019", match: "100% Match", genre: "Fantasy / Epic", duration: "8 Seasons", poster: "https://images.unsplash.com/photo-1519074063297-405362ff4f21?q=80&w=600&auto=format&fit=crop", backdrop: "https://images.unsplash.com/photo-1519074063297-405362ff4f21?q=80&w=2000&auto=format&fit=crop", desc: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.", serverUrl: "https://www.youtube.com/embed/bjqEWgDVPe0", cast: "Kit Harington, Emilia Clarke" },
  { id: 106, title: "Severance", year: "2022", match: "96% Match", genre: "Sci-Fi / Thriller", duration: "1 Season", poster: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop", backdrop: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop", desc: "Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives.", serverUrl: "https://www.youtube.com/embed/xkT9255E084", cast: "Adam Scott" },
];

/* ========== CORE LOGIC ========== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Hide Loader
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('done');
  }, 1000);

  // 2. Render Rows
  renderRow('trendingGrid', MOVIES);
  renderRow('seriesGrid', SERIES);
  renderRow('topRatedGrid', MOVIES.slice().reverse());

  // 3. Header Scroll Effect
  window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  });

  // 4. Basic Security
  document.addEventListener('contextmenu', event => event.preventDefault());
  document.onkeydown = function (e) {
    if (e.keyCode == 123) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
      return false;
    }
  }
});

function renderRow(containerId, data) {
  const container = document.getElementById(containerId);
  if (!container) return;

  data.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.onclick = () => openModal(movie);

    card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}" class="card-img" onerror="this.src='https://placehold.co/400x225/111/fff?text=${movie.title}'">
      <div class="card-info-mini">
        <div class="mini-title">${movie.title}</div>
        <div class="mini-meta">
          <span class="match-score">${movie.match}</span>
          <span>${movie.year}</span>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

/* ========== MODAL & PLAYER ========== */
let currentMovie = null;

function openModal(movie) {
  currentMovie = movie;
  const modal = document.getElementById('movieModal');
  const modalHeader = document.getElementById('modalHeader');
  const modalTitle = document.getElementById('modalTitle');
  const modalYear = document.getElementById('modalYear');
  const modalDesc = document.getElementById('modalDesc');
  const modalCast = document.getElementById('modalCast');
  const modalGenre = document.getElementById('modalGenre');
  const modalMatch = document.getElementById('modalMatch');
  const playerContainer = document.getElementById('playerContainer');

  playerContainer.innerHTML = '';
  playerContainer.classList.remove('active');

  modalHeader.style.backgroundImage = `url('${movie.backdrop}')`;
  modalTitle.innerText = movie.title;
  modalYear.innerText = movie.year;
  modalMatch.innerText = movie.match;
  modalDesc.innerText = movie.desc;
  modalCast.innerText = movie.cast;
  modalGenre.innerText = movie.genre;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  const modalPlayBtn = document.getElementById('modalPlayBtn');
  if (modalPlayBtn) {
    modalPlayBtn.onclick = () => startPlayer(movie.serverUrl);
  }
}

function closeModal() {
  const modal = document.getElementById('movieModal');
  const playerContainer = document.getElementById('playerContainer');
  modal.classList.remove('open');
  playerContainer.innerHTML = '';
  playerContainer.classList.remove('active');
  document.body.style.overflow = 'auto';
}

/* ========== HERO ACTIONS ========== */
function openHeroMovie() {
  const heroMovie = MOVIES[0];
  openModal(heroMovie);
  startPlayer(heroMovie.serverUrl);
}

function openHeroDetails() {
  openModal(MOVIES[0]);
}

/* ========== PLAYER LOGIC ========== */
function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function updateProgress() {
  const video = document.getElementById('customVideoPlayer');
  const progressBar = document.getElementById('customProgressBar');
  const timeDisplay = document.getElementById('customTimeDisplay');
  if (!video || !progressBar || !timeDisplay) return;

  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.width = `${percent}%`;
  timeDisplay.innerText = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
}

function seekVideo(e) {
  const video = document.getElementById('customVideoPlayer');
  const container = document.getElementById('customProgressContainer');
  if (!video || !container) return;

  const rect = container.getBoundingClientRect();
  const pos = (e.clientX - rect.left) / rect.width;
  video.currentTime = pos * video.duration;
}

function togglePlayPause(btn) {
  const video = document.getElementById('customVideoPlayer');
  if (!video) return;
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function toggleFullScreen() {
  const wrapper = document.querySelector('.player-wrapper');
  if (!wrapper) return;

  if (!document.fullscreenElement) {
    if (wrapper.requestFullscreen) {
      wrapper.requestFullscreen();
    } else if (wrapper.webkitRequestFullscreen) { /* Safari */
      wrapper.webkitRequestFullscreen();
    } else if (wrapper.msRequestFullscreen) { /* IE11 */
      wrapper.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
}

function startPlayer(url) {
  const playerContainer = document.getElementById('playerContainer');
  if (!playerContainer) return;

  // Clear and prepare structure
  let playerHtml = '';
  if (url.includes('.mp4')) {
    playerHtml = `
      <div class="player-wrapper">
        <video class="player-video" id="customVideoPlayer" src="${url}" autoplay playsinline controlsList="nodownload noplaybackrate" disablePictureInPicture></video>
        <div class="custom-video-controls">
          <button id="customPlayBtn" class="control-btn" onclick="togglePlayPause(this)">
            <svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
          </button>
          <div class="progress-container" id="customProgressContainer" onclick="seekVideo(event)">
            <div class="progress-bar" id="customProgressBar"></div>
          </div>
          <span class="time-display" id="customTimeDisplay">0:00 / 0:00</span>
          <button id="customFullscreenBtn" class="control-btn" onclick="toggleFullScreen()">
             <svg viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>
          </button>
        </div>
      </div>
    `;
  } else {
    playerHtml = `
      <div class="player-wrapper">
        <iframe class="player-iframe" 
          src="${url}?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3&showinfo=0" 
          allow="autoplay; fullscreen">
        </iframe>
      </div>
    `;
  }

  playerContainer.innerHTML = `
    <button class="player-back-btn" onclick="stopPlayer()">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor"/>
      </svg>
      Back to Details
    </button>
    ${playerHtml}
  `;

  playerContainer.classList.add('active');

  if (url.includes('.mp4')) {
    const video = document.getElementById('customVideoPlayer');
    if (video) {
      video.addEventListener('timeupdate', updateProgress);
      video.addEventListener('loadedmetadata', updateProgress);
      const playBtn = document.getElementById('customPlayBtn');
      video.addEventListener('play', () => {
        if (playBtn) playBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
      });
      video.addEventListener('pause', () => {
        if (playBtn) playBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
      });
    }
  }

  showToast('STABILIZING CINEMATIC STREAM...');
}

function stopPlayer() {
  const playerContainer = document.getElementById('playerContainer');
  if (playerContainer) {
    playerContainer.classList.remove('active');
    // Delay clearing content for transition
    setTimeout(() => {
      playerContainer.innerHTML = '';
    }, 500);
  }
}

/* ========== UI UTILS ========== */
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (toast) {
    toast.innerText = msg;
    toast.style.opacity = '1';
    setTimeout(() => { toast.style.opacity = '0'; }, 2500);
  }
}
