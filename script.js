// ========================================
// ACS Films - Complete Frontend Application
// ========================================

(function () {
    "use strict";

    // ========================================
    // DUMMY DATA
    // ========================================

    const GENRES = ["Action", "Comedy", "Drama", "Horror", "Sci-Fi", "Thriller", "Romance", "Animation", "Documentary", "Fantasy", "Adventure", "Crime"];
    const LANGUAGES = ["English", "Spanish", "French", "Korean", "Japanese", "Hindi", "German", "Italian", "Portuguese", "Chinese"];
    const YEARS = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015];

    const MOVIE_EMOJIS = ["🎬", "🎥", "🎞️", "🎭", "🍿", "🎪", "🌟", "💫", "🔥", "⚡", "🌊", "🏔️", "🚀", "🛸", "👽", "🧙", "🦸", "🏴‍☠️", "🗡️", "🎯", "💀", "👻", "🧟", "🤖", "🦖"];

    const BACKDROP_COLORS = [
        "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        "linear-gradient(135deg, #2d1b36 0%, #1a1a2e 50%, #162447 100%)",
        "linear-gradient(135deg, #0c0c1d 0%, #1b1b3a 50%, #2b1055 100%)",
        "linear-gradient(135deg, #1e3a3a 0%, #1a2a2a 50%, #0d1b2a 100%)",
        "linear-gradient(135deg, #2d1f3d 0%, #1f1147 50%, #0f0c29 100%)",
    ];

    const POSTER_COLORS = [
        ["#e50914", "#831010"], ["#3b82f6", "#1e40af"], ["#10b981", "#047857"],
        ["#f59e0b", "#b45309"], ["#8b5cf6", "#5b21b6"], ["#ec4899", "#be185d"],
        ["#06b6d4", "#0e7490"], ["#84cc16", "#4d7c0f"], ["#f97316", "#c2410c"],
        ["#6366f1", "#4338ca"],
    ];

    function generateMovies() {
        const titles = {
            movie: [
                "The Last Horizon", "Midnight Echo", "Crimson Skies", "Shadow Protocol",
                "Quantum Break", "The Iron Crown", "Neon Dreams", "Silent Storm",
                "Blade of Dawn", "The Forgotten Path", "Eternal Flame", "Dark Waters",
                "Shattered Glass", "The Phoenix Code", "Arctic Wind", "Golden Hour",
                "Venom Strike", "The White Rose", "Thunder Road", "Celestial Empire",
                "Rogue Agent", "The Abyss", "Steel Heart", "Burning Sky",
                "The Nomad King", "Frozen Throne", "Night Shift", "Chrome City",
                "The Last Samurai 2", "Obsidian Heart", "Emerald Forest", "Digital Ghost",
                "Storm Chaser", "The Red Door", "Titan's Fall", "Moonlight Sonata"
            ],
            tv: [
                "Breaking Limits", "The Crown Legacy", "Dark Matter", "Stranger Things 2.0",
                "Empire of Dust", "The Lighthouse Keepers", "Silicon Valley Wars",
                "Wolf Pack", "The Last Detective", "Cosmic Drift", "House of Mirrors",
                "The Architect", "Underworld Stories", "Parallel Lives", "Night Court",
                "The Outpost", "Code Zero", "River City", "Shadow Agents",
                "The Foundation", "Wild Hearts", "Neon Nights", "The Expanse Rising",
                "Ghost Protocol TV", "The Mandalore", "Sacred Games II"
            ]
        };

        const descriptions = [
            "An epic journey through uncharted territories where heroes are forged in the fires of adversity. A gripping tale that will keep you on the edge of your seat from start to finish.",
            "In a world where nothing is as it seems, one person must uncover the truth before time runs out. A thrilling ride through deception and redemption.",
            "A powerful story of love, loss, and redemption set against the backdrop of a changing world. Features stunning cinematography and award-winning performances.",
            "When darkness threatens to consume everything, an unlikely hero rises to challenge the impossible. An action-packed adventure for the ages.",
            "A masterful blend of suspense and drama that explores the depths of human nature. Critics call it 'a modern masterpiece' of storytelling.",
            "Set in a dystopian future, this groundbreaking story challenges our perception of reality and what it means to be truly alive.",
            "A heart-pounding thriller that weaves together multiple timelines and perspectives into one unforgettable narrative experience."
        ];

        const directors = [
            "Christopher Nolan", "Denis Villeneuve", "Greta Gerwig", "Jordan Peele",
            "Bong Joon-ho", "Chloé Zhao", "Taika Waititi", "Ava DuVernay",
            "Ryan Coogler", "Emerald Fennell", "David Fincher", "Wes Anderson"
        ];

        const cast = [
            "Timothée Chalamet", "Zendaya", "Florence Pugh", "Oscar Isaac",
            "Pedro Pascal", "Ana de Armas", "Dev Patel", "Lupita Nyong'o",
            "Tom Holland", "Anya Taylor-Joy", "John David Washington", "Saoirse Ronan"
        ];

        const countries = ["USA", "UK", "South Korea", "Japan", "France", "Germany", "India", "Canada", "Australia", "Spain"];

        const movies = [];
        let id = 1;

        titles.movie.forEach((title, i) => {
            const genre1 = GENRES[i % GENRES.length];
            const genre2 = GENRES[(i + 3) % GENRES.length];
            const lang = LANGUAGES[i % LANGUAGES.length];
            const year = YEARS[i % YEARS.length];
            const rating = (Math.random() * 3 + 6).toFixed(1);
            const colorPair = POSTER_COLORS[i % POSTER_COLORS.length];
            const emoji = MOVIE_EMOJIS[i % MOVIE_EMOJIS.length];

            movies.push({
                id: id++,
                title,
                type: "movie",
                year,
                genre: [genre1, genre2],
                language: lang,
                country: countries[i % countries.length],
                rating: parseFloat(rating),
                imdb: rating,
                tmdb: (Math.random() * 2 + 7).toFixed(1),
                rottenTomatoes: Math.floor(Math.random() * 30 + 65) + "%",
                runtime: Math.floor(Math.random() * 60 + 90) + " min",
                description: descriptions[i % descriptions.length],
                director: directors[i % directors.length],
                cast: [cast[i % cast.length], cast[(i + 1) % cast.length], cast[(i + 2) % cast.length]],
                trending: i < 10,
                subtitles: Math.random() > 0.3,
                posterColor: colorPair,
                emoji,
                backdrop: BACKDROP_COLORS[i % BACKDROP_COLORS.length],
                collection: i < 6 ? "Award Winners" : i < 12 ? "Fan Favorites" : i < 18 ? "Must Watch" : null
            });
        });

        titles.tv.forEach((title, i) => {
            const genre1 = GENRES[(i + 2) % GENRES.length];
            const genre2 = GENRES[(i + 5) % GENRES.length];
            const lang = LANGUAGES[(i + 1) % LANGUAGES.length];
            const year = YEARS[(i + 1) % YEARS.length];
            const rating = (Math.random() * 3 + 6.5).toFixed(1);
            const colorPair = POSTER_COLORS[(i + 3) % POSTER_COLORS.length];
            const emoji = MOVIE_EMOJIS[(i + 5) % MOVIE_EMOJIS.length];

            movies.push({
                id: id++,
                title,
                type: "tv",
                year,
                genre: [genre1, genre2],
                language: lang,
                country: countries[(i + 2) % countries.length],
                rating: parseFloat(rating),
                imdb: rating,
                tmdb: (Math.random() * 2 + 7).toFixed(1),
                rottenTomatoes: Math.floor(Math.random() * 30 + 60) + "%",
                runtime: Math.floor(Math.random() * 8 + 1) + " Seasons",
                description: descriptions[(i + 2) % descriptions.length],
                director: directors[(i + 3) % directors.length],
                cast: [cast[(i + 3) % cast.length], cast[(i + 4) % cast.length], cast[(i + 5) % cast.length]],
                trending: i < 8,
                subtitles: Math.random() > 0.2,
                posterColor: colorPair,
                emoji,
                backdrop: BACKDROP_COLORS[(i + 2) % BACKDROP_COLORS.length],
                collection: i < 5 ? "Binge-Worthy" : i < 10 ? "Critics' Choice" : null
            });
        });

        return movies;
    }

    const MOVIES = generateMovies();

    const COLLECTIONS = [
        { name: "🏆 Award Winners", key: "Award Winners" },
        { name: "❤️ Fan Favorites", key: "Fan Favorites" },
        { name: "🔥 Must Watch", key: "Must Watch" },
        { name: "📺 Binge-Worthy", key: "Binge-Worthy" },
        { name: "⭐ Critics' Choice", key: "Critics' Choice" }
    ];

    // ========================================
    // LOCAL STORAGE HELPERS
    // ========================================
    const Storage = {
        get(key) {
            try {
                return JSON.parse(localStorage.getItem(`acsfilms_${key}`));
            } catch {
                return null;
            }
        },
        set(key, value) {
            localStorage.setItem(`acsfilms_${key}`, JSON.stringify(value));
        },
        remove(key) {
            localStorage.removeItem(`acsfilms_${key}`);
        }
    };

    // ========================================
    // STATE
    // ========================================
    const state = {
        currentUser: Storage.get("user") || null,
        watchlist: Storage.get("watchlist") || [],
        history: Storage.get("history") || [],
        ratings: Storage.get("ratings") || {},
        comments: Storage.get("comments") || {},
        heroIndex: 0,
        heroInterval: null,
        currentMovie: null
    };

    // ========================================
    // DOM REFERENCES
    // ========================================
    const $ = (sel) => document.querySelector(sel);
    const $$ = (sel) => document.querySelectorAll(sel);

    // ========================================
    // UTILITY FUNCTIONS
    // ========================================
    function showToast(message, type = "info") {
        const container = $("#toastContainer");
        const toast = document.createElement("div");
        toast.className = `toast ${type}`;
        toast.textContent = message;
        container.appendChild(toast);
        setTimeout(() => {
            toast.style.animation = "toastOut 0.3s ease forwards";
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    function formatTime(seconds) {
        if (isNaN(seconds)) return "0:00";
        const m = Math.floor(seconds / 60);
        const s = Math.floor(seconds % 60);
        return `${m}:${s.toString().padStart(2, "0")}`;
    }

    function createMovieCard(movie, showBadge = false) {
        const card = document.createElement("div");
        card.className = "movie-card";
        card.dataset.id = movie.id;

        const [c1, c2] = movie.posterColor;
        const badgeHTML = showBadge
            ? `<div class="card-badge">${movie.type === "tv" ? "TV Series" : "Movie"}</div>`
            : movie.trending
                ? `<div class="card-badge">Trending</div>`
                : "";

        card.innerHTML = `
            <div class="card-poster" style="background: linear-gradient(135deg, ${c1}, ${c2});">
                <span style="position:relative;z-index:1;">${movie.emoji}</span>
                ${badgeHTML}
                <div class="card-rating">⭐ ${movie.rating}</div>
                <div class="card-overlay">
                    <div class="card-play-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    </div>
                </div>
            </div>
            <div class="card-info">
                <div class="card-title">${movie.title}</div>
                <div class="card-meta">
                    <span>${movie.year}</span>
                    <span>•</span>
                    <span>${movie.genre[0]}</span>
                </div>
            </div>
        `;

        card.addEventListener("click", () => openMovieDetail(movie));
        return card;
    }

    // ========================================
    // NAVIGATION
    // ========================================
    function initNavbar() {
        const navbar = $("#navbar");
        const navToggle = $("#navToggle");
        const navLinks = $("#navLinks");
        const searchToggle = $("#searchToggle");
        const searchBar = $("#searchBar");
        const searchInput = $("#searchInput");
        const searchClose = $("#searchClose");
        const searchResults = $("#searchResults");

        // Scroll effect
        window.addEventListener("scroll", () => {
            navbar.classList.toggle("scrolled", window.scrollY > 50);
        });

        // Mobile toggle
        navToggle.addEventListener("click", () => {
            navToggle.classList.toggle("active");
            navLinks.classList.toggle("active");
        });

        // Close mobile nav on link click
        navLinks.addEventListener("click", (e) => {
            if (e.target.classList.contains("nav-link") && !e.target.classList.contains("dropdown-toggle")) {
                navToggle.classList.remove("active");
                navLinks.classList.remove("active");
            }
        });

        // Mobile dropdown toggle
        $$(".dropdown-toggle").forEach(toggle => {
            toggle.addEventListener("click", (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    toggle.closest(".dropdown").classList.toggle("active");
                }
            });
        });

        // Search
        searchToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            searchBar.classList.toggle("active");
            if (searchBar.classList.contains("active")) {
                searchInput.focus();
            }
        });

        searchClose.addEventListener("click", () => {
            searchBar.classList.remove("active");
            searchInput.value = "";
            searchResults.classList.remove("active");
        });

        searchInput.addEventListener("input", (e) => {
            const query = e.target.value.trim().toLowerCase();
            if (query.length < 2) {
                searchResults.classList.remove("active");
                return;
            }

            const results = MOVIES.filter(m =>
                m.title.toLowerCase().includes(query) ||
                m.genre.some(g => g.toLowerCase().includes(query)) ||
                m.language.toLowerCase().includes(query)
            ).slice(0, 8);

            searchResults.innerHTML = results.length
                ? results.map(m => `
                    <div class="search-result-item" data-id="${m.id}">
                        <div class="search-result-poster" style="background: linear-gradient(135deg, ${m.posterColor[0]}, ${m.posterColor[1]});">${m.emoji}</div>
                        <div class="search-result-info">
                            <h4>${m.title}</h4>
                            <p>${m.year} • ${m.type === "tv" ? "TV Series" : "Movie"} • ${m.genre[0]}</p>
                        </div>
                    </div>
                `).join("")
                : `<div class="search-result-item"><div class="search-result-info"><p>No results found</p></div></div>`;

            searchResults.classList.add("active");

            searchResults.querySelectorAll("[data-id]").forEach(item => {
                item.addEventListener("click", () => {
                    const movie = MOVIES.find(m => m.id === parseInt(item.dataset.id));
                    if (movie) openMovieDetail(movie);
                    searchBar.classList.remove("active");
                    searchInput.value = "";
                    searchResults.classList.remove("active");
                });
            });
        });

        // Close search on outside click
        document.addEventListener("click", (e) => {
            if (!e.target.closest(".search-container")) {
                searchBar.classList.remove("active");
                searchResults.classList.remove("active");
            }
        });

        // Nav link filters
        $$(".nav-link[data-filter]").forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                $$(".nav-link").forEach(l => l.classList.remove("active"));
                link.classList.add("active");
                handleFilter(link.dataset.filter);
            });
        });

        // See all links
        $$(".see-all[data-filter]").forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                handleFilter(link.dataset.filter);
            });
        });

        // Logo home
        $("#logoHome").addEventListener("click", (e) => {
            e.preventDefault();
            showHome();
        });

        // Back to home
        $("#backToHome").addEventListener("click", () => showHome());

        // Populate dropdowns
        populateDropdowns();

        // Profile button
        $("#profileBtn").addEventListener("click", () => {
            if (state.currentUser) {
                openProfileModal();
            } else {
                openAuthModal();
            }
        });

        updateProfileButton();
    }

    function populateDropdowns() {
        const genreDropdown = $("#genreDropdown");
        const languageDropdown = $("#languageDropdown");
        const yearDropdown = $("#yearDropdown");

        genreDropdown.innerHTML = GENRES.map(g =>
            `<div class="dropdown-item" data-filter-type="genre" data-value="${g}">${g}</div>`
        ).join("");

        languageDropdown.innerHTML = LANGUAGES.map(l =>
            `<div class="dropdown-item" data-filter-type="language" data-value="${l}">${l}</div>`
        ).join("");

        yearDropdown.innerHTML = YEARS.map(y =>
            `<div class="dropdown-item" data-filter-type="year" data-value="${y}">${y}</div>`
        ).join("");

        $$(".dropdown-item").forEach(item => {
            item.addEventListener("click", (e) => {
                e.stopPropagation();
                const type = item.dataset.filterType;
                const value = item.dataset.value;
                filterByAttribute(type, value);
            });
        });
    }

    function handleFilter(filter) {
        let filtered = [];
        let title = "";

        switch (filter) {
            case "all-movies":
                filtered = MOVIES.filter(m => m.type === "movie");
                title = "🎬 All Movies";
                break;
            case "tv-series":
                filtered = MOVIES.filter(m => m.type === "tv");
                title = "📺 TV Series";
                break;
            case "trending-movies":
                filtered = MOVIES.filter(m => m.type === "movie" && m.trending);
                title = "🔥 Trending Movies";
                break;
            case "trending-tv":
                filtered = MOVIES.filter(m => m.type === "tv" && m.trending);
                title = "📺 Trending TV Series";
                break;
            case "collections":
                showCollections();
                return;
            default:
                filtered = MOVIES;
                title = "All Content";
        }

        showFilteredResults(filtered, title);
    }

    function filterByAttribute(type, value) {
        let filtered = [];
        let title = "";

        switch (type) {
            case "genre":
                filtered = MOVIES.filter(m => m.genre.includes(value));
                title = `🎭 ${value} Movies & Series`;
                break;
            case "language":
                filtered = MOVIES.filter(m => m.language === value);
                title = `🌍 ${value} Content`;
                break;
            case "year":
                filtered = MOVIES.filter(m => m.year === parseInt(value));
                title = `📅 ${value} Releases`;
                break;
        }

        showFilteredResults(filtered, title);

        // Close mobile nav
        const navToggle = $("#navToggle");
        const navLinks = $("#navLinks");
        navToggle.classList.remove("active");
        navLinks.classList.remove("active");
    }

    function showFilteredResults(movies, title) {
        const contentSections = $("#contentSections");
        const heroSection = $("#heroSection");
        const filteredSection = $("#filteredSection");
        const filteredGrid = $("#filteredGrid");
        const filteredTitle = $("#filteredTitle");

        contentSections.style.display = "none";
        heroSection.style.display = "none";
        filteredSection.style.display = "block";
        filteredTitle.textContent = title;

        filteredGrid.innerHTML = "";
        if (movies.length === 0) {
            filteredGrid.innerHTML = `<p class="empty-state">No content found matching your criteria.</p>`;
        } else {
            movies.forEach(m => filteredGrid.appendChild(createMovieCard(m, true)));
        }

        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function showCollections() {
        const contentSections = $("#contentSections");
        const heroSection = $("#heroSection");
        const filteredSection = $("#filteredSection");
        const collectionsSection = $("#collectionsSection");

        filteredSection.style.display = "none";
        heroSection.style.display = "none";

        // Show only collections section in content
        $$("#contentSections > section").forEach(s => s.style.display = "none");
        collectionsSection.style.display = "block";
        contentSections.style.display = "block";

        const container = $("#collectionsContainer");
        container.innerHTML = "";

        COLLECTIONS.forEach(col => {
            const movies = MOVIES.filter(m => m.collection === col.key);
            if (movies.length === 0) return;

            const group = document.createElement("div");
            group.className = "collection-group";
            group.innerHTML = `<h3>${col.name}</h3>`;

            const grid = document.createElement("div");
            grid.className = "collection-grid";
            movies.forEach(m => grid.appendChild(createMovieCard(m, true)));

            group.appendChild(grid);
            container.appendChild(group);
        });

        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function showHome() {
        const contentSections = $("#contentSections");
        const heroSection = $("#heroSection");
        const filteredSection = $("#filteredSection");

        filteredSection.style.display = "none";
        heroSection.style.display = "flex";
        contentSections.style.display = "block";

        // Restore all sections
        $$("#contentSections > section").forEach(s => {
            if (s.id !== "collectionsSection") s.style.display = "block";
            else s.style.display = "none";
        });

        $$(".nav-link").forEach(l => l.classList.remove("active"));
        $$(".nav-link")[0]?.classList.add("active");

        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // ========================================
    // HERO SECTION
    // ========================================
    function initHero() {
        const trendingMovies = MOVIES.filter(m => m.trending && m.type === "movie").slice(0, 5);
        const indicators = $("#heroIndicators");

        indicators.innerHTML = trendingMovies.map((_, i) =>
            `<div class="hero-indicator ${i === 0 ? 'active' : ''}" data-index="${i}"></div>`
        ).join("");

        indicators.querySelectorAll(".hero-indicator").forEach(ind => {
            ind.addEventListener("click", () => {
                state.heroIndex = parseInt(ind.dataset.index);
                updateHero(trendingMovies);
            });
        });

        updateHero(trendingMovies);

        state.heroInterval = setInterval(() => {
            state.heroIndex = (state.heroIndex + 1) % trendingMovies.length;
            updateHero(trendingMovies);
        }, 6000);
    }

    function updateHero(movies) {
        const movie = movies[state.heroIndex];
        if (!movie) return;

        const heroBackdrop = $("#heroBackdrop");
        const heroTitle = $("#heroTitle");
        const heroMeta = $("#heroMeta");
        const heroDescription = $("#heroDescription");

        heroBackdrop.style.background = movie.backdrop;
        heroTitle.textContent = movie.title;
        heroDescription.textContent = movie.description;

        heroMeta.innerHTML = `
            <span class="rating-badge">⭐ ${movie.rating}</span>
            <span>${movie.year}</span>
            <span>•</span>
            <span>${movie.runtime}</span>
            <span>•</span>
            <span>${movie.genre.join(", ")}</span>
        `;

        // Update indicators
        $$(".hero-indicator").forEach((ind, i) => {
            ind.classList.toggle("active", i === state.heroIndex);
        });

        // Attach play/info handlers
        const playBtn = $("#heroPlayBtn");
        const infoBtn = $("#heroInfoBtn");

        const newPlayBtn = playBtn.cloneNode(true);
        const newInfoBtn = infoBtn.cloneNode(true);
        playBtn.replaceWith(newPlayBtn);
        infoBtn.replaceWith(newInfoBtn);

        newPlayBtn.addEventListener("click", () => openMovieDetail(movie));
        newInfoBtn.addEventListener("click", () => openMovieDetail(movie));
    }

    // ========================================
    // CAROUSELS
    // ========================================
    function initCarousels() {
        const trendingMovies = MOVIES.filter(m => m.type === "movie" && m.trending);
        const trendingTv = MOVIES.filter(m => m.type === "tv" && m.trending);
        const allMovies = MOVIES.filter(m => m.type === "movie");
        const allTv = MOVIES.filter(m => m.type === "tv");

        populateCarousel("trendingMoviesCarousel", trendingMovies);
        populateCarousel("trendingTvCarousel", trendingTv);
        populateCarousel("allMoviesCarousel", allMovies);
        populateCarousel("allTvCarousel", allTv);

        initCarouselArrows();
    }

    function populateCarousel(containerId, movies) {
        const container = $(`#${containerId}`);
        container.innerHTML = "";
        movies.forEach(m => container.appendChild(createMovieCard(m)));
    }

    function initCarouselArrows() {
        $$(".carousel-wrapper").forEach(wrapper => {
            const carousel = wrapper.querySelector(".carousel");
            const leftBtn = wrapper.querySelector(".arrow-left");
            const rightBtn = wrapper.querySelector(".arrow-right");

            if (leftBtn) {
                leftBtn.addEventListener("click", () => {
                    carousel.scrollBy({ left: -carousel.clientWidth * 0.8, behavior: "smooth" });
                });
            }
            if (rightBtn) {
                rightBtn.addEventListener("click", () => {
                    carousel.scrollBy({ left: carousel.clientWidth * 0.8, behavior: "smooth" });
                });
            }
        });
    }

    // ========================================
    // MOVIE DETAIL MODAL
    // ========================================
    function openMovieDetail(movie) {
        state.currentMovie = movie;
        const modal = $("#movieDetailModal");

        // Add to watch history
        addToHistory(movie);

        // Set poster
        const poster = $("#videoPoster");
        poster.style.background = movie.backdrop;
        poster.classList.remove("hidden");

        // Reset video
        const video = $("#videoPlayer");
        video.classList.remove("active");
        video.pause();
        video.currentTime = 0;
        $(".play-icon").style.display = "";
        $(".pause-icon").style.display = "none";
        $("#progressFilled").style.width = "0%";

        // Title & Description
        $("#detailTitle").textContent = movie.title;
        $("#detailDescription").textContent = movie.description;

        // Meta
        $("#detailMeta").innerHTML = `
            <span>${movie.year}</span>
            <span>•</span>
            <span>${movie.runtime}</span>
            <span>•</span>
            <span>${movie.language}</span>
            <span>•</span>
            ${movie.genre.map(g => `<span class="tag">${g}</span>`).join("")}
        `;

        // Scores
        $("#scoresContainer").innerHTML = `
            <div class="score-item">
                <div class="score-label">IMDb</div>
                <div class="score-value score-imdb">${movie.imdb}</div>
            </div>
            <div class="score-item">
                <div class="score-label">TMDb</div>
                <div class="score-value score-tmdb">${movie.tmdb}</div>
            </div>
            <div class="score-item">
                <div class="score-label">Rotten Tomatoes</div>
                <div class="score-value score-rt">${movie.rottenTomatoes}</div>
            </div>
        `;

        // Info Grid
        $("#infoGrid").innerHTML = `
            <div class="info-item">
                <div class="info-label">Director</div>
                <div class="info-value">${movie.director}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Language</div>
                <div class="info-value">${movie.language}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Country</div>
                <div class="info-value">${movie.country}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Subtitles</div>
                <div class="info-value">${movie.subtitles ? "Available" : "N/A"}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Cast</div>
                <div class="info-value">${movie.cast.join(", ")}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Type</div>
                <div class="info-value">${movie.type === "tv" ? "TV Series" : "Movie"}</div>
            </div>
        `;

        // Watchlist button
        updateWatchlistButton(movie);

        // Star rating
        updateStarRating(movie);

        // Comments
        renderComments(movie);

        modal.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeMovieDetail() {
        const modal = $("#movieDetailModal");
        const video = $("#videoPlayer");
        video.pause();
        modal.classList.remove("active");
        document.body.style.overflow = "";
        state.currentMovie = null;
    }

    function initMovieDetail() {
        $("#detailClose").addEventListener("click", closeMovieDetail);
        $("#movieDetailModal").addEventListener("click", (e) => {
            if (e.target === e.currentTarget) closeMovieDetail();
        });

        // Play overlay
        $("#playOverlayBtn").addEventListener("click", () => {
            const poster = $("#videoPoster");
            const video = $("#videoPlayer");
            poster.classList.add("hidden");
            video.classList.add("active");
            // In a real app, video.src would be set; for demo we just show controls
            showToast("Demo mode: Video player ready", "info");
        });

        // Watchlist button
        $("#addWatchlistBtn").addEventListener("click", () => {
            if (!state.currentUser) {
                showToast("Please sign in to use watchlist", "error");
                openAuthModal();
                return;
            }
            if (state.currentMovie) {
                toggleWatchlist(state.currentMovie);
            }
        });

        // Star rating
        const stars = $$("#starRating .star");
        stars.forEach(star => {
            star.addEventListener("mouseenter", () => {
                const val = parseInt(star.dataset.value);
                stars.forEach(s => {
                    s.classList.toggle("hover-active", parseInt(s.dataset.value) <= val);
                });
            });
            star.addEventListener("mouseleave", () => {
                stars.forEach(s => s.classList.remove("hover-active"));
            });
            star.addEventListener("click", () => {
                if (!state.currentUser) {
                    showToast("Please sign in to rate", "error");
                    openAuthModal();
                    return;
                }
                const val = parseInt(star.dataset.value);
                if (state.currentMovie) {
                    state.ratings[state.currentMovie.id] = val;
                    Storage.set("ratings", state.ratings);
                    updateStarRating(state.currentMovie);
                    showToast(`Rated ${val} star${val > 1 ? "s" : ""}!`, "success");
                }
            });
        });

        // Comment submit
        $("#submitComment").addEventListener("click", () => {
            if (!state.currentUser) {
                showToast("Please sign in to comment", "error");
                openAuthModal();
                return;
            }
            const input = $("#commentInput");
            const text = input.value.trim();
            if (!text) return;

            if (!state.comments[state.currentMovie.id]) {
                state.comments[state.currentMovie.id] = [];
            }

            state.comments[state.currentMovie.id].push({
                user: state.currentUser.name,
                text,
                time: new Date().toLocaleString()
            });

            Storage.set("comments", state.comments);
            input.value = "";
            renderComments(state.currentMovie);
            showToast("Comment posted!", "success");
        });
    }

    function updateWatchlistButton(movie) {
        const btn = $("#addWatchlistBtn");
        const isInWatchlist = state.watchlist.some(id => id === movie.id);

        if (isInWatchlist) {
            btn.classList.add("saved");
            btn.querySelector("span").textContent = "In Watchlist";
        } else {
            btn.classList.remove("saved");
            btn.querySelector("span").textContent = "Add to Watchlist";
        }
    }

    function toggleWatchlist(movie) {
        const index = state.watchlist.indexOf(movie.id);
        if (index > -1) {
            state.watchlist.splice(index, 1);
            showToast("Removed from watchlist", "info");
        } else {
            state.watchlist.push(movie.id);
            showToast("Added to watchlist!", "success");
        }
        Storage.set("watchlist", state.watchlist);
        updateWatchlistButton(movie);
    }

    function updateStarRating(movie) {
        const rating = state.ratings[movie.id] || 0;
        const stars = $$("#starRating .star");
        stars.forEach(s => {
            s.classList.toggle("active", parseInt(s.dataset.value) <= rating);
        });
        $("#ratingText").textContent = rating ? `You rated: ${rating}/5` : "Click to rate";
    }

    function renderComments(movie) {
        const list = $("#commentsList");
        const comments = state.comments[movie.id] || [];

        if (comments.length === 0) {
            list.innerHTML = `<p style="color: var(--text-muted); font-size: 14px;">No comments yet. Be the first!</p>`;
            return;
        }

        list.innerHTML = comments.map(c => `
            <div class="comment-item">
                <div class="comment-header">
                    <div class="comment-avatar">${c.user.charAt(0).toUpperCase()}</div>
                    <span class="comment-name">${c.user}</span>
                    <span class="comment-time">${c.time}</span>
                </div>
                <p class="comment-text">${escapeHtml(c.text)}</p>
            </div>
        `).reverse().join("");
    }

    function escapeHtml(text) {
        const div = document.createElement("div");
        div.textContent = text;
        return div.innerHTML;
    }

    function addToHistory(movie) {
        // Remove if already exists
        state.history = state.history.filter(id => id !== movie.id);
        // Add to front
        state.history.unshift(movie.id);
        // Keep last 20
        state.history = state.history.slice(0, 20);
        Storage.set("history", state.history);
    }

    // ========================================
    // CUSTOM VIDEO PLAYER
    // ========================================
    function initVideoPlayer() {
        const video = $("#videoPlayer");
        const playPauseBtn = $("#playPauseBtn");
        const playIcon = $(".play-icon");
        const pauseIcon = $(".pause-icon");
        const volumeBtn = $("#volumeBtn");
        const volumeSlider = $("#volumeSlider");
        const volHigh = $(".vol-high");
        const volMute = $(".vol-mute");
        const progressContainer = $("#progressContainer");
        const progressFilled = $("#progressFilled");
        const timeDisplay = $("#timeDisplay");
        const speedBtn = $("#speedBtn");
        const speedMenu = $("#speedMenu");
        const subtitleBtn = $("#subtitleBtn");
        const fullscreenBtn = $("#fullscreenBtn");
        const playerContainer = $("#videoPlayerContainer");

        // Play/Pause
        playPauseBtn.addEventListener("click", () => {
            if (video.paused) {
                video.play().catch(() => {
                    showToast("Demo mode: No video source loaded", "info");
                });
            } else {
                video.pause();
            }
        });

        video.addEventListener("play", () => {
            playIcon.style.display = "none";
            pauseIcon.style.display = "";
        });

        video.addEventListener("pause", () => {
            playIcon.style.display = "";
            pauseIcon.style.display = "none";
        });

        // Time update
        video.addEventListener("timeupdate", () => {
            if (video.duration) {
                const pct = (video.currentTime / video.duration) * 100;
                progressFilled.style.width = pct + "%";
                timeDisplay.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
            }
        });

        // Progress click
        progressContainer.addEventListener("click", (e) => {
            const rect = progressContainer.getBoundingClientRect();
            const pct = (e.clientX - rect.left) / rect.width;
            if (video.duration) {
                video.currentTime = pct * video.duration;
            }
        });

        // Volume
        volumeBtn.addEventListener("click", () => {
            video.muted = !video.muted;
            volHigh.style.display = video.muted ? "none" : "";
            volMute.style.display = video.muted ? "" : "none";
        });

        volumeSlider.addEventListener("input", (e) => {
            video.volume = parseFloat(e.target.value);
            video.muted = false;
            volHigh.style.display = "";
            volMute.style.display = "none";
        });

        // Speed
        speedBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            speedMenu.classList.toggle("active");
        });

        speedMenu.querySelectorAll("button").forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                const speed = parseFloat(btn.dataset.speed);
                video.playbackRate = speed;
                speedBtn.textContent = speed + "x";
                speedMenu.querySelectorAll("button").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                speedMenu.classList.remove("active");
            });
        });

        // Close speed menu on outside click
        document.addEventListener("click", () => {
            speedMenu.classList.remove("active");
        });

        // Subtitles toggle
        let subtitlesOn = false;
        subtitleBtn.addEventListener("click", () => {
            subtitlesOn = !subtitlesOn;
            subtitleBtn.style.color = subtitlesOn ? "var(--accent-primary)" : "";
            showToast(subtitlesOn ? "Subtitles enabled" : "Subtitles disabled", "info");
        });

        // Fullscreen
        fullscreenBtn.addEventListener("click", () => {
            if (!document.fullscreenElement) {
                playerContainer.requestFullscreen?.() ||
                    playerContainer.webkitRequestFullscreen?.() ||
                    playerContainer.msRequestFullscreen?.();
            } else {
                document.exitFullscreen?.() ||
                    document.webkitExitFullscreen?.() ||
                    document.msExitFullscreen?.();
            }
        });
    }

    // ========================================
    // AUTH MODAL
    // ========================================
    function openAuthModal() {
        $("#authModal").classList.add("active");
        document.body.style.overflow = "hidden";
        // Show sign in by default
        $("#signInForm").style.display = "block";
        $("#signUpForm").style.display = "none";
    }

    function closeAuthModal() {
        $("#authModal").classList.remove("active");
        document.body.style.overflow = "";
    }

    function initAuth() {
        $("#authClose").addEventListener("click", closeAuthModal);
        $("#authModal").addEventListener("click", (e) => {
            if (e.target === e.currentTarget) closeAuthModal();
        });

        // Toggle forms
        $("#showSignUp").addEventListener("click", (e) => {
            e.preventDefault();
            $("#signInForm").style.display = "none";
            $("#signUpForm").style.display = "block";
        });

        $("#showSignIn").addEventListener("click", (e) => {
            e.preventDefault();
            $("#signUpForm").style.display = "none";
            $("#signInForm").style.display = "block";
        });

        // Sign In
        $("#signInBtn").addEventListener("click", () => {
            const email = $("#signInEmail").value.trim();
            const password = $("#signInPassword").value.trim();

            if (!email || !password) {
                showToast("Please fill in all fields", "error");
                return;
            }
            if (!email.includes("@")) {
                showToast("Please enter a valid email", "error");
                return;
            }

            // Mock sign in
            const user = { name: email.split("@")[0], email };
            signIn(user);
        });

        // Sign Up
        $("#signUpBtn").addEventListener("click", () => {
            const name = $("#signUpName").value.trim();
            const email = $("#signUpEmail").value.trim();
            const password = $("#signUpPassword").value.trim();

            if (!name || !email || !password) {
                showToast("Please fill in all fields", "error");
                return;
            }
            if (!email.includes("@")) {
                showToast("Please enter a valid email", "error");
                return;
            }
            if (password.length < 6) {
                showToast("Password must be at least 6 characters", "error");
                return;
            }

            const user = { name, email };
            signIn(user);
            showToast("Account created successfully!", "success");
        });

        // Social sign in buttons
        const socialHandler = (provider) => {
            const user = { name: `${provider} User`, email: `user@${provider.toLowerCase()}.com` };
            signIn(user);
            showToast(`Signed in with ${provider}`, "success");
        };

        $("#googleSignIn").addEventListener("click", () => socialHandler("Google"));
        $("#appleSignIn").addEventListener("click", () => socialHandler("Apple"));
        $("#googleSignUp").addEventListener("click", () => socialHandler("Google"));
        $("#appleSignUp").addEventListener("click", () => socialHandler("Apple"));

        // Logout
        $("#logoutBtn").addEventListener("click", () => {
            state.currentUser = null;
            Storage.remove("user");
            updateProfileButton();
            closeProfileModal();
            showToast("Signed out successfully", "info");
        });
    }

    function signIn(user) {
        state.currentUser = user;
        Storage.set("user", user);
        updateProfileButton();
        closeAuthModal();
        showToast(`Welcome, ${user.name}!`, "success");
    }

    function updateProfileButton() {
        const btn = $("#profileBtn");
        if (state.currentUser) {
            btn.className = "profile-btn logged-in";
            btn.innerHTML = state.currentUser.name.charAt(0).toUpperCase();
        } else {
            btn.className = "profile-btn";
            btn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
        }
    }

    // ========================================
    // PROFILE MODAL
    // ========================================
    function openProfileModal() {
        const modal = $("#profileModal");

        if (state.currentUser) {
            $("#profileName").textContent = state.currentUser.name;
            $("#profileEmail").textContent = state.currentUser.email;
            $("#profileAvatar").textContent = state.currentUser.name.charAt(0).toUpperCase();
        }

        // Load watchlist
        renderWatchlist();
        renderHistory();

        modal.classList.add("active");
        document.body.style.overflow = "hidden";

        // Show first tab
        activateTab("watchlist");
    }

    function closeProfileModal() {
        $("#profileModal").classList.remove("active");
        document.body.style.overflow = "";
    }

    function initProfile() {
        $("#profileClose").addEventListener("click", closeProfileModal);
        $("#profileModal").addEventListener("click", (e) => {
            if (e.target === e.currentTarget) closeProfileModal();
        });

        // Tabs
        $$(".tab-btn").forEach(tab => {
            tab.addEventListener("click", () => {
                activateTab(tab.dataset.tab);
            });
        });

        // Request form
        $("#requestForm").addEventListener("submit", (e) => {
            e.preventDefault();
            const title = $("#requestTitle").value.trim();
            if (!title) {
                showToast("Please enter a title", "error");
                return;
            }

            showToast(`Request submitted for "${title}"! We'll review it soon.`, "success");
            $("#requestForm").reset();
        });
    }

    function activateTab(tabName) {
        $$(".tab-btn").forEach(t => t.classList.toggle("active", t.dataset.tab === tabName));
        $("#watchlistTab").style.display = tabName === "watchlist" ? "block" : "none";
        $("#historyTab").style.display = tabName === "history" ? "block" : "none";
        $("#requestTab").style.display = tabName === "request" ? "block" : "none";
    }

    function renderWatchlist() {
        const grid = $("#watchlistGrid");
        const watchlistMovies = state.watchlist.map(id => MOVIES.find(m => m.id === id)).filter(Boolean);

        if (watchlistMovies.length === 0) {
            grid.innerHTML = `<p class="empty-state">Your watchlist is empty. Start adding movies!</p>`;
            return;
        }

        grid.innerHTML = "";
        watchlistMovies.forEach(m => grid.appendChild(createMovieCard(m, true)));
    }

    function renderHistory() {
        const grid = $("#historyGrid");
        const historyMovies = state.history.map(id => MOVIES.find(m => m.id === id)).filter(Boolean);

        if (historyMovies.length === 0) {
            grid.innerHTML = `<p class="empty-state">No watch history yet.</p>`;
            return;
        }

        grid.innerHTML = "";
        historyMovies.forEach(m => grid.appendChild(createMovieCard(m, true)));
    }

    // ========================================
    // KEYBOARD SHORTCUTS
    // ========================================
    function initKeyboard() {
        document.addEventListener("keydown", (e) => {
            // Escape to close modals
            if (e.key === "Escape") {
                if ($("#movieDetailModal").classList.contains("active")) {
                    closeMovieDetail();
                } else if ($("#authModal").classList.contains("active")) {
                    closeAuthModal();
                } else if ($("#profileModal").classList.contains("active")) {
                    closeProfileModal();
                }
            }

            // Ctrl/Cmd + K for search
            if ((e.ctrlKey || e.metaKey) && e.key === "k") {
                e.preventDefault();
                const searchBar = $("#searchBar");
                searchBar.classList.add("active");
                $("#searchInput").focus();
            }
        });
    }

    // ========================================
    // INITIALIZATION
    // ========================================
    function init() {
        initNavbar();
        initHero();
        initCarousels();
        initMovieDetail();
        initVideoPlayer();
        initAuth();
        initProfile();
        initKeyboard();

        // Trigger scroll check
        window.dispatchEvent(new Event("scroll"));
    }

    // Run when DOM is ready
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
